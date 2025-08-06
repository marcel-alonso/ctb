// Array simulando os posts que virão do backend
const posts = [
    {
        id: 1,
        title: 'Como Começar sua Casa Sustentável',
        excerpt: 'Descubra os primeiros passos para construir uma casa em harmonia com a natureza, usando materiais naturais e técnicas ancestrais.',
        coverImage: 'assets/images/pau-a-pique.webp',
        category: 'Guia Básico',
        date: '2024-01-15',
        slug: 'como-comecar-casa-sustentavel'
    },
    {
        id: 2,
        title: 'Benefícios do Bambu na Construção',
        excerpt: 'Conheça as vantagens de usar bambu em sua construção: resistência, sustentabilidade e beleza natural se unem neste material versátil.',
        coverImage: 'assets/images/bambu.webp',
        category: 'Materiais',
        date: '2024-01-10',
        slug: 'beneficios-bambu-construcao'
    },
    {
        id: 3,
        title: 'Tintas Naturais: Cores que Respiram',
        excerpt: 'Aprenda sobre as tintas naturais, uma alternativa saudável e sustentável para colorir sua casa sem toxinas ou VOCs.',
        coverImage: 'assets/images/tinta.webp',
        category: 'DIY',
        date: '2024-01-05',
        slug: 'tintas-naturais-cores-que-respiram'
    }
];

// Função para formatar a data
function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
}

// Função para criar o HTML do card do post
function createPostCard(post) {
    return `
        <article class="post-card">
            <a href="/blog/${post.slug}" class="post-card__link">
                <div class="post-card__image">
                    <img 
                        src="${post.coverImage}" 
                        alt="${post.title}"
                        class="post-card__img"
                        width="600"
                        height="375"
                        loading="lazy"
                    >
                </div>
                <div class="post-card__content">
                    <div class="post-card__meta">
                        <span class="post-card__category">${post.category}</span>
                        <time class="post-card__date">${formatDate(post.date)}</time>
                    </div>
                    <h3 class="post-card__title">${post.title}</h3>
                    <p class="post-card__excerpt">${post.excerpt}</p>
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

// Função para carregar os posts na página
function loadBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    const postsHTML = posts.map(post => createPostCard(post)).join('');
    blogGrid.innerHTML = postsHTML;
}

// Variáveis de estado para paginação e filtros
let currentPage = 1;
const postsPerPage = 6;
let currentCategory = 'all';

// Função para filtrar os posts por categoria
function filterPosts(category) {
    currentCategory = category;
    currentPage = 1;
    loadBlogPosts();
    updatePaginationButtons();
}

// Função para carregar os posts com paginação
function loadBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    // Filtrar posts por categoria
    const filteredPosts = currentCategory === 'all' 
        ? posts 
        : posts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === currentCategory);

    // Calcular posts para a página atual
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    // Atualizar grid de posts
    const postsHTML = paginatedPosts.map(post => createPostCard(post)).join('');
    blogGrid.innerHTML = postsHTML;

    // Atualizar informações de paginação
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    updatePaginationInfo(currentPage, totalPages);
}

// Função para atualizar os botões de paginação
function updatePaginationButtons() {
    const prevButton = document.querySelector('.pagination-prev');
    const nextButton = document.querySelector('.pagination-next');
    if (!prevButton || !nextButton) return;

    const filteredPosts = currentCategory === 'all' 
        ? posts 
        : posts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === currentCategory);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

// Função para atualizar informações de paginação
function updatePaginationInfo(currentPage, totalPages) {
    const currentPageSpan = document.querySelector('.current-page');
    const totalPagesSpan = document.querySelector('.total-pages');
    if (!currentPageSpan || !totalPagesSpan) return;

    currentPageSpan.textContent = currentPage;
    totalPagesSpan.textContent = totalPages;
}

// Função para navegar entre as páginas
function navigateToPage(direction) {
    if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    } else if (direction === 'next') {
        const filteredPosts = currentCategory === 'all' 
            ? posts 
            : posts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === currentCategory);
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
        }
    }
    loadBlogPosts();
    updatePaginationButtons();
}

// Função para carregar posts relacionados
function loadRelatedPosts(currentPostSlug) {
    const relatedGrid = document.querySelector('.related-posts .blog-grid');
    if (!relatedGrid) return;

    // Excluir o post atual e pegar 3 posts aleatórios
    const otherPosts = posts.filter(post => post.slug !== currentPostSlug);
    const randomPosts = otherPosts.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    const postsHTML = randomPosts.map(post => createPostCard(post)).join('');
    relatedGrid.innerHTML = postsHTML;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar posts
    loadBlogPosts();
    updatePaginationButtons();

    // Event listeners para filtros
    const filters = document.querySelectorAll('.blog-filter');
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            filterPosts(filter.dataset.category);
        });
    });

    // Event listeners para paginação
    const prevButton = document.querySelector('.pagination-prev');
    const nextButton = document.querySelector('.pagination-next');
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => navigateToPage('prev'));
        nextButton.addEventListener('click', () => navigateToPage('next'));
    }

    // Carregar posts relacionados se estiver em uma página de post
    const postSlug = window.location.pathname.split('/').pop().replace('.html', '');
    if (postSlug && postSlug !== 'index') {
        loadRelatedPosts(postSlug);
    }
});
