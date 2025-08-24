module.exports = function postTemplate(post) {
    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title} - Conexão Terra Bambu</title>
    <meta name="description" content="${post.excerpt}">
    
    <!-- CSS Crítico -->
    <link rel="preload" href="../css/styles.css" as="style">
    <link rel="preload" href="../css/blog.css" as="style">
    <link rel="preload" href="../css/accessibility.css" as="style">

    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/blog.css">
    <link rel="stylesheet" href="../css/accessibility.css">

    <!-- Meta Tags para Compartilhamento -->
    <meta property="og:title" content="${post.title} - Conexão Terra Bambu">
    <meta property="og:description" content="${post.excerpt}">
    <meta property="og:image" content="https://conexaoterrabambu.com.br${post.ogImage.url}">
    <meta property="og:url" content="https://conexaoterrabambu.com.br/blog/${post.slug}">
    <meta property="og:type" content="article">
    
    <!-- Dados Estruturados -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "${post.title}",
        "image": "https://conexaoterrabambu.com.br${post.coverImage}",
        "author": {
            "@type": "Organization",
            "name": "${post.author.name}",
            "logo": {
                "@type": "ImageObject",
                "url": "https://conexaoterrabambu.com.br${post.author.picture}"
            }
        },
        "publisher": {
            "@type": "Organization",
            "name": "Conexão Terra Bambu",
            "logo": {
                "@type": "ImageObject",
                "url": "https://conexaoterrabambu.com.br/assets/images/logo_only.png"
            }
        },
        "datePublished": "${post.date}",
        "dateModified": "${post.date}",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://conexaoterrabambu.com.br/blog/${post.slug}"
        },
        "description": "${post.excerpt}"
    }
    </script>
</head>
<body>
    <!-- Header -->
    <header class="header scrolled">
        <div class="container">
            <a href="../" class="logo">
                <img src="../assets/images/logo_only.png" alt="Logotipo Conexão Terra Bambu" class="logo-emblem">
                <img src="../assets/images/text_horizontal.png" alt="Conexão Terra Bambu" class="logo-text">
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
                <a href="../blog">Blog</a>
            </nav>
        </div>
    </header>

    <main>
        <article class="blog-post">
            <header class="blog-post__header">
                <div class="container">
                    <div class="blog-post__meta">
                        <span class="blog-post__category">${post.category}</span>
                        <time datetime="${post.date}" class="blog-post__date">${new Date(post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                    </div>
                    <h1 class="blog-post__title">${post.title}</h1>
                    <p class="blog-post__excerpt">${post.excerpt}</p>
                </div>
            </header>

            <div class="blog-post__cover">
                <img src="${post.coverImage}" alt="${post.title}" width="1200" height="675">
            </div>

            <div class="container">
                <div class="blog-post__content">
                    ${post.content}
                </div>
            </div>
        </article>

        <!-- Seção de Posts Relacionados -->
        <section class="related-posts">
            <div class="container">
                <h2 class="section-title">Posts Relacionados</h2>
                <div class="blog-grid">
                    <!-- Posts relacionados serão carregados via JavaScript -->
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
