// ============================================================================
// Painel Administrativo - Conexão Terra Bambu
// Sistema completo de gerenciamento de blog com integração GitHub API
// ============================================================================

// Estado Global
const appState = {
    currentView: 'posts',
    currentPost: null,
    posts: [],
    authors: [],
    tags: [],
    mediaFiles: [],
    config: {
        githubToken: sessionStorage.getItem('github_token') || '',
        githubOwner: localStorage.getItem('github_owner') || '',
        githubRepo: localStorage.getItem('github_repo') || '',
        githubBranch: localStorage.getItem('github_branch') || 'main',
        siteTitle: localStorage.getItem('site_title') || 'Conexão Terra Bambu',
        siteDescription: localStorage.getItem('site_description') || ''
    },
    editor: null
};

// ============================================================================
// Inicialização
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    checkAuthentication();
    initializeEditor();
    setupEventListeners();
    loadAuthors();
    loadPosts();
    checkGitHubToken();
});

function checkAuthentication() {
    const token = sessionStorage.getItem('admin_token');
    if (!token) {
        window.location.href = 'login.html';
    }
}

function initializeEditor() {
    appState.editor = new EasyMDE({
        element: document.getElementById('post-content'),
        spellChecker: false,
        autoDownloadFontAwesome: false,
        toolbar: [
            'bold', 'italic', 'heading', '|',
            'quote', 'unordered-list', 'ordered-list', '|',
            'link', 'image', '|',
            'preview', 'guide'
        ]
    });

    // Atualizar contadores ao digitar
    document.getElementById('post-content').addEventListener('input', () => {
        updateContentStats();
    });
}

// ============================================================================
// Event Listeners
// ============================================================================

function setupEventListeners() {
    // Navegação por abas
    document.querySelectorAll('[data-view]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(btn.dataset.view);
        });
    });

    // Posts
    document.getElementById('new-post-btn').addEventListener('click', createNewPost);
    document.getElementById('submit-btn').addEventListener('click', handleSavePost);
    document.getElementById('cancel-btn').addEventListener('click', () => switchView('posts'));
    document.getElementById('preview-btn').addEventListener('click', previewPost);

    // Tags
    document.getElementById('tag-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag(e.target.value);
            e.target.value = '';
        }
    });

    // Título e Slug
    document.getElementById('post-title').addEventListener('input', (e) => {
        const slug = slugify(e.target.value);
        document.getElementById('post-slug').value = slug;
        updateCanonicalUrl(slug);
        document.getElementById('slug-preview').textContent = slug;
        document.getElementById('slug-preview').style.display = 'inline-block';
    });

    // Imagem de Capa
    document.getElementById('cover-image').addEventListener('change', handleCoverImageUpload);

    // Logout
    document.getElementById('logout-btn').addEventListener('click', logout);

    // Modais
    document.getElementById('preview-close').addEventListener('click', closeModal);
    document.getElementById('author-modal-close').addEventListener('click', closeAuthorModal);
    document.getElementById('author-cancel-btn').addEventListener('click', closeAuthorModal);

    // Configurações
    document.getElementById('save-site-config').addEventListener('click', saveSiteConfig);
    document.getElementById('save-seo-config').addEventListener('click', saveSeoConfig);
    document.getElementById('save-github-config').addEventListener('click', saveGitHubConfig);
    document.getElementById('add-author-btn').addEventListener('click', openAuthorModal);
    document.getElementById('author-form').addEventListener('submit', saveAuthor);

    // Tabs de configuração
    document.querySelectorAll('.tabs-container .tab-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchConfigTab(btn.dataset.tab);
        });
    });

    // Upload de mídia
    document.getElementById('upload-media-btn').addEventListener('click', uploadMediaFile);

    // Seções colapsáveis
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('collapsed');
        });
    });

    // Search e Filter
    document.getElementById('search-input').addEventListener('input', filterPosts);
    document.getElementById('filter-category').addEventListener('change', filterPosts);
}

// ============================================================================
// Utilitários
// ============================================================================

function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    
    return { wordCount, readingTime };
}

function updateContentStats() {
    const content = appState.editor.value();
    const { wordCount, readingTime } = calculateReadingTime(content);
    
    document.getElementById('word-count').textContent = wordCount;
    document.getElementById('reading-time').textContent = readingTime + ' min';
    document.getElementById('char-count').textContent = content.length;
}

function updateCanonicalUrl(slug) {
    const canonical = `https://conexaoterrabambu.com.br/blog/${slug}`;
    document.getElementById('canonical-display').textContent = canonical;
    document.getElementById('post-canonical').value = canonical;
}

function showSuccess(message) {
    const el = document.getElementById('success-message');
    el.textContent = message;
    el.style.display = 'block';
    setTimeout(() => el.style.display = 'none', 3000);
}

function showError(message) {
    const el = document.getElementById('error-message');
    el.textContent = message;
    el.style.display = 'block';
}

function closeModal() {
    document.getElementById('preview-modal').style.display = 'none';
}

function closeAuthorModal() {
    document.getElementById('author-modal').style.display = 'none';
}

function checkGitHubToken() {
    const token = sessionStorage.getItem('github_token');
    const warning = document.getElementById('github-warning');
    if (!token) {
        warning.style.display = 'block';
    }
}

// ============================================================================
// Gerenciamento de Views
// ============================================================================

function switchView(view) {
    document.querySelectorAll('[data-view]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });

    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.remove('active');
    });
    
    const viewElement = document.getElementById(`${view}-view`);
    if (viewElement) {
        viewElement.classList.add('active');
    }
    
    appState.currentView = view;
}

function switchConfigTab(tab) {
    document.querySelectorAll('.tabs-container .tab-button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    document.querySelectorAll('[id$="-tab"]').forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(`${tab}-tab`).classList.add('active');
}

// ============================================================================
// Gerenciamento de Posts
// ============================================================================

async function loadPosts() {
    try {
        const response = await fetch('../posts.json').catch(() => null);
        
        if (response) {
            const data = await response.json();
            appState.posts = data.posts || [];
        } else {
            appState.posts = [];
        }
        
        renderPostsList();
    } catch (error) {
        console.error('Erro ao carregar posts:', error);
        showError('Erro ao carregar posts: ' + error.message);
    }
}

function renderPostsList() {
    const tbody = document.getElementById('posts-list');
    
    if (appState.posts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 2rem;">Nenhum post encontrado</td></tr>';
        return;
    }

    tbody.innerHTML = appState.posts.map(post => `
        <tr>
            <td>${post.title}</td>
            <td>${post.category}</td>
            <td>${new Date(post.date).toLocaleDateString('pt-BR')}</td>
            <td>
                <span style="background: ${post.status === 'published' ? '#4caf50' : '#ff9800'}; color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem;">
                    ${post.status === 'published' ? 'Publicado' : 'Rascunho'}
                </span>
            </td>
            <td>
                <button class="button" onclick="editPost('${post.slug}')">Editar</button>
                <button class="button" onclick="deletePost('${post.slug}')">Excluir</button>
            </td>
        </tr>
    `).join('');
}

function createNewPost() {
    appState.currentPost = null;
    appState.tags = [];
    
    document.getElementById('post-form').reset();
    appState.editor.value('');
    document.getElementById('post-title').value = '';
    document.getElementById('post-slug').value = '';
    document.getElementById('post-date').value = new Date().toISOString().slice(0, 16);
    document.getElementById('post-modified').value = '';
    document.getElementById('post-tags').value = '';
    document.getElementById('tags-input').innerHTML = '';
    
    document.getElementById('image-preview').innerHTML = '';
    
    updateContentStats();
    switchView('editor');
}

async function editPost(slug) {
    try {
        const token = sessionStorage.getItem('github_token');
        const owner = localStorage.getItem('github_owner');
        const repo = localStorage.getItem('github_repo');
        
        if (!token || !owner || !repo) {
            showError('Configure o GitHub nas Configurações para editar posts');
            return;
        }

        const response = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/contents/content/posts/${slug}.md`,
            { headers: { 'Authorization': `token ${token}` } }
        );

        if (!response.ok) {
            showError('Erro ao carregar post');
            return;
        }

        const data = await response.json();
        const content = atob(data.content);
        
        const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/);
        if (!match) {
            showError('Formato de post inválido');
            return;
        }

        const [, frontMatter, body] = match;
        const postData = parseFrontMatter(frontMatter);
        
        document.getElementById('post-title').value = postData.title;
        document.getElementById('post-slug').value = postData.slug;
        document.getElementById('post-excerpt').value = postData.excerpt;
        document.getElementById('post-category').value = postData.category;
        document.getElementById('post-status').value = postData.status;
        document.getElementById('post-date').value = new Date(postData.date).toISOString().slice(0, 16);
        document.getElementById('post-modified').value = postData.modified ? new Date(postData.modified).toISOString().slice(0, 16) : '';
        document.getElementById('post-author').value = postData.author?.id || '';
        document.getElementById('cover-image-alt').value = postData.coverAlt || '';
        document.getElementById('og-image').value = postData.ogImage || '';
        document.getElementById('post-canonical').value = postData.canonical || '';
        
        appState.editor.value(body.trim());
        
        document.getElementById('tags-input').innerHTML = '';
        appState.tags = [];
        (postData.tags || []).forEach(tag => addTag(tag, false));
        
        appState.currentPost = { slug, sha: data.sha, ...postData };
        updateContentStats();
        switchView('editor');
        
    } catch (error) {
        console.error('Erro ao editar post:', error);
        showError('Erro ao editar post: ' + error.message);
    }
}

async function deletePost(slug) {
    if (!confirm(`Tem certeza que deseja deletar o post "${slug}"?`)) {
        return;
    }

    try {
        const token = sessionStorage.getItem('github_token');
        const owner = localStorage.getItem('github_owner');
        const repo = localStorage.getItem('github_repo');
        const branch = localStorage.getItem('github_branch') || 'main';

        if (!token) {
            showError('Token do GitHub não configurado');
            return;
        }

        const getResponse = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/contents/content/posts/${slug}.md?ref=${branch}`,
            { headers: { 'Authorization': `token ${token}` } }
        );

        if (!getResponse.ok) {
            showError('Post não encontrado');
            return;
        }

        const fileData = await getResponse.json();

        const deleteResponse = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/contents/content/posts/${slug}.md`,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': `token ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: `Deletar post: ${slug}`,
                    sha: fileData.sha,
                    branch
                })
            }
        );

        if (deleteResponse.ok) {
            showSuccess('Post deletado com sucesso!');
            loadPosts();
        } else {
            showError('Erro ao deletar post');
        }
    } catch (error) {
        console.error('Erro ao deletar:', error);
        showError('Erro ao deletar: ' + error.message);
    }
}

async function handleSavePost(e) {
    e.preventDefault();

    const title = document.getElementById('post-title').value.trim();
    const excerpt = document.getElementById('post-excerpt').value.trim();
    const category = document.getElementById('post-category').value;
    const content = appState.editor.value().trim();
    const coverAlt = document.getElementById('cover-image-alt').value.trim();
    const tagsValue = document.getElementById('post-tags').value.trim();

    if (!title || !excerpt || !category || !content || !coverAlt || !tagsValue) {
        showError('Todos os campos obrigatórios devem ser preenchidos');
        return;
    }

    try {
        const postData = getPostData();
        
        if (!appState.currentPost) {
            const slugExists = appState.posts.some(p => p.slug === postData.slug);
            if (slugExists) {
                showError('Este slug já existe. Altere o título.');
                return;
            }
        }

        const token = sessionStorage.getItem('github_token');
        if (!token) {
            showError('Configure token do GitHub nas Configurações');
            return;
        }

        // Fazer upload de imagem de capa se for base64
        let coverImageUrl = postData.coverImage;
        if (postData.coverImage && postData.coverImage.startsWith('data:')) {
            showStatus('⏳ Fazendo upload de imagem de capa...');
            try {
                coverImageUrl = await uploadCoverImageToGithub(postData.coverImage, postData.slug, token);
                postData.coverImage = coverImageUrl;
                postData.ogImage = coverImageUrl;
            } catch (uploadError) {
                showError(`Erro no upload da imagem: ${uploadError.message}`);
                return;
            }
        }

        showStatus('💾 Salvando post...');
        
        const frontMatter = generateFrontMatter(postData);
        const markdownContent = `${frontMatter}\n\n${content}`;
        const encodedContent = btoa(markdownContent);

        const owner = localStorage.getItem('github_owner');
        const repo = localStorage.getItem('github_repo');
        const branch = localStorage.getItem('github_branch') || 'main';
        const fileName = `${postData.slug}.md`;

        let sha = null;
        if (appState.currentPost?.sha) {
            sha = appState.currentPost.sha;
        }

        const url = `https://api.github.com/repos/${owner}/${repo}/contents/content/posts/${fileName}`;

        const requestBody = {
            message: appState.currentPost
                ? `Atualizar post: ${postData.title}`
                : `Novo post: ${postData.title}`,
            content: encodedContent,
            branch
        };

        if (sha) {
            requestBody.sha = sha;
        }

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (response.ok) {
            showSuccess(appState.currentPost ? 'Post atualizado!' : 'Post criado com sucesso!');
            
            setTimeout(() => {
                loadPosts();
                switchView('posts');
            }, 1500);
        } else {
            const error = await response.json();
            showError(`Erro ao salvar: ${error.message}`);
        }

    } catch (error) {
        console.error('Erro ao salvar post:', error);
        showError('Erro ao salvar: ' + error.message);
    }
}

function getPostData() {
    const { wordCount, readingTime } = calculateReadingTime(appState.editor.value());
    const slug = document.getElementById('post-slug').value;
    
    return {
        title: document.getElementById('post-title').value,
        slug: slug,
        excerpt: document.getElementById('post-excerpt').value,
        category: document.getElementById('post-category').value,
        status: document.getElementById('post-status').value,
        date: new Date(document.getElementById('post-date').value).toISOString().split('T')[0],
        modified: document.getElementById('post-modified').value 
            ? new Date(document.getElementById('post-modified').value).toISOString().split('T')[0]
            : new Date().toISOString().split('T')[0],
        tags: document.getElementById('post-tags').value.split(',').map(t => t.trim()).filter(t => t),
        coverImage: document.getElementById('cover-image')?.dataset.url || '/assets/images/placeholder.png',
        coverAlt: document.getElementById('cover-image-alt').value,
        ogImage: document.getElementById('og-image').value || document.getElementById('cover-image')?.dataset.url,
        author: document.getElementById('post-author').value 
            ? { id: document.getElementById('post-author').value }
            : { id: 'ctb' },
        canonical: document.getElementById('post-canonical').value,
        readingTime: readingTime,
        wordCount: wordCount
    };
}

// ============================================================================
// YAML e Upload de Imagens
// ============================================================================

/**
 * Escapa valores YAML para evitar quebras de parsing
 * Protege contra aspas, dois-pontos e quebras de linha
 */
function escapeYamlValue(value) {
    if (!value) return '""';
    
    // Verificar se precisa de quotes
    const needsQuotes = /[":'\n\r]|:\s/.test(value);
    
    if (needsQuotes) {
        // Escapar aspas internas e quebras de linha
        const escaped = value
            .replace(/\\/g, '\\\\')    // Escapar backslashes
            .replace(/"/g, '\\"')       // Escapar aspas
            .replace(/\n/g, '\\n')      // Escapar quebras
            .replace(/\r/g, '\\r');     // Escapar retorno de carro
        
        return `"${escaped}"`;
    }
    
    return value;
}

/**
 * Faz upload de imagem em base64 para GitHub
 * Retorna a URL relativa do arquivo salvo
 */
async function uploadCoverImageToGithub(base64Data, postSlug, token) {
    try {
        // Extrair MIME type e dados
        const [header, data] = base64Data.split(',');
        const mimeType = header.match(/data:([^;]+)/)?.[1] || 'image/jpeg';
        const ext = mimeType.split('/')[1] || 'jpg';
        const fileName = `${postSlug}-cover.${ext}`;

        const owner = localStorage.getItem('github_owner');
        const repo = localStorage.getItem('github_repo');
        const branch = localStorage.getItem('github_branch') || 'main';
        
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/assets/images/${fileName}`;

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `Fazer upload de imagem de capa para post ${postSlug}`,
                content: data,
                branch
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao fazer upload da imagem');
        }

        // Retornar URL relativa
        return `/assets/images/${fileName}`;
    } catch (error) {
        console.error('Erro ao fazer upload:', error);
        throw new Error(`Upload de imagem falhou: ${error.message}`);
    }
}

function generateFrontMatter(postData) {
    const authorId = postData.author?.id || 'ctb';
    const author = appState.authors.find(a => a.id === authorId) || appState.authors[0];
    
    return `---
title: ${escapeYamlValue(postData.title)}
slug: ${postData.slug}
excerpt: ${escapeYamlValue(postData.excerpt)}
date: '${postData.date}'
modified: '${postData.modified}'
status: ${postData.status}
category: ${escapeYamlValue(postData.category)}
tags:
${postData.tags.map(tag => `  - ${escapeYamlValue(tag)}`).join('\n')}
author:
  id: ${author?.id || 'ctb'}
  name: ${escapeYamlValue(author?.name || 'Conexão Terra Bambu')}
  picture: ${author?.picture || '/assets/images/logo_only.png'}
coverImage: ${postData.coverImage}
coverAlt: ${escapeYamlValue(postData.coverAlt)}
ogImage: ${postData.ogImage}
canonical: ${postData.canonical}
readingTime: ${postData.readingTime}
wordCount: ${postData.wordCount}
---`;
}

function parseFrontMatter(frontMatter) {
    const data = {};
    const lines = frontMatter.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes(':') && !line.trim().startsWith('-')) {
            const [key, ...valueParts] = line.split(':');
            const value = valueParts.join(':').trim();
            
            if (['tags', 'author'].includes(key.trim())) {
                continue;
            }
            
            if (value.startsWith('[') && value.endsWith(']')) {
                data[key.trim()] = JSON.parse(value);
            } else if (value === 'true' || value === 'false') {
                data[key.trim()] = value === 'true';
            } else if (!isNaN(value) && value) {
                data[key.trim()] = Number(value);
            } else {
                data[key.trim()] = value.replace(/^['"]|['"]$/g, '');
            }
        }
    }

    data.tags = [];
    let inTags = false;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === 'tags:') {
            inTags = true;
            i++;
            while (i < lines.length && lines[i].startsWith('  - ')) {
                data.tags.push(lines[i].substring(4).trim());
                i++;
            }
            break;
        }
    }

    data.author = { id: 'ctb' };
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === 'author:') {
            i++;
            while (i < lines.length && lines[i].startsWith('  ')) {
                if (lines[i].includes('id:')) {
                    data.author.id = lines[i].split(':')[1].trim();
                } else if (lines[i].includes('name:')) {
                    data.author.name = lines[i].split(':')[1].trim();
                } else if (lines[i].includes('picture:')) {
                    data.author.picture = lines[i].split(':')[1].trim();
                }
                i++;
                if (i < lines.length && !lines[i].startsWith('  ')) break;
            }
            break;
        }
    }

    return data;
}

function filterPosts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryFilter = document.getElementById('filter-category').value;

    const filtered = appState.posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || post.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    const tbody = document.getElementById('posts-list');
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 2rem;">Nenhum post encontrado</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map(post => `
        <tr>
            <td>${post.title}</td>
            <td>${post.category}</td>
            <td>${new Date(post.date).toLocaleDateString('pt-BR')}</td>
            <td>
                <span style="background: ${post.status === 'published' ? '#4caf50' : '#ff9800'}; color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem;">
                    ${post.status === 'published' ? 'Publicado' : 'Rascunho'}
                </span>
            </td>
            <td>
                <button class="button" onclick="editPost('${post.slug}')">Editar</button>
                <button class="button" onclick="deletePost('${post.slug}')">Excluir</button>
            </td>
        </tr>
    `).join('');
}

// ============================================================================
// Tags
// ============================================================================

function addTag(tagText, updateHidden = true) {
    const tag = tagText.trim().toLowerCase();
    if (!tag || appState.tags.includes(tag)) return;

    appState.tags.push(tag);
    
    const tagElement = document.createElement('div');
    tagElement.className = 'tag-item';
    tagElement.innerHTML = `
        ${tag}
        <button type="button" onclick="removeTag('${tag}')">×</button>
    `;
    
    document.getElementById('tags-input').appendChild(tagElement);
    
    if (updateHidden) {
        document.getElementById('post-tags').value = appState.tags.join(',');
    }
}

function removeTag(tag) {
    appState.tags = appState.tags.filter(t => t !== tag);
    document.getElementById('post-tags').value = appState.tags.join(',');
    document.querySelectorAll('.tag-item').forEach(el => {
        if (el.textContent.includes(tag)) {
            el.remove();
        }
    });
}

// ============================================================================
// Imagens
// ============================================================================

async function handleCoverImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        const img = document.createElement('img');
        img.src = event.target.result;
        img.style.maxWidth = '200px';
        img.style.maxHeight = '200px';
        img.style.borderRadius = '4px';
        img.style.marginTop = '1rem';
        
        const preview = document.getElementById('image-preview');
        preview.innerHTML = '';
        preview.appendChild(img);
        
        e.target.dataset.url = event.target.result;
    };
    reader.readAsDataURL(file);
}

async function uploadMediaFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const token = sessionStorage.getItem('github_token');
            if (!token) {
                showError('Configure token do GitHub');
                return;
            }

            const owner = localStorage.getItem('github_owner');
            const repo = localStorage.getItem('github_repo');
            const branch = localStorage.getItem('github_branch') || 'main';

            const encoded = await fileToBase64(file);
            const fileName = `${Date.now()}-${file.name}`;

            const response = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/contents/assets/images/${fileName}`,
                {
                    method: 'PUT',
                    headers: {
                        'Authorization': `token ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        message: `Upload de imagem: ${fileName}`,
                        content: encoded.split(',')[1],
                        branch
                    })
                }
            );

            if (response.ok) {
                showSuccess('Imagem enviada com sucesso!');
                loadMediaFiles();
            }
        } catch (error) {
            showError('Erro ao fazer upload: ' + error.message);
        }
    };
    input.click();
}

async function loadMediaFiles() {
    const mediaList = document.getElementById('media-list');
    mediaList.innerHTML = '<p style="text-align: center; padding: 2rem;">Carregamento de mídia em desenvolvimento</p>';
}

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// ============================================================================
// Preview
// ============================================================================

async function previewPost() {
    const postData = getPostData();
    const content = marked.parse(appState.editor.value());
    
    const htmlContent = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${postData.title}</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 2rem; background: #f5f5f5; }
        article { background: white; padding: 2rem; border-radius: 8px; }
        h1 { color: #333; margin-bottom: 0.5rem; }
        .meta { color: #666; font-size: 0.9rem; margin-bottom: 2rem; display: flex; gap: 1rem; }
        .content { color: #333; }
        code { background: #f5f5f5; padding: 0.25rem 0.5rem; border-radius: 3px; }
        pre { background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; }
    </style>
</head>
<body>
    <article>
        <h1>${postData.title}</h1>
        <div class="meta">
            <span>${postData.category}</span>
            <span>${new Date(postData.date).toLocaleDateString('pt-BR')}</span>
            <span>${postData.readingTime} min de leitura</span>
        </div>
        <p><strong>${postData.excerpt}</strong></p>
        <div class="content">${content}</div>
    </article>
</body>
</html>
    `;

    const modal = document.getElementById('preview-modal');
    const iframe = document.getElementById('preview-frame');
    iframe.srcdoc = htmlContent;
    modal.style.display = 'flex';
}

// ============================================================================
// Autores
// ============================================================================

async function loadAuthors() {
    try {
        const response = await fetch('../authors.json');
        if (response.ok) {
            const data = await response.json();
            appState.authors = data.authors || [];
            renderAuthorSelect();
            renderAuthorsList();
        }
    } catch (error) {
        console.error('Erro ao carregar autores:', error);
    }
}

function renderAuthorSelect() {
    const select = document.getElementById('post-author');
    select.innerHTML = appState.authors.map(author => `
        <option value="${author.id}">${author.name}</option>
    `).join('');
}

function renderAuthorsList() {
    const list = document.getElementById('authors-list');
    list.innerHTML = appState.authors.map(author => `
        <div style="border: 1px solid #ddd; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h4 style="margin: 0 0 0.5rem;">${author.name}</h4>
                    <p style="margin: 0; color: #666; font-size: 0.9rem;">${author.bio || 'Sem biografia'}</p>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="button" onclick="editAuthor('${author.id}')">Editar</button>
                    <button class="button" onclick="deleteAuthor('${author.id}')">Deletar</button>
                </div>
            </div>
        </div>
    `).join('');
}

function openAuthorModal(authorId = null) {
    const modal = document.getElementById('author-modal');
    const title = document.getElementById('author-modal-title');

    if (authorId) {
        const author = appState.authors.find(a => a.id === authorId);
        title.textContent = 'Editar Autor';
        document.getElementById('author-name').value = author.name;
        document.getElementById('author-picture').value = author.picture;
        document.getElementById('author-bio').value = author.bio || '';
        document.getElementById('author-email').value = author.email || '';
        document.getElementById('author-form').dataset.authorId = authorId;
    } else {
        title.textContent = 'Adicionar Autor';
        document.getElementById('author-form').reset();
        delete document.getElementById('author-form').dataset.authorId;
    }

    modal.style.display = 'flex';
}

function editAuthor(authorId) {
    openAuthorModal(authorId);
}

async function deleteAuthor(authorId) {
    if (!confirm('Tem certeza?')) return;
    
    appState.authors = appState.authors.filter(a => a.id !== authorId);
    saveAuthorsToStorage();
    renderAuthorSelect();
    renderAuthorsList();
    showSuccess('Autor deletado!');
}

async function saveAuthor(e) {
    e.preventDefault();

    const authorId = document.getElementById('author-form').dataset.authorId;
    const newAuthor = {
        id: authorId || `author-${Date.now()}`,
        name: document.getElementById('author-name').value,
        picture: document.getElementById('author-picture').value || '/assets/images/logo_only.png',
        bio: document.getElementById('author-bio').value,
        email: document.getElementById('author-email').value
    };

    if (authorId) {
        const index = appState.authors.findIndex(a => a.id === authorId);
        appState.authors[index] = newAuthor;
    } else {
        appState.authors.push(newAuthor);
    }

    saveAuthorsToStorage();
    renderAuthorSelect();
    renderAuthorsList();
    closeAuthorModal();
    showSuccess('Autor salvo com sucesso!');
}

function saveAuthorsToStorage() {
    localStorage.setItem('authors', JSON.stringify(appState.authors));
}

// ============================================================================
// Configurações
// ============================================================================

async function saveSiteConfig() {
    localStorage.setItem('site_title', document.getElementById('site-title').value);
    localStorage.setItem('site_description', document.getElementById('site-description').value);
    showSuccess('Configurações do site salvas!');
}

async function saveSeoConfig() {
    localStorage.setItem('meta_keywords', document.getElementById('meta-keywords').value);
    localStorage.setItem('social_instagram', document.getElementById('social-instagram').value);
    localStorage.setItem('social_facebook', document.getElementById('social-facebook').value);
    showSuccess('Configurações de SEO salvas!');
}

async function saveGitHubConfig(e) {
    e.preventDefault();

    const token = document.getElementById('github-token').value;
    const owner = document.getElementById('github-owner').value;
    const repo = document.getElementById('github-repo').value;
    const branch = document.getElementById('github-branch').value;

    if (!token || !owner || !repo) {
        showError('Preencha todos os campos obrigatórios');
        return;
    }

    sessionStorage.setItem('github_token', token);
    localStorage.setItem('github_owner', owner);
    localStorage.setItem('github_repo', repo);
    localStorage.setItem('github_branch', branch);

    appState.config.githubToken = token;
    appState.config.githubOwner = owner;
    appState.config.githubRepo = repo;
    appState.config.githubBranch = branch;

    showSuccess('Configurações do GitHub salvas!');
    checkGitHubToken();
}

// ============================================================================
// Logout
// ============================================================================

function logout() {
    if (confirm('Tem certeza que deseja sair?')) {
        sessionStorage.removeItem('admin_token');
        window.location.href = 'login.html';
    }
}

// Tornar funções globais para inline handlers
window.editPost = editPost;
window.deletePost = deletePost;
window.removeTag = removeTag;
window.editAuthor = editAuthor;
window.deleteAuthor = deleteAuthor;
window.closeModal = closeModal;
