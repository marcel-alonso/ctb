module.exports = function postTemplate(post) {
    // Escapar caracteres especiais para JSON-LD
    const escapeJson = (str) => str?.replace(/"/g, '\\"').replace(/\n/g, '\\n') || '';
    
    // Gerar data formatada em locale português
    const publishedDate = new Date(post.date);
    const formattedDate = publishedDate.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    // Gerar data modificada se houver
    const modifiedDate = post.modified || post.date;
    
    // URL segura para og:image
    const ogImageUrl = post.ogImage || post.coverImage;
    const imageUrl = ogImageUrl.startsWith('http') ? ogImageUrl : `https://conexaoterrabambu.com.br${ogImageUrl}`;
    const coverImageUrl = post.coverImage.startsWith('http') ? post.coverImage : `https://conexaoterrabambu.com.br${post.coverImage}`;
    
    // Gerar JSON-LD estruturado para BlogPosting
    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": escapeJson(post.title),
        "description": escapeJson(post.excerpt),
        "image": {
            "@type": "ImageObject",
            "url": coverImageUrl,
            "caption": escapeJson(post.coverAlt || post.title)
        },
        "author": {
            "@type": "Person",
            "name": post.author?.name || "Conexão Terra Bambu",
            "url": "https://conexaoterrabambu.com.br",
            "image": post.author?.picture ? (post.author.picture.startsWith('http') ? post.author.picture : `https://conexaoterrabambu.com.br${post.author.picture}`) : "https://conexaoterrabambu.com.br/assets/images/logo_only.png"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Conexão Terra Bambu",
            "url": "https://conexaoterrabambu.com.br",
            "logo": {
                "@type": "ImageObject",
                "url": "https://conexaoterrabambu.com.br/assets/images/logo_only.png",
                "width": 250,
                "height": 250
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": post.canonical || `https://conexaoterrabambu.com.br/blog/${post.slug}`
        },
        "datePublished": post.date,
        "dateModified": modifiedDate,
        "keywords": post.tags?.join(', ') || ""
    };

    // Gerar schema de breadcrumbs
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://conexaoterrabambu.com.br"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://conexaoterrabambu.com.br/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": escapeJson(post.title),
                "item": post.canonical || `https://conexaoterrabambu.com.br/blog/${post.slug}`
            }
        ]
    };

    return \`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>\${post.title} - Conexão Terra Bambu</title>
    <meta name="description" content="\${post.excerpt}">
    <meta name="keywords" content="\${post.tags?.join(', ') || 'bioconstrução, sustentabilidade'}">
    
    <!-- Canonical URL para evitar conteúdo duplicado -->
    <link rel="canonical" href="\${post.canonical || \`https://conexaoterrabambu.com.br/blog/\${post.slug}\`}">
    
    <!-- CSS Crítico -->
    <link rel="preload" href="/css/styles.css" as="style">
    <link rel="preload" href="/css/blog.css" as="style">
    <link rel="preload" href="/css/accessibility.css" as="style">

    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/blog.css">
    <link rel="stylesheet" href="/css/accessibility.css">

    <!-- Open Graph Tags para Compartilhamento em Redes Sociais -->
    <meta property="og:title" content="\${post.title} - Conexão Terra Bambu">
    <meta property="og:description" content="\${post.excerpt}">
    <meta property="og:image" content="\${imageUrl}">
    <meta property="og:image:alt" content="\${post.coverAlt || post.title}">
    <meta property="og:url" content="\${post.canonical || \`https://conexaoterrabambu.com.br/blog/\${post.slug}\`}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Conexão Terra Bambu">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="\${post.title} - Conexão Terra Bambu">
    <meta name="twitter:description" content="\${post.excerpt}">
    <meta name="twitter:image" content="\${imageUrl}">
    
    <!-- Article Metadata -->
    <meta property="article:published_time" content="\${post.date}">
    <meta property="article:modified_time" content="\${modifiedDate}">
    <meta property="article:author" content="\${post.author?.name || 'Conexão Terra Bambu'}">
    <meta property="article:section" content="\${post.category}">
    \${post.tags?.map(tag => \`<meta property="article:tag" content="\${tag}">\`).join('\\n    ') || ''}
    
    <!-- Dados Estruturados - BlogPosting -->
    <script type="application/ld+json">
    \${JSON.stringify(blogPostingSchema)}
    </script>

    <!-- Dados Estruturados - Breadcrumbs -->
    <script type="application/ld+json">
    \${JSON.stringify(breadcrumbSchema)}
    </script>

    <!-- Dados Estruturados - Organization -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Conexão Terra Bambu",
        "url": "https://conexaoterrabambu.com.br",
        "logo": "https://conexaoterrabambu.com.br/assets/images/logo_only.png",
        "description": "Bioconstrução, sustentabilidade e harmonia com a natureza",
        "sameAs": [
            "https://www.instagram.com/conexaoterrabambu",
            "https://www.facebook.com/conexaoterrabambu"
        ]
    }
    </script>
</head>
<body class="page-blog">
    <!-- Header -->
    <header class="header scrolled">
        <div class="container">
            <a href="/" class="logo">
                <img src="/assets/images/logo_only.png" alt="Logotipo Conexão Terra Bambu" class="logo-emblem">
                <img src="/assets/images/text_horizontal.png" alt="Conexão Terra Bambu" class="logo-text">
            </a>
            
            <button class="mobile-menu-toggle" aria-label="Menu" aria-expanded="false" aria-controls="nav">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav" id="nav">
                <a href="/#sobre">Sobre</a>
                <a href="/#solucoes">Soluções</a>
                <a href="/#especialidades">Especialidades</a>
                <a href="/#contato">Contato</a>
                <a href="/blog">Blog</a>
            </nav>
        </div>
    </header>

    <!-- Breadcrumbs para navegação e SEO -->
    <nav class="breadcrumbs" aria-label="Navegação de caminho">
        <div class="container">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/blog/">Blog</a></li>
                <li aria-current="page">\${post.title}</li>
            </ol>
        </div>
    </nav>

    <main>
        <article class="blog-post">
            <header class="blog-post__header">
                <div class="container">
                    <div class="blog-post__meta">
                        <span class="blog-post__category">\${post.category}</span>
                        <time datetime="\${post.date}" class="blog-post__date">\${formattedDate}</time>
                        \${post.readingTime ? \`<span class="blog-post__reading-time">Tempo de leitura: \${post.readingTime} min</span>\` : ''}
                    </div>
                    <h1 class="blog-post__title">\${post.title}</h1>
                    <p class="blog-post__excerpt">\${post.excerpt}</p>
                    
                    <!-- Informações do Autor -->
                    \${post.author ? \`
                    <div class="blog-post__author">
                        \${post.author.picture ? \`<img src="\${post.author.picture.startsWith('http') ? post.author.picture : \`../\${post.author.picture}\`}" alt="\${post.author.name}" class="author-picture">\` : ''}
                        <div class="author-info">
                            <span class="author-name">\${post.author.name}</span>
                            <time datetime="\${post.date}" class="author-date">Publicado em \${formattedDate}</time>
                        </div>
                    </div>
                    \` : ''}
                </div>
            </header>

            <div class="blog-post__cover">
                <img src="\${post.coverImage}" alt="\${post.coverAlt || post.title}" width="1200" height="675" loading="lazy">
            </div>

            <div class="container">
                <div class="blog-post__content">
                    \${post.content}
                </div>

                <!-- Tags do Post -->
                \${post.tags && post.tags.length > 0 ? \`
                <div class="blog-post__tags">
                    <h3>Tags:</h3>
                    <ul>
                        \${post.tags.map(tag => \`<li><a href="../blog?tag=\${encodeURIComponent(tag)}">\${tag}</a></li>\`).join('')}
                    </ul>
                </div>
                \` : ''}
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
                <p>&copy; \${new Date().getFullYear()} Conexão Terra Bambu. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="/js/main.js" defer></script>
    <script src="/js/blog.js" defer></script>
</body>
</html>\`;
};
