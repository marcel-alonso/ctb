#!/usr/bin/env node

/**
 * build-blog.mjs
 * Build completo do blog: gera HTML, JSON, sitemap e RSS
 * 
 * Uso: node scripts/build-blog.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { marked } from 'marked';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsDir = path.join(__dirname, '../content/posts');
const blogDir = path.join(__dirname, '../blog');
const distDir = path.join(__dirname, '../dist');
const templatesDir = path.join(__dirname, './templates');

// Importar template
const postTemplate = require('./templates/post.js');

// Configurações
const siteConfig = {
    siteTitle: 'Conexão Terra Bambu',
    siteUrl: 'https://conexaoterrabambu.com.br',
    siteDescription: 'Bioconstrução, sustentabilidade e harmonia com a natureza'
};

// Funções auxiliares
function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    return { wordCount, readingTime };
}

function escapeXml(unsafe) {
    return unsafe.replace(/[<>&'"]/g, function (c) {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}

// Ler todos os posts
function readPosts() {
    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
    
    return files.map(file => {
        const filePath = path.join(postsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { data, content: markdown } = matter(content);
        
        // Calcular tempo de leitura
        const { wordCount, readingTime } = calculateReadingTime(markdown);
        
        return {
            ...data,
            content: marked.parse(markdown),
            markdown,
            wordCount: wordCount,
            readingTime: readingTime
        };
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Gerar HTML individual de cada post
function buildPostPages(posts) {
    console.log('📄 Gerando páginas HTML dos posts...');
    
    posts.forEach(post => {
        if (post.status !== 'published') return;
        
        const postDir = path.join(blogDir, post.slug);
        if (!fs.existsSync(postDir)) {
            fs.mkdirSync(postDir, { recursive: true });
        }

        const html = postTemplate(post);
        fs.writeFileSync(path.join(postDir, 'index.html'), html, 'utf-8');
        console.log(`  ✓ ${post.slug}`);
    });
}

// Gerar index de blog
function buildBlogIndex(posts) {
    console.log('📑 Gerando index do blog...');
    
    const publishedPosts = posts.filter(p => p.status === 'published');
    
    const postsHtml = publishedPosts.map(post => `
        <article class="blog-card">
            <a href="/blog/${post.slug}/">
                <img src="${post.coverImage}" alt="${post.coverAlt}" class="blog-card__image">
                <div class="blog-card__content">
                    <span class="blog-card__category">${post.category}</span>
                    <h2 class="blog-card__title">${post.title}</h2>
                    <p class="blog-card__excerpt">${post.excerpt}</p>
                    <div class="blog-card__meta">
                        <time>${new Date(post.date).toLocaleDateString('pt-BR')}</time>
                        <span>${post.readingTime} min de leitura</span>
                    </div>
                </div>
            </a>
        </article>
    `).join('');

    const indexHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - Conexão Terra Bambu</title>
    <meta name="description" content="Artigos sobre bioconstrução, sustentabilidade e materiais naturais">
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/blog.css">
</head>
<body>
    <header class="header scrolled">
        <div class="container">
            <a href="/" class="logo">
                <img src="../assets/images/logo_only.png" alt="Logo" class="logo-emblem">
                <img src="../assets/images/text_horizontal.png" alt="Conexão Terra Bambu" class="logo-text">
            </a>
            <nav class="nav">
                <a href="/#sobre">Sobre</a>
                <a href="/#solucoes">Soluções</a>
                <a href="/#especialidades">Especialidades</a>
                <a href="/#contato">Contato</a>
                <a href="/blog">Blog</a>
            </nav>
        </div>
    </header>

    <main>
        <section class="blog-section">
            <div class="container">
                <h1>Blog</h1>
                <p class="section-subtitle">Conheça mais sobre bioconstrução e sustentabilidade</p>

                <div class="blog-grid">
                    ${postsHtml}
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; ${new Date().getFullYear()} Conexão Terra Bambu. Todos os direitos reservados.</p>
        </div>
    </footer>

    <script src="../js/main.js" defer></script>
</body>
</html>`;

    const blogIndexPath = path.join(blogDir, 'index.html');
    fs.writeFileSync(blogIndexPath, indexHtml, 'utf-8');
    console.log(`  ✓ blog/index.html`);
}

// Gerar posts.json
function buildPostsJson(posts) {
    console.log('📊 Gerando posts.json...');
    
    const publishedPosts = posts
        .filter(p => p.status === 'published')
        .map(p => ({
            slug: p.slug,
            title: p.title,
            excerpt: p.excerpt,
            category: p.category,
            date: p.date,
            readingTime: p.readingTime,
            wordCount: p.wordCount,
            coverImage: p.coverImage,
            tags: p.tags,
            author: p.author
        }));

    const postsJson = {
        posts: publishedPosts,
        generated: new Date().toISOString()
    };

    const postsJsonPath = path.join(__dirname, '../posts.json');
    fs.writeFileSync(postsJsonPath, JSON.stringify(postsJson, null, 2), 'utf-8');
    console.log(`  ✓ posts.json (${publishedPosts.length} posts)`);
}

// Gerar Sitemap
function buildSitemap(posts) {
    console.log('🗺️  Gerando sitemap.xml...');
    
    const publishedPosts = posts.filter(p => p.status === 'published');
    
    const urls = [
        {
            loc: siteConfig.siteUrl,
            lastmod: new Date().toISOString().split('T')[0],
            changefreq: 'weekly',
            priority: '1.0'
        },
        {
            loc: `${siteConfig.siteUrl}/blog/`,
            lastmod: publishedPosts[0]?.date || new Date().toISOString().split('T')[0],
            changefreq: 'weekly',
            priority: '0.9'
        },
        ...publishedPosts.map(post => ({
            loc: `${siteConfig.siteUrl}/blog/${post.slug}/`,
            lastmod: post.modified || post.date,
            changefreq: 'monthly',
            priority: '0.8'
        }))
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    const sitemapPath = path.join(__dirname, '../sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
    console.log(`  ✓ sitemap.xml`);
}

// Gerar RSS
function buildRss(posts) {
    console.log('📡 Gerando rss.xml...');
    
    const publishedPosts = posts.filter(p => p.status === 'published');
    
    const items = publishedPosts.map(post => `  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${siteConfig.siteUrl}/blog/${post.slug}/</link>
    <guid>${siteConfig.siteUrl}/blog/${post.slug}/</guid>
    <description><![CDATA[${escapeXml(post.excerpt)}]]></description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <category>${post.category}</category>
  </item>`).join('\n');

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${siteConfig.siteTitle}</title>
    <link>${siteConfig.siteUrl}</link>
    <description>${siteConfig.siteDescription}</description>
    <language>pt-br</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

    const rssPath = path.join(__dirname, '../rss.xml');
    fs.writeFileSync(rssPath, rss, 'utf-8');
    console.log(`  ✓ rss.xml`);
}

// Main
async function main() {
    try {
        console.log('\n🚀 Iniciando build do blog...\n');

        // Garantir que diretórios existem
        [blogDir, distDir].forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });

        // Ler posts
        console.log('📚 Lendo posts...');
        const posts = readPosts();
        console.log(`  ✓ ${posts.length} posts carregados\n`);

        // Build
        buildPostPages(posts);
        buildBlogIndex(posts);
        buildPostsJson(posts);
        buildSitemap(posts);
        buildRss(posts);

        console.log('\n✅ Build concluído com sucesso!\n');
    } catch (error) {
        console.error('\n❌ Erro durante build:', error);
        process.exit(1);
    }
}

main();
