#!/usr/bin/env node

/**
 * new-post.mjs
 * Script para criar scaffold de novo post Markdown com front-matter atualizado
 * 
 * Uso: node scripts/new-post.mjs "Título do Post" --category "Categoria"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsDir = path.join(__dirname, '../content/posts');
const authorsFile = path.join(__dirname, '../authors.json');

// Argumentos CLI
const title = process.argv[2];
const category = process.argv.find((arg, i) => process.argv[i - 1] === '--category') || 'DIY';
const tags = (process.argv.find((arg, i) => process.argv[i - 1] === '--tags') || 'novo-post').split(',').map(t => t.trim());

if (!title) {
    console.error('❌ Uso: node scripts/new-post.mjs "Título do Post" [--category "Categoria"] [--tags "tag1,tag2"]');
    process.exit(1);
}

// Funções auxiliares
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

// Obter primeira autor
let defaultAuthor = { id: 'ctb', name: 'Conexão Terra Bambu', picture: '/assets/images/logo_only.png' };
try {
    if (fs.existsSync(authorsFile)) {
        const authorsData = JSON.parse(fs.readFileSync(authorsFile, 'utf-8'));
        if (authorsData.authors && authorsData.authors.length > 0) {
            defaultAuthor = authorsData.authors[0];
        }
    }
} catch (error) {
    console.warn('⚠️  Não foi possível carregar authors.json, usando padrão.');
}

// Criar slug
const slug = slugify(title);
const filePath = path.join(postsDir, `${slug}.md`);

// Verificar se arquivo já existe
if (fs.existsSync(filePath)) {
    console.error(`❌ Post "${slug}" já existe!`);
    process.exit(1);
}

// Data atual
const now = new Date();
const dateStr = now.toISOString().split('T')[0];

// Template de conteúdo
const excerptPrompt = `Uma breve descrição sobre ${title.toLowerCase()}`;
const content = `# ${title}

Escreva seu conteúdo aqui...

## Seção 1

Lorem ipsum dolor sit amet...

## Seção 2

Mais conteúdo...

## Conclusão

Resumo final do post.
`;

const { wordCount, readingTime } = calculateReadingTime(content);

// Front-matter
const frontMatter = `---
title: ${title}
slug: ${slug}
excerpt: ${excerptPrompt}
date: '${dateStr}'
modified: '${dateStr}'
status: draft
category: ${category}
tags:
${tags.map(tag => `  - ${tag}`).join('\n')}
author:
  id: ${defaultAuthor.id}
  name: ${defaultAuthor.name}
  picture: ${defaultAuthor.picture}
coverImage: /assets/images/placeholder.png
coverAlt: Imagem de capa para ${title}
ogImage: /assets/images/placeholder.png
canonical: https://conexaoterrabambu.com.br/blog/${slug}
readingTime: ${readingTime}
wordCount: ${wordCount}
---`;

// Criar arquivo
const fullContent = `${frontMatter}\n\n${content}`;

try {
    // Garantir diretório existe
    if (!fs.existsSync(postsDir)) {
        fs.mkdirSync(postsDir, { recursive: true });
    }

    fs.writeFileSync(filePath, fullContent, 'utf-8');
    console.log(`✅ Post criado com sucesso!`);
    console.log(`📄 Arquivo: ${filePath}`);
    console.log(`📝 Slug: ${slug}`);
    console.log(`⏱️  Tempo de leitura estimado: ${readingTime} min`);
    console.log(`📊 Contagem de palavras: ${wordCount}`);
    console.log(`\n💡 Próximos passos:`);
    console.log(`  1. Edite o arquivo em ${slug}.md`);
    console.log(`  2. Complete o conteúdo do post`);
    console.log(`  3. Atualize a imagem de capa em coverImage`);
    console.log(`  4. Altere o status para "published" quando pronto`);
    console.log(`  5. Faça commit e push para GitHub`);
} catch (error) {
    console.error(`❌ Erro ao criar post:`, error.message);
    process.exit(1);
}
