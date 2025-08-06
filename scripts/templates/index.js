module.exports = function indexTemplate({ posts, categories }) {
    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - Conexão Terra Bambu</title>
    <meta name="description" content="Explore nosso blog sobre bioconstrução e vida sustentável. Aprenda sobre construção com bambu, materiais naturais e técnicas ancestrais.">
    
    <!-- CSS Crítico -->
    <link rel="preload" href="../css/styles.css" as="style">
    <link rel="preload" href="../css/blog.css" as="style">
    <link rel="preload" href="../css/accessibility.css" as="style">

    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/blog.css">
    <link rel="stylesheet" href="../css/accessibility.css">

    <!-- Meta Tags para Compartilhamento -->
    <meta property="og:title" content="Blog - Conexão Terra Bambu">
    <meta property="og:description" content="Explore nosso blog sobre bioconstrução e vida sustentável. Aprenda sobre construção com bambu, materiais naturais e técnicas ancestrais.">
    <meta property="og:image" content="https://conexaoterrabambu.com.br/assets/images/img-compartilhamento.webp">
    <meta property="og:url" content="https://conexaoterrabambu.com.br/blog">
    <meta property="og:type" content="website">
    
    <!-- Dados Estruturados -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Blog Conexão Terra Bambu",
        "description": "Blog sobre bioconstrução e vida sustentável",
        "url": "https://conexaoterrabambu.com.br/blog",
        "publisher": {
            "@type": "Organization",
            "name": "Conexão Terra Bambu",
            "logo": {
                "@type": "ImageObject",
                "url": "https://conexaoterrabambu.com.br/assets/images/logo-minimal.webp"
            }
        }
    }
    </script>
</head>
<body>
    <!-- Header -->
    <header class="header scrolled">
        <div class="container">
            <a href="../" class="logo">
                <img src="../assets/images/logo-minimal.webp" alt="Logotipo Conexão Terra Bambu" class="logo-emblem" width="60" height="60">
                <img src="../assets/images/logo-texto.webp" alt="Conexão Terra Bambu" class="logo-text" width="auto" height="21">
            </a>
            
            <button class="mobile-menu-toggle" aria-label="Menu" aria-expanded="false" aria-controls="nav">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav" id="nav">
                <a href="../#sobre">Sobre</a>
                <a href="../#solucoes">Soluções</a>
                <a href="../#especialidades">Especialidades</a>
                <a href="../#contato">Contato</a>
                <a href="../blog" aria-current="page">Blog</a>
            </nav>
        </div>
    </header>

    <main>
        <!-- Hero do Blog -->
        <section class="blog-hero">
            <div class="container">
                <h1 class="blog-hero__title">Blog</h1>
                <p class="blog-hero__subtitle">Explorando os caminhos da bioconstrução e da vida sustentável</p>
            </div>
        </section>

        <!-- Lista de Posts -->
        <section class="blog-listing">
            <div class="container">
                <!-- Filtros de Categoria -->
                <div class="blog-filters">
                    <button class="blog-filter active" data-category="all">Todos</button>
                    ${categories.map(category => `
                        <button class="blog-filter" data-category="${category.toLowerCase().replace(/\s+/g, '-')}">${category}</button>
                    `).join('')}
                </div>

                <!-- Grid de Posts -->
                <div class="blog-grid">
                    ${posts.map(post => `
                        <article class="post-card" data-category="${post.category.toLowerCase().replace(/\s+/g, '-')}">
                            <a href="${post.slug}.html" class="post-card__link">
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
                                        <time class="post-card__date">${new Date(post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
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
                    `).join('')}
                </div>

                <!-- Paginação -->
                <div class="blog-pagination">
                    <button class="pagination-prev" aria-label="Página anterior" disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                    </button>
                    <span class="pagination-info">Página <span class="current-page">1</span> de <span class="total-pages">1</span></span>
                    <button class="pagination-next" aria-label="Próxima página" disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        <!-- Newsletter -->
        <section class="blog-newsletter">
            <div class="container">
                <div class="newsletter-box">
                    <h2>Fique por dentro das novidades</h2>
                    <p>Receba dicas, tutoriais e inspiração sobre bioconstrução diretamente no seu email.</p>
                    <form class="newsletter-form" action="#" method="POST">
                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="Seu melhor email" required>
                            <button type="submit" class="button button-primary">Inscrever-se</button>
                        </div>
                        <small>Ao se inscrever, você concorda em receber nossos emails. Você pode cancelar a qualquer momento.</small>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Conexão Terra Bambu. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    <!-- Botão WhatsApp Flutuante -->
    <a href="https://wa.me/5511992908488?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20bioconstrução" 
       class="whatsapp-float" 
       target="_blank" 
       rel="noopener noreferrer" 
       aria-label="Fale conosco pelo WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>

    <!-- JavaScript -->
    <script src="../js/main.js" defer></script>
    <script src="../js/blog.js" defer></script>
</body>
</html>`;
};
