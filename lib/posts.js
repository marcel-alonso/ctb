const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const marked = require('marked');

const postsDirectory = path.join(process.cwd(), 'content/posts');

// Função para obter todos os posts
function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            // Processar o slug removendo a extensão .md
            const slug = fileName.replace(/\.md$/, '');

            return {
                ...data,
                slug,
                content: marked(content),
                date: new Date(data.date).toISOString()
            };
        });

    // Ordenar posts por data, do mais recente para o mais antigo
    return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

// Função para obter um post específico pelo slug
function getPostBySlug(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        ...data,
        slug,
        content: marked(content),
        date: new Date(data.date).toISOString()
    };
}

// Função para obter posts por categoria
function getPostsByCategory(category) {
    const allPosts = getAllPosts();
    return allPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

// Função para obter todas as categorias únicas
function getAllCategories() {
    const allPosts = getAllPosts();
    const categories = new Set(allPosts.map(post => post.category));
    return Array.from(categories);
}

// Função para obter posts relacionados
function getRelatedPosts(currentSlug, limit = 3) {
    const allPosts = getAllPosts();
    const currentPost = getPostBySlug(currentSlug);
    
    return allPosts
        .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
        .slice(0, limit);
}

// Exportar as funções para uso em outros arquivos
module.exports = {
    getAllPosts,
    getPostBySlug,
    getPostsByCategory,
    getAllCategories,
    getRelatedPosts
};
