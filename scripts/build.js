const fs = require('fs');
const path = require('path');
const posts = require('../lib/posts');
const chokidar = require('chokidar');

// Templates para as páginas
const postTemplate = require('./templates/post');
const indexTemplate = require('./templates/index');

// Função para criar diretórios recursivamente
function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

// Função para gerar uma página de post
function generatePostPage(post) {
    const htmlContent = postTemplate(post);
    const outputPath = path.join(__dirname, '..', 'blog', `${post.slug}.html`);
    ensureDirectoryExists(path.dirname(outputPath));
    fs.writeFileSync(outputPath, htmlContent);
    console.log(`Generated: ${outputPath}`);
}

// Função para gerar a página índice
function generateIndexPage() {
    const allPosts = posts.getAllPosts();
    const categories = posts.getAllCategories();
    const htmlContent = indexTemplate({ posts: allPosts, categories });
    const outputPath = path.join(__dirname, '..', 'blog', 'index.html');
    ensureDirectoryExists(path.dirname(outputPath));
    fs.writeFileSync(outputPath, htmlContent);
    console.log(`Generated: ${outputPath}`);
}

// Função principal de build
function build() {
    const allPosts = posts.getAllPosts();
    
    // Gerar páginas de posts individuais
    allPosts.forEach(post => {
        generatePostPage(post);
    });

    // Gerar página índice
    generateIndexPage();
}

// Função para iniciar o modo watch
function watch() {
    const contentDir = path.join(__dirname, '..', 'content');
    const watcher = chokidar.watch(contentDir, {
        ignored: /(^|[\/\\])\../,
        persistent: true
    });

    console.log('Watching for changes...');

    watcher
        .on('add', path => {
            console.log(`File ${path} has been added`);
            build();
        })
        .on('change', path => {
            console.log(`File ${path} has been changed`);
            build();
        })
        .on('unlink', path => {
            console.log(`File ${path} has been removed`);
            build();
        });
}

// Execução principal
if (process.argv.includes('--watch')) {
    build();
    watch();
} else {
    build();
}
