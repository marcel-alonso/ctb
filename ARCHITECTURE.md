<!-- Visual Architecture Diagram -->

# 🏗️ Arquitetura do Sistema - Blog CTB v2.0

## 📐 Diagrama de Componentes

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USUÁRIO ADMIN                               │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                ┌──────────────▼────────────────┐
                │   PAINEL ADMINISTRATIVO      │
                │  (admin/index.html + JS)     │
                │                              │
                │  - Editor Markdown           │
                │  - Upload de Imagens         │
                │  - Gerenciar Autores        │
                │  - Validação de Campos      │
                └──────┬───────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
    ┌──────────────┐        ┌──────────────────┐
    │ GITHUB API   │        │ LOCAL STORAGE    │
    │              │        │                  │
    │ - PUT post   │        │ - Autores        │
    │ - GET files  │        │ - Configurações  │
    │ - UPLOAD img │        │ - Preferências   │
    └──────┬───────┘        └────────┬─────────┘
           │                         │
           ▼                         │
    ┌─────────────────────────────────┴────────────┐
    │  REPOSITÓRIO GITHUB (main)                   │
    │                                              │
    │  ├─ content/posts/                          │
    │  │  ├─ post-1.md                            │
    │  │  ├─ post-2.md                            │
    │  │  └─ post-3.md                            │
    │  │                                           │
    │  ├─ assets/images/                          │
    │  │  └─ *.jpg, *.png, *.webp                 │
    │  │                                           │
    │  └─ authors.json                            │
    └─────────────────────────────────────────────┘
           │
           │  (webhook trigger)
           ▼
    ┌──────────────────────────┐
    │  GITHUB ACTIONS          │
    │  (blog.yml workflow)     │
    │                          │
    │  1. Validate posts       │
    │  2. Build blog           │
    │  3. Generate HTML/JSON   │
    │  4. Generate RSS/Sitemap │
    │  5. Commit artefatos     │
    └──────────┬───────────────┘
               │
               ▼
    ┌──────────────────────────────────┐
    │  ARTEFATOS GERADOS               │
    │                                  │
    │  ├─ blog/                        │
    │  │  ├─ index.html               │
    │  │  └─ slug/index.html          │
    │  │                              │
    │  ├─ posts.json                  │
    │  ├─ rss.xml                     │
    │  └─ sitemap.xml                 │
    └──────────┬───────────────────────┘
               │
               ▼
    ┌──────────────────────────────────┐
    │  SITE PÚBLICO                    │
    │  conexaoterrabambu.com.br        │
    │                                  │
    │  ├─ /blog/ (listagem)            │
    │  ├─ /blog/slug/ (post)           │
    │  ├─ /posts.json (API)            │
    │  ├─ /rss.xml (feed)              │
    │  └─ /sitemap.xml (SEO)           │
    └──────────────────────────────────┘
```

---

## 🔄 Fluxo de Dados

### Criação de Novo Post

```
1. Usuário preenche formulário
   │
   ├─ Title: "Meu Post"
   ├─ Content: "## Seção\n\nTexto..."
   ├─ Image: [upload] → /assets/images/123.jpg
   └─ Tags: [tag1, tag2]
   │
   ▼
2. JavaScript processa
   │
   ├─ slugify(title) → "meu-post"
   ├─ calculateReadingTime(content) → 5 min, 1245 words
   ├─ buildFrontMatter() → YAML struct
   └─ validateFields() → ✓ OK
   │
   ▼
3. GitHub API
   │
   ├─ POST /repos/{owner}/{repo}/contents/content/posts/meu-post.md
   │  Body: {
   │    message: "Novo post: Meu Post",
   │    content: base64(frontmatter + markdown),
   │    branch: "main"
   │  }
   │
   ▼
4. GitHub recebe push
   │
   ├─ Trigger: workflow_dispatch (blog.yml)
   │
   ▼
5. GitHub Actions executa
   │
   ├─ npm run validate
   │  └─ ✓ Post validado
   │
   ├─ npm run build
   │  └─ Gera blog/meu-post/index.html (com SEO)
   │     Atualiza posts.json
   │     Atualiza rss.xml
   │     Atualiza sitemap.xml
   │
   ├─ git commit + push
   │  └─ Commit automático dos artefatos
   │
   ▼
6. Site atualizado
   │
   └─ https://conexaoterrabambu.com.br/blog/meu-post/ ✅
```

---

## 🎯 Mapeamento de Funções

### Admin JavaScript (admin.js)

```
appState (global)
├─ currentPost: null | {slug, sha, ...}
├─ posts: [{title, slug, date, ...}, ...]
├─ authors: [{id, name, picture, ...}, ...]
├─ tags: ['tag1', 'tag2', ...]
├─ editor: EasyMDE instance
└─ config: {githubToken, githubOwner, githubRepo, ...}

Navegação
├─ switchView(view) → Posts | Editor | Media | Config
└─ switchConfigTab(tab) → Site | SEO | Authors | GitHub

Posts
├─ loadPosts() → Fetch posts.json, render list
├─ createNewPost() → Reset form, show editor
├─ editPost(slug) → Load from GitHub, populate form
├─ deletePost(slug) → Delete from GitHub
├─ handleSavePost() → Validate, create/update, GitHub API
├─ getPostData() → Collect form data
├─ generateFrontMatter(data) → YAML string
├─ parseFrontMatter(yaml) → Object
└─ filterPosts() → Search + category filter

Utilitários
├─ slugify(text) → "texto-aqui"
├─ calculateReadingTime(text) → {wordCount, readingTime}
├─ updateContentStats() → Update word count display
├─ updateCanonicalUrl(slug) → Set canonical URL
├─ showSuccess(msg) → Green banner
└─ showError(msg) → Red banner

Tags
├─ addTag(text) → Add to appState.tags + render
└─ removeTag(tag) → Remove from appState.tags + render

Imagens
├─ handleCoverImageUpload() → Preview + data URL
├─ uploadMediaFile() → GitHub API upload
├─ loadMediaFiles() → List from assets/images
└─ fileToBase64() → Convert file to base64

Autores
├─ loadAuthors() → From authors.json
├─ renderAuthorSelect() → Populate dropdown
├─ renderAuthorsList() → Display in config
├─ openAuthorModal() → Show CRUD modal
├─ editAuthor(id) → Pre-fill modal
├─ deleteAuthor(id) → Remove from appState
├─ saveAuthor() → Create/update author
└─ saveAuthorsToStorage() → Save to localStorage

Configurações
├─ saveSiteConfig() → localStorage (title, description)
├─ saveSeoConfig() → localStorage (keywords, social)
└─ saveGitHubConfig() → sessionStorage (token, owner, repo)

Preview
└─ previewPost() → Open modal with HTML preview

Autenticação
├─ checkAuthentication() → Redirect to login if needed
└─ logout() → Clear session, redirect
```

---

## 📊 Data Model - Post Front-Matter

```yaml
---
# Identificação
title: String (obrigatório)
slug: String (obrigatório, único, auto-gerado)

# Conteúdo & Descrição
excerpt: String (obrigatório)
content: String (Markdown, obrigatório)

# Publicação
date: ISO Date (obrigatório, "2024-01-28")
modified: ISO Date (opcional, default = date)
status: String (obrigatório, "draft" | "published")

# Categorização
category: String (obrigatório, "Guia Básico" | "Materiais" | "DIY")
tags: Array[String] (obrigatório, ["tag1", "tag2", ...])

# Mídia
coverImage: String (obrigatório, URL ou /path/)
coverAlt: String (obrigatório, descr. acessibilidade)
ogImage: String (opcional, para redes sociais)

# Autoria
author: {
  id: String,
  name: String,
  picture: String
}

# SEO
canonical: String (opcional, auto-preenchido)
readingTime: Number (auto-calculado)
wordCount: Number (auto-calculado)
---
```

---

## 🏗️ Estrutura de Camadas

```
┌─────────────────────────────────────┐
│  PRESENTATION LAYER                 │
│  (admin/index.html)                 │
│  - Form inputs                      │
│  - Real-time feedback               │
│  - Collapsible sections             │
│  - Modals for CRUD                  │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│  BUSINESS LOGIC LAYER               │
│  (admin/js/admin.js)                │
│  - Validation                       │
│  - Calculations (reading time)      │
│  - Auto-generation (slug, canonical)│
│  - Form state management            │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│  API LAYER                          │
│  (GitHub REST API)                  │
│  - PUT /repos/.../contents/.../md   │
│  - GET /repos/.../contents/...      │
│  - DELETE /repos/.../contents/...   │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│  DATA LAYER                         │
│  (GitHub Repository)                │
│  - content/posts/*.md               │
│  - assets/images/*                  │
│  - authors.json                     │
└─────────────────────────────────────┘
```

---

## ⚡ Performance Optimizations

```
Admin Panel
├─ Lazy load JavaScript modules
├─ CSS critical path inlining
├─ Editor loaded on demand (lazy)
└─ Debounce search/filter (300ms)

Blog Generation
├─ Parallel file processing
├─ Cache manifest for images
├─ Minify HTML output
└─ Gzip compression ready

Storage
├─ Session storage for token (< 5KB)
├─ Local storage for config (< 10KB)
├─ Fetch strategy: Network first, fallback cache
└─ Service worker ready (future)
```

---

## 🔐 Security Model

```
┌─────────────────────────────────────┐
│  USER AUTHENTICATION                │
│  (admin/login.html)                 │
│  ├─ Username/Password               │
│  └─ Session token → sessionStorage   │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│  TOKEN MANAGEMENT                   │
│  ├─ GitHub token in sessionStorage  │
│  ├─ Lost on browser close           │
│  ├─ Never sent to 3rd party         │
│  └─ HTTPS only (recommended)        │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│  GITHUB API CALLS                   │
│  ├─ Authorization header w/ token   │
│  ├─ Base64 encoding for content     │
│  ├─ HTTPS transport                 │
│  └─ Repository scope limits         │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│  VALIDATION                         │
│  ├─ Client-side validation          │
│  ├─ Server-side validation (CI/CD)  │
│  ├─ Schema validation (YAML)        │
│  └─ Unique constraint checks (slug) │
└─────────────────────────────────────┘
```

---

## 📈 Escalabilidade

```
Current State (v2.0)
├─ Posts: 3 (demo)
├─ Authors: 2 (demo)
├─ Size: ~2MB
└─ Build time: < 5 seconds

Potential Scaling
├─ Posts: 1000+ ✓
│  └─ Parallel processing in CI/CD
├─ Images: Unlimited ✓
│  └─ With CDN optimization
├─ Authors: 100+ ✓
│  └─ Database migration option
└─ Build time: < 30s even with 1000 posts
```

---

## 🚀 Deployment Checklist

```
Pre-Deployment
□ All posts validated (npm run validate)
□ Build successful (npm run build)
□ No console errors (check F12)
□ GitHub token configured
□ Actions workflow working
□ Authors configured

Deployment
□ Push to main branch
□ GitHub Actions runs automatically
□ Check workflow status
□ Verify generated files
□ Test post URL in browser

Post-Deployment
□ Check Search Console (Google)
□ Verify RSS feed in reader
□ Test social media share preview
□ Monitor Core Web Vitals
□ Set up analytics tracking
```

---

## 📚 Technology Stack

```
Frontend
├─ HTML5 (semantic, accessible)
├─ CSS3 (flexbox, grid)
├─ Vanilla JavaScript (ES2020+)
├─ EasyMDE (Markdown editor)
├─ Marked (Markdown parser)
└─ No frameworks (lightweight)

Backend
├─ GitHub REST API v3
├─ GitHub Actions (CI/CD)
└─ Node.js (build scripts)

Build Tools
├─ gray-matter (YAML parsing)
├─ marked (Markdown rendering)
└─ fs, path (Node.js stdlib)

Storage
├─ GitHub Repository (source of truth)
├─ sessionStorage (temporary token)
├─ localStorage (persistent config)
└─ Static HTML files (deployment)

Infrastructure
├─ GitHub (repo + Actions)
├─ Static host (nginx, GitHub Pages, etc)
└─ Optional: CDN for assets
```

---

## 🎯 Key Metrics

```
Creation Time
├─ User perspective: < 1 minute
└─ From save to live: < 5 minutes (with Actions)

Performance
├─ Admin load time: < 2s
├─ Post rendering: < 500ms
├─ Blog build time: < 10s (with 100 posts)
└─ Page size: < 100KB (optimized)

SEO
├─ JSON-LD schemas: 3 types
├─ Meta tags: 12+ per post
├─ Breadcrumbs: Yes
├─ Structured data: Complete
└─ Mobile-friendly: Yes

Reliability
├─ Uptime: 99.99% (GitHub)
├─ Data backup: Git history
├─ Rollback: Git revert
└─ Monitoring: GitHub Actions logs
```

---

**Versão**: 2.0  
**Data**: Janeiro 28, 2026  
**Status**: ✅ Production Ready
