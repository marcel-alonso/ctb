// Configurações e Estado Global
const state = {
    currentSection: 'posts',
    currentPost: null,
    posts: [],
    mediaFiles: []
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initializeEditor();
    setupEventListeners();
    loadPosts();
    checkAuthentication();
});

// Autenticação
function checkAuthentication() {
    const token = localStorage.getItem('adminToken');
    if (!token) {
        window.location.href = 'login.html';
    }
}

function logout() {
    localStorage.removeItem('adminToken');
    window.location.href = 'login.html';
}

// Navegação
function setupEventListeners() {
    // Navegação
    document.querySelectorAll('.admin-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.dataset.section;
            switchSection(section);
        });
    });

    // Posts
    document.getElementById('new-post').addEventListener('click', createNewPost);
    document.getElementById('save-draft').addEventListener('click', saveDraft);
    document.getElementById('publish-post').addEventListener('click', publishPost);
    document.getElementById('preview-post').addEventListener('click', previewPost);

    // Mídia
    document.getElementById('upload-media').addEventListener('click', openMediaUpload);
    document.getElementById('select-cover').addEventListener('click', openMediaSelector);

    // Modal
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    
    // Logout
    document.getElementById('logout').addEventListener('click', logout);
}

function switchSection(section) {
    // Atualiza navegação
    document.querySelectorAll('.admin-nav a').forEach(link => {
        link.classList.toggle('active', link.dataset.section === section);
    });

    // Esconde todas as seções
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.add('hidden');
    });

    // Mostra a seção selecionada
    document.getElementById(`${section}-section`).classList.remove('hidden');
    state.currentSection = section;
}

// Editor
let editor;

function initializeEditor() {
    editor = new EasyMDE({
        element: document.getElementById('editor'),
        spellChecker: false,
        autosave: {
            enabled: true,
            delay: 1000,
            uniqueId: 'post-content'
        },
        toolbar: [
            'bold', 'italic', 'heading', '|',
            'quote', 'unordered-list', 'ordered-list', '|',
            'link', 'image', '|',
            'preview', 'side-by-side', 'fullscreen', '|',
            'guide'
        ]
    });
}

// Gerenciamento de Posts
async function loadPosts() {
    try {
        const response = await fetch('/api/posts');
        const posts = await response.json();
        state.posts = posts;
        renderPostsList();
    } catch (error) {
        console.error('Erro ao carregar posts:', error);
        // Implementar tratamento de erro
    }
}

function renderPostsList() {
    const tbody = document.getElementById('posts-list');
    tbody.innerHTML = state.posts.map(post => `
        <tr>
            <td>${post.title}</td>
            <td><span class="status-badge status-${post.status}">${post.status}</span></td>
            <td>${new Date(post.date).toLocaleDateString()}</td>
            <td>
                <button onclick="editPost('${post.id}')" class="button">Editar</button>
                <button onclick="deletePost('${post.id}')" class="button">Excluir</button>
            </td>
        </tr>
    `).join('');
}

async function createNewPost() {
    state.currentPost = {
        id: Date.now().toString(),
        title: '',
        content: '',
        status: 'draft',
        date: new Date().toISOString()
    };
    switchToEditor();
}

function switchToEditor() {
    document.getElementById('posts-section').classList.add('hidden');
    document.getElementById('editor-section').classList.remove('hidden');
    
    // Preenche o editor com os dados do post atual
    if (state.currentPost) {
        document.getElementById('post-title').value = state.currentPost.title;
        editor.value(state.currentPost.content);
        document.getElementById('post-status').value = state.currentPost.status;
        document.getElementById('post-date').value = state.currentPost.date.slice(0, 16);
    }
}

async function saveDraft() {
    const postData = getPostData();
    postData.status = 'draft';
    await savePost(postData);
}

async function publishPost() {
    const postData = getPostData();
    postData.status = 'published';
    await savePost(postData);
}

function getPostData() {
    return {
        id: state.currentPost?.id || Date.now().toString(),
        title: document.getElementById('post-title').value,
        content: editor.value(),
        excerpt: document.getElementById('post-excerpt').value,
        status: document.getElementById('post-status').value,
        date: document.getElementById('post-date').value,
        category: document.getElementById('post-category').value
    };
}

async function savePost(postData) {
    try {
        const response = await fetch('/api/posts', {
            method: postData.id ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            },
            body: JSON.stringify(postData)
        });

        if (response.ok) {
            await loadPosts();
            switchSection('posts');
        } else {
            throw new Error('Erro ao salvar post');
        }
    } catch (error) {
        console.error('Erro ao salvar:', error);
        // Implementar tratamento de erro
    }
}

// Preview
function previewPost() {
    const modal = document.getElementById('preview-modal');
    const iframe = document.getElementById('preview-frame');
    
    // Gera HTML de preview
    const postData = getPostData();
    const previewHtml = generatePreviewHtml(postData);
    
    // Carrega no iframe
    iframe.srcdoc = previewHtml;
    modal.classList.add('active');
}

function generatePreviewHtml(post) {
    return `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${post.title} - Preview</title>
            <link rel="stylesheet" href="../css/styles.css">
            <link rel="stylesheet" href="../css/blog.css">
        </head>
        <body>
            <article class="blog-post">
                <header class="blog-post__header">
                    <div class="container">
                        <div class="blog-post__meta">
                            <span class="blog-post__category">${post.category}</span>
                            <time datetime="${post.date}" class="blog-post__date">
                                ${new Date(post.date).toLocaleDateString()}
                            </time>
                        </div>
                        <h1 class="blog-post__title">${post.title}</h1>
                        <p class="blog-post__excerpt">${post.excerpt}</p>
                    </div>
                </header>
                <div class="container">
                    <div class="blog-post__content">
                        ${marked(post.content)}
                    </div>
                </div>
            </article>
        </body>
        </html>
    `;
}

function closeModal() {
    document.getElementById('preview-modal').classList.remove('active');
}

// Gerenciamento de Mídia
function openMediaUpload() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.onchange = uploadFiles;
    input.click();
}

async function uploadFiles(event) {
    const files = event.target.files;
    const formData = new FormData();
    
    for (let file of files) {
        formData.append('files', file);
    }
    
    try {
        const response = await fetch('/api/media/upload', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            },
            body: formData
        });
        
        if (response.ok) {
            loadMediaFiles();
        }
    } catch (error) {
        console.error('Erro no upload:', error);
        // Implementar tratamento de erro
    }
}

async function loadMediaFiles() {
    try {
        const response = await fetch('/api/media');
        const files = await response.json();
        state.mediaFiles = files;
        renderMediaGrid();
    } catch (error) {
        console.error('Erro ao carregar arquivos:', error);
        // Implementar tratamento de erro
    }
}

function renderMediaGrid() {
    const grid = document.getElementById('media-list');
    grid.innerHTML = state.mediaFiles.map(file => `
        <div class="media-item">
            <img src="${file.url}" alt="${file.name}">
            <div class="media-item-info">
                <p>${file.name}</p>
                <button onclick="deleteMedia('${file.id}')" class="button">Excluir</button>
            </div>
        </div>
    `).join('');
}

// Exporta funções necessárias globalmente
window.editPost = editPost;
window.deletePost = deletePost;
window.deleteMedia = deleteMedia;
