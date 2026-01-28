#!/usr/bin/env node

/**
 * validate-posts.mjs
 * Valida integridade dos posts: campos obrigatórios, slugs únicos, etc.
 * 
 * Uso: node scripts/validate-posts.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsDir = path.join(__dirname, '../content/posts');

// Campos obrigatórios
const requiredFields = [
    'title',
    'slug',
    'excerpt',
    'date',
    'status',
    'category',
    'tags',
    'coverImage',
    'coverAlt',
    'author'
];

// Validações
function validatePost(file, content, allSlugs) {
    const errors = [];
    const warnings = [];
    
    const { data, content: markdown } = matter(content);

    // Validar campos obrigatórios
    requiredFields.forEach(field => {
        if (!data[field]) {
            errors.push(`  ❌ Campo obrigatório faltando: "${field}"`);
        }
    });

    // Validar slug
    if (data.slug) {
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug)) {
            errors.push(`  ❌ Slug inválido: "${data.slug}". Use apenas letras minúsculas, números e hífens.`);
        }

        const slugCount = allSlugs.filter(s => s === data.slug).length;
        if (slugCount > 1) {
            errors.push(`  ❌ Slug duplicado: "${data.slug}"`);
        }
    }

    // Validar categoria
    const validCategories = ['Guia Básico', 'Materiais', 'DIY'];
    if (data.category && !validCategories.includes(data.category)) {
        warnings.push(`  ⚠️  Categoria não padrão: "${data.category}". Use uma de: ${validCategories.join(', ')}`);
    }

    // Validar status
    if (data.status && !['draft', 'published'].includes(data.status)) {
        errors.push(`  ❌ Status inválido: "${data.status}". Use "draft" ou "published".`);
    }

    // Validar datas
    if (data.date && isNaN(Date.parse(data.date))) {
        errors.push(`  ❌ Data inválida: "${data.date}". Use formato ISO (YYYY-MM-DD).`);
    }

    // Validar autor
    if (data.author && !data.author.name) {
        errors.push(`  ❌ Autor sem nome: autor precisa ter campo "name"`);
    }

    // Validar tags
    if (!Array.isArray(data.tags) || data.tags.length === 0) {
        warnings.push(`  ⚠️  Post sem tags`);
    }

    // Validar conteúdo
    if (!markdown || markdown.trim().length < 100) {
        warnings.push(`  ⚠️  Conteúdo muito curto (mínimo 100 caracteres)`);
    }

    // Validar imagens
    if (data.coverImage && !data.coverImage.startsWith('http') && !data.coverImage.startsWith('/')) {
        warnings.push(`  ⚠️  coverImage deveria ser URL ou caminho absoluto: "${data.coverImage}"`);
    }

    return { errors, warnings, data };
}

// Main
async function main() {
    try {
        console.log('\n🔍 Validando posts...\n');

        if (!fs.existsSync(postsDir)) {
            console.log('ℹ️  Nenhum post encontrado');
            return;
        }

        const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
        
        if (files.length === 0) {
            console.log('ℹ️  Nenhum post encontrado');
            return;
        }

        // Primeiro passe: coletar todos os slugs
        const allSlugs = [];
        files.forEach(file => {
            const filePath = path.join(postsDir, file);
            const content = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(content);
            if (data.slug) {
                allSlugs.push(data.slug);
            }
        });

        // Segundo passe: validar
        let totalErrors = 0;
        let totalWarnings = 0;

        files.forEach(file => {
            const filePath = path.join(postsDir, file);
            const content = fs.readFileSync(filePath, 'utf-8');
            
            const { errors, warnings } = validatePost(file, content, allSlugs);

            if (errors.length > 0 || warnings.length > 0) {
                console.log(`📄 ${file}`);
                errors.forEach(err => console.log(err));
                warnings.forEach(warn => console.log(warn));
                console.log('');
                
                totalErrors += errors.length;
                totalWarnings += warnings.length;
            } else {
                console.log(`✅ ${file}`);
            }
        });

        console.log('\n📊 Resumo:');
        console.log(`  Total de posts: ${files.length}`);
        console.log(`  Erros: ${totalErrors}`);
        console.log(`  Avisos: ${totalWarnings}`);

        if (totalErrors > 0) {
            console.log('\n❌ Validação falhou! Corrija os erros acima.');
            process.exit(1);
        } else if (totalWarnings > 0) {
            console.log('\n⚠️  Validação concluída com avisos.');
            process.exit(0);
        } else {
            console.log('\n✅ Todos os posts são válidos!');
            process.exit(0);
        }

    } catch (error) {
        console.error('\n❌ Erro durante validação:', error);
        process.exit(1);
    }
}

main();
