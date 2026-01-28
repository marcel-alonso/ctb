// ============================================================================
// Blog Frontend v2.1
// Sistema completo de carregamento, filtros, paginação e posts relacionados
// ============================================================================

// Variáveis de estado global
let allPosts = [];           // Todos os posts carregados do JSON
let filteredPosts = [];      // Posts após filtro (categoria/tag)
let currentPage = 1;         // Página atual de paginação
const postsPerPage = 9;      // Posts por página (na página de blog)
const homePostsCount = 3;    // Posts na homepage
let currentCategory = 'all'; // Categoria ativa
let currentTag = null;       // Tag ativa (se houver)

// Detecta se está na homepage ou página de blog
const isHomepage = window.location.pathname === '/' || window.location.pathname === '/index.html';
const isBlogPage = window.location.pathname.includes('/blog');

// ============================================================================
// Funções de Carregamento
// ============================================================================

/**
 * Carrega posts do arquivo posts.json
 */
async function loadPostsFromJson() {
    try {
        const response = await fetch('/posts.json');
        if (!response.ok) {
            throw new Error('posts.json não encontrado');
        }
        allPosts = await response.json();
        
        // Ordenar por data (mais recentes primeiro)
        allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Se está na página de blog, inicializa filtros
        if (isBlogPage) {
            initializeFilters();
        }
        
        loadBlogPosts();
    } catch (error) {
        console.error('Erro ao carregar posts:', error);
        const blogGrid = document.querySelector('.blog-grid');
        if (blogGrid) {
            blogGrid.innerHTML = '<p>Nenhum post disponível no momento.</p>';
        }
    }
}

/**
 * Inicializa filtros dinamicamente a partir dos posts (apenas na página de blog)
 */
function initializeFilters() {
    const filterContainer = document.querySelector('.blog-filters');
    if (!filterContainer || !isBlogPage) return;

    // Obter categorias únicas
    const categories = [...new Set(allPosts.map(p => p.category))];
    
    // Limpar filtros existentes
    filterContainer.innerHTML = '';
    
    // Adicionar botão "Todos"
    const allBtn = document.createElement('button');
    allBtn.className = 'blog-filter active';
    allBtn.dataset.category = 'all';
    allBtn.textContent = 'Todos';
    allBtn.addEventListener('click', (e) => filterByCategory('all', e.target));
    filterContainer.appendChild(allBtn);
    
    // Adicionar botões de categorias
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'blog-filter';
        btn.dataset.category = category.toLowerCase().replace(/\s+/g, '-');
        btn.textContent = category;
        btn.addEventListener('click', (e) => filterByCategory(category, e.target));
        filterContainer.appendChild(btn);
    });
}

/**
 * Filtra posts por categoria
 */
function filterByCategory(category, button) {
    if (!isBlogPage) return; // Só permite filtro na página de blog
    
    currentCategory = category;
    currentPage = 1;
    currentTag = null;
    
    // Atualizar estilos dos botões
    document.querySelectorAll('.blog-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    if (button) {
        button.classList.add('active');
    }
    
    // Filtrar posts
    if (category === 'all') {
        filteredPosts = [...allPosts];
    } else {
        filteredPosts = allPosts.filter(p => p.category === category);
    }
    
    loadBlogPosts();
    updatePaginationButtons();
}

/**
 * Filtra posts por tag (apenas na página de blog)
 */
function filterByTag(tag) {
    if (!isBlogPage) return; // Só permite filtro na página de blog
    
    currentTag = tag;
    currentCategory = 'all';
    currentPage = 1;
    
    filteredPosts = allPosts.filter(p => p.tags && p.tags.includes(tag));
    
    // Atualizar estilos dos botões
    document.querySelectorAll('.blog-filter').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        }
    });
    
    loadBlogPosts();
    updatePaginationButtons();
}

// ============================================================================
// Funções Auxiliares
// ============================================================================

/**
 * Escapa caracteres HTML para prevenir XSS
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}

/**
 * Formata data para português brasileiro
 */
function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
}

/**
 * Cria HTML do card de um post
 */
function createPostCard(post) {
    const readingTime = post.readingTime || `${Math.ceil((post.wordCount || 300) / 200)} min`;
    
    return `
        <article class="post-card">
            <a href="/blog/${post.slug}" class="post-card__link">
                <div class="post-card__image">
                    <img 
                        src="${escapeHtml(post.coverImage)}" 
                        alt="${escapeHtml(post.title)}"
                        class="post-card__img"
                        loading="lazy"
                    >
                    ${post.readingTime ? `<span class="post-card__reading-time">${readingTime}</span>` : ''}
                </div>
                <div class="post-card__content">
                    <div class="post-card__meta">
                        <span class="post-card__category">${escapeHtml(post.category)}</span>
                        <time class="post-card__date">${formatDate(post.date)}</time>
                    </div>
                    <h3 class="post-card__title">${escapeHtml(post.title)}</h3>
                    <p class="post-card__excerpt">${escapeHtml(post.excerpt)}</p>
                    ${post.tags && post.tags.length > 0 ? `
                        <div class="post-card__tags">
                            ${post.tags.slice(0, 3).map(tag => 
                                `<a href="#" class="post-card__tag" onclick="filterByTag('${escapeHtml(tag)}'); return false;">#${escapeHtml(tag)}</a>`
                            ).join(' ')}
                        </div>
                    ` : ''}
                    <span class="post-card__read-more">
                        Ler mais
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </span>
                </div>
            </a>
        </article>
    `;
}

// ============================================================================
// Renderização
// ============================================================================

/**
 * Carrega e exibe posts com paginação (blog page) ou limitado (homepage)
 */
function loadBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    // Se nenhum filtro foi aplicado ainda, usa allPosts
    if (filteredPosts.length === 0 && currentCategory === 'all' && !currentTag) {
        filteredPosts = [...allPosts];
    }

    let paginatedPosts = [];

    // Se está na homepage, mostra apenas 3 posts (sem paginação)
    if (isHomepage) {
        paginatedPosts = filteredPosts.slice(0, homePostsCount);
    } else {
        // Se está na página de blog, usa paginação normal
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        paginatedPosts = filteredPosts.slice(startIndex, endIndex);
    }

    // Renderizar posts
    if (paginatedPosts.length === 0) {
        blogGrid.innerHTML = '<p>Nenhum post encontrado nesta categoria.</p>';
    } else {
        const postsHTML = paginatedPosts.map(post => createPostCard(post)).join('');
        blogGrid.innerHTML = postsHTML;
    }

    // Atualizar informações de paginação (apenas na página de blog)
    if (isBlogPage) {
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        updatePaginationInfo(currentPage, totalPages);
    }
}

/**
 * Atualiza estado dos botões de paginação (apenas na página de blog)
 */
function updatePaginationButtons() {
    if (!isBlogPage) return; // Só atualiza na página de blog
    
    const prevButton = document.querySelector('.pagination-prev');
    const nextButton = document.querySelector('.pagination-next');
    if (!prevButton || !nextButton) return;

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages || filteredPosts.length === 0;
}

/**
 * Atualiza informações de paginação na página
 */
function updatePaginationInfo(currentPageNum, totalPages) {
    const currentPageSpan = document.querySelector('.current-page');
    const totalPagesSpan = document.querySelector('.total-pages');
    if (!currentPageSpan || !totalPagesSpan) return;

    currentPageSpan.textContent = currentPageNum;
    totalPagesSpan.textContent = totalPages;
}

/**
 * Navega entre páginas (apenas na página de blog)
 */
function navigateToPage(direction) {
    if (!isBlogPage) return; // Só permite navegação na página de blog
    
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    
    if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    } else if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
    }
    
    loadBlogPosts();
    updatePaginationButtons();
    
    // Scroll para o topo dos posts
    const blogSection = document.querySelector('.blog-section');
    if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================================================
// Posts Relacionados
// ============================================================================

/**
 * Carrega posts relacionados por categoria
 */
function loadRelatedPosts(currentPostSlug) {
    const relatedGrid = document.querySelector('.related-posts .blog-grid');
    if (!relatedGrid) return;

    // Encontrar post atual
    const currentPost = allPosts.find(p => p.slug === currentPostSlug);
    if (!currentPost) return;

    // Encontrar posts da mesma categoria
    const relatedPosts = allPosts
        .filter(p => p.slug !== currentPostSlug && p.category === currentPost.category)
        .slice(0, 3);

    if (relatedPosts.length === 0) {
        relatedGrid.innerHTML = '<p>Nenhum post relacionado encontrado.</p>';
    } else {
        const postsHTML = relatedPosts.map(post => createPostCard(post)).join('');
        relatedGrid.innerHTML = postsHTML;
    }
}

// ============================================================================
// Inicialização
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Carregar posts do JSON
    loadPostsFromJson();

    // Configurar event listeners de paginação
    const prevButton = document.querySelector('.pagination-prev');
    const nextButton = document.querySelector('.pagination-next');
    
    if (prevButton) {
        prevButton.addEventListener('click', () => navigateToPage('prev'));
    }
    if (nextButton) {
        nextButton.addEventListener('click', () => navigateToPage('next'));
    }

    // Carregar posts relacionados se estiver em página de post individual
    const postSlug = window.location.pathname.split('/').pop().replace(/\.html?$/, '');
    if (postSlug && postSlug !== 'index' && postSlug !== '') {
        loadRelatedPosts(postSlug);
    }
});

// Expor funções globalmente para use em onclick
window.filterByTag = filterByTag;
window.filterByCategory = filterByCategory;
window.navigateToPage = navigateToPage;
