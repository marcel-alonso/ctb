# 🎓 GUIA DE REFERÊNCIA TÉCNICA - CTB

## Índice Rápido

1. [Estrutura de Arquivos](#estrutura)
2. [Fluxos Principais](#fluxos)
3. [Variáveis de Estado](#estado)
4. [APIs e Endpoints](#apis)
5. [Scripts e Comandos](#scripts)
6. [Troubleshooting](#troubleshooting)

---

## 📁 Estrutura de Arquivos {#estrutura}

### Layout Geral
```
ctb/
├── index.html                    # 🎯 Landing page
├── package.json                  # 📦 Dependências
├── posts.json                    # 📊 API de posts (GERADO)
├── authors.json                  # 👥 Dados de autores
├── sitemap.xml                   # 🗺️ SEO (GERADO)
├── robots.txt                    # 🤖 SEO
├── CNAME                         # 🌐 Domínio
│
├── css/                          # 🎨 Estilos
│   ├── styles.css               (1225 linhas - PRINCIPAL)
│   ├── blog.css                 (estilos do blog)
│   ├── faq.css                  (estilos FAQ)
│   └── accessibility.css        (WCAG A11Y)
│
├── js/                           # ⚙️ Lógica
│   ├── main.js                  (237 linhas - LANDING)
│   ├── blog.js                  (361 linhas - BLOG)
│   └── faq.js                   (FAQ logic)
│
├── admin/                        # 🔐 Painel Admin
│   ├── login.html
│   ├── index.html
│   ├── js/admin.js              (1141 linhas - CORE)
│   └── css/admin.css
│
├── blog/                         # 📰 Blog Gerado
│   ├── index.html               (GERADO)
│   ├── beneficios-bambu-construcao/index.html
│   ├── como-comecar-casa-sustentavel/index.html
│   └── tintas-naturais-cores-que-respiram/index.html
│
├── content/posts/                # 📝 Fontes Markdown
│   ├── beneficios-bambu-construcao.md
│   ├── como-comecar-casa-sustentavel.md
│   └── tintas-naturais-cores-que-respiram.md
│
├── scripts/                      # 🔨 Build Scripts
│   ├── build-blog.mjs           (GERADOR PRINCIPAL)
│   ├── validate-posts.mjs       (VALIDADOR)
│   ├── new-post.mjs
│   ├── build.js                 (watch mode)
│   └── templates/
│       ├── post.js              (template HTML)
│       └── index.js             (template listagem)
│
├── assets/                       # 🖼️ Mídia
│   ├── images/
│   └── videos/
│
├── .github/workflows/            # 🚀 CI/CD
│   ├── blog.yml                 (BUILD AUTOMÁTICO)
│   └── deploy.yml
│
└── docs/                         # 📚 Documentação
    ├── README.md
    ├── ARCHITECTURE.md
    ├── IMPLEMENTATION_SUMMARY.md
    └── [...]
```

---

## 🔄 Fluxos Principais {#fluxos}

### 1. Fluxo de Visualização de Post

```
User → conectaoterrabambu.com.br/blog/beneficios-bambu-construcao/
  ↓
blog/beneficios-bambu-construcao/index.html (HTTP GET)
  ↓
HTML renderiza:
  ├─ Meta tags (SEO)
  ├─ Open Graph (social)
  ├─ Conteúdo HTML (do post)
  ├─ Posts relacionados (blog.js)
  └─ Botão WhatsApp
  ↓
Página interativa (<2s)
```

**Arquivos Envolvidos**:
- `blog/beneficios-bambu-construcao/index.html` (estático)
- `js/blog.js` (carrega posts relacionados)
- `posts.json` (API de dados)

---

### 2. Fluxo de Criação de Post (Admin)

```
STEP 1: Admin → admin/index.html
  └─ Autenticação: token GitHub em sessionStorage

STEP 2: Preencher formulário
  ├─ Title: "Novo Artigo"
  ├─ Content: Markdown com editor
  ├─ Slug: Auto-gerado (slugify)
  ├─ Category: Select
  ├─ Tags: Input
  ├─ Author: Select
  ├─ Featured Image: Upload
  └─ Status: Published/Draft

STEP 3: Validação (admin.js)
  ├─ Campo obrigatório?
  ├─ Slug único?
  ├─ Imagem válida?
  └─ ✅ Tudo OK → Próximo

STEP 4: GitHub API (admin.js)
  PUT /repos/{owner}/{repo}/contents/content/posts/novo-artigo.md
  {
    message: "Novo post: Novo Artigo",
    content: base64(frontmatter + markdown),
    branch: "main"
  }

STEP 5: GitHub recebe push
  └─ Webhook dispara

STEP 6: GitHub Actions (blog.yml)
  ├─ Checkout do repo
  ├─ Install Node.js
  ├─ npm install (gray-matter, marked)
  ├─ npm run validate (valida post)
  ├─ npm run build (gera HTML)
  │  ├─ Lê content/posts/novo-artigo.md
  │  ├─ Extrai frontmatter (YAML)
  │  ├─ Converte Markdown → HTML
  │  ├─ Aplica template
  │  ├─ Gera blog/novo-artigo/index.html
  │  ├─ Atualiza posts.json
  │  ├─ Atualiza rss.xml
  │  └─ Atualiza sitemap.xml
  └─ git commit + push

STEP 7: GitHub Pages publica
  └─ novo-artigo está LIVE em:
     https://conexaoterrabambu.com.br/blog/novo-artigo/

STEP 8: User acessa
  └─ Vê post com todas as otimizações SEO ✅
```

**Arquivos Críticos**:
- `admin/js/admin.js` (formulário + validação + GitHub API)
- `scripts/build-blog.mjs` (gerador HTML)
- `.github/workflows/blog.yml` (CI/CD)

---

### 3. Fluxo de Carregamento da Landing Page

```
User → conexaoterrabambu.com.br (index.html)
  ↓
Browser recebe HTML + CSS crítico inline
  ├─ Renderiza hero section imediatamente
  ├─ Pré-carrega CSS não-crítico
  └─ Pré-carrega imagens WebP
  ↓
js/main.js executa:
  ├─ initHeaderScroll() - header dinâmico
  ├─ smooth scrolling - links internos
  ├─ Mostra botão WhatsApp (ao atingir #sobre)
  └─ Animações ao scroll
  ↓
js/blog.js executa:
  ├─ fetch /posts.json
  ├─ Renderiza últimos 3 posts
  └─ Cria cards com imagens
  ↓
Página interativa (<2s)
Lighthouse: 90+
```

**Arquivos Críticos**:
- `index.html` (estrutura + CSS inline)
- `js/main.js` (interatividade)
- `js/blog.js` (blog preview)
- `posts.json` (dados de posts)

---

## 💾 Variáveis de Estado {#estado}

### Estado da Landing Page (main.js)
```javascript
// Header scroll state
const header = document.querySelector('.header');
let lastScrollY = window.scrollY;
const SCROLL_THRESHOLD = 10;

// WhatsApp button visibility
const whatsappBtn = document.querySelector('.whatsapp-float');
let whatsappShown = false;
```

### Estado do Blog (blog.js)
```javascript
let allPosts = [];              // Todos os posts carregados
let filteredPosts = [];         // Posts após filtro
let currentPage = 1;            // Página atual de paginação
let currentCategory = 'all';    // Categoria ativa
let currentTag = null;          // Tag ativa

const isHomepage = window.location.pathname === '/';
const isBlogPage = window.location.pathname.includes('/blog');
const postsPerPage = 9;         // Posts por página
const homePostsCount = 3;       // Posts na homepage
```

### Estado do Admin (admin.js)
```javascript
const appState = {
    currentView: 'posts',           // posts|authors|settings
    currentPost: null,              // Post atual em edição
    posts: [],                      // Array de posts
    authors: [],                    // Array de autores
    tags: [],                       // Tags disponíveis
    mediaFiles: [],                 // Arquivos de mídia
    
    auth: {
        isAuthenticated: boolean,
        token: string,              // GitHub token
        owner: string,              // GitHub owner
        repo: string,               // GitHub repo
        branch: 'main'
    },
    
    config: {
        githubToken: string,
        githubOwner: string,
        githubRepo: string,
        githubBranch: 'main',
        siteTitle: 'Conexão Terra Bambu',
        siteDescription: string
    },
    
    editor: EasyMDE instance       // Editor Markdown
};
```

---

## 🔌 APIs e Endpoints {#apis}

### GitHub API (para admin)

#### Criar/Atualizar Post
```javascript
// Endpoint
PUT /repos/{owner}/{repo}/contents/content/posts/{slug}.md

// Headers
{
    'Authorization': 'token {GITHUB_TOKEN}',
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
}

// Body
{
    message: "Novo post: Título do Post",
    content: base64(frontmatter + markdown),
    branch: "main"
}

// Response
{
    commit: { sha, message, ... },
    content: { sha, path, ... }
}
```

#### Deletar Post
```javascript
DELETE /repos/{owner}/{repo}/contents/content/posts/{slug}.md

// Requer SHA do arquivo anterior
{
    message: "Delete post: Título",
    sha: "{file_sha_from_previous_get}",
    branch: "main"
}
```

#### Upload de Imagem
```javascript
PUT /repos/{owner}/{repo}/contents/assets/images/{filename}

{
    message: "Upload imagem: Título",
    content: base64(image_data),
    branch: "main"
}
```

### Arquivo posts.json (Leitura)

```javascript
// Endpoint
GET /posts.json

// Response
[
    {
        title: "Título",
        slug: "titulo",
        excerpt: "...",
        date: "2024-01-10",
        modified: "2024-01-10",
        status: "published",
        category: "Materiais",
        tags: ["tag1", "tag2"],
        author: { name: "...", picture: "..." },
        coverImage: "/assets/images/...",
        readingTime: 4,
        wordCount: 892,
        content: "<html>...</html>"
    },
    ...
]
```

---

## 🛠️ Scripts e Comandos {#scripts}

### Disponíveis em package.json

```bash
# Build blog (gera HTML, JSON, RSS, Sitemap)
npm run build

# Validar posts Markdown
npm run validate

# Criar novo post (CLI)
npm run new-post

# Watch mode (rebuild ao salvar)
npm run watch

# Serve (instala Live Server)
npm run serve
```

### Build-blog.mjs (Detalhes)

```bash
node scripts/build-blog.mjs
```

**O que faz**:
1. Lê `content/posts/*.md`
2. Extrai frontmatter YAML
3. Converte Markdown → HTML
4. Calcula reading time
5. Gera `blog/[slug]/index.html`
6. Gera `blog/index.html`
7. Gera `posts.json`
8. Gera `rss.xml`
9. Gera `sitemap.xml`

---

## 🔍 Troubleshooting {#troubleshooting}

### ❌ Post não aparece no blog

**Checklist**:
- [ ] Arquivo em `content/posts/slug.md`? ✓
- [ ] Frontmatter válido (YAML)? ✓
- [ ] Campos obrigatórios presentes?
  - [ ] `title`
  - [ ] `slug`
  - [ ] `date` (ISO: `2024-01-10`)
  - [ ] `category`
  - [ ] `status: published`
- [ ] `npm run validate` passou? ✓
- [ ] `npm run build` executado? ✓
- [ ] GitHub Actions completou? ✓
- [ ] Cache do navegador limpo? ✓

**Solução**:
```bash
# 1. Validar
npm run validate

# 2. Build manualmente
npm run build

# 3. Verificar output
cat posts.json | jq '.[] | .slug'

# 4. Se ainda não aparecer, verificar GitHub Actions
# Ir a: github.com/seu-repo/actions/workflows/blog.yml
```

---

### ❌ Admin não carrega

**Checklist**:
- [ ] URL: `conexaoterrabambu.com.br/admin/` ✓
- [ ] Logado? Verificar sessionStorage ✓
- [ ] Token GitHub válido? ✓
- [ ] DevTools console - Erros? ✓
- [ ] JavaScript habilitado? ✓

**Solução**:
```javascript
// No console (DevTools)
JSON.parse(sessionStorage.getItem('ctb-auth'))

// Se undefined, fazer login novamente
```

---

### ❌ Imagem não envia

**Checklist**:
- [ ] Formato: JPG, PNG, WebP? ✓
- [ ] Tamanho: <5MB? ✓
- [ ] Token GitHub tem permissão `repo`? ✓

**Solução**:
```bash
# Verificar permissões do token em GitHub
# Settings → Developer settings → Personal access tokens

# Token necessita:
- repo (todos os escopos)
- user:email
```

---

### ❌ Build do GitHub Actions falhando

**Verificar**:
```bash
# 1. Ver logs em GitHub
github.com/seu-repo/actions

# 2. Rodar localmente para debugar
npm run validate
npm run build

# 3. Se erro no validate, checklist de frontmatter
```

**Erros Comuns**:
```
❌ Error: field 'date' is not ISO 8601
✅ Solução: use '2024-01-10' não '10/01/2024'

❌ Error: duplicate slug
✅ Solução: cada post precisa slug único

❌ Error: missing required field
✅ Solução: adicione title, slug, date, category
```

---

### ⚠️ Performance lenta

**Checklist**:
- [ ] Imagens otimizadas? (usar WebP) ✓
- [ ] Não tem requests síncronos? ✓
- [ ] posts.json muito grande? ✓
- [ ] Renderização em loop? ✓

**Otimizações**:
```javascript
// ✅ BOM: Lazy load imagens
<img loading="lazy" src="...">

// ✅ BOM: Async API calls
const posts = await fetch('/posts.json');

// ❌ RUIM: Sync requests
const data = synchronousXHR();

// ❌ RUIM: Loop DOM excessivo
for (let i = 0; i < 1000; i++) {
    document.body.appendChild(element);
}
```

---

## 📋 Checklist de Deployment

- [ ] Domínio customizado em CNAME
- [ ] HTTPS ativo (automático GitHub Pages)
- [ ] Meta tags verificadas
- [ ] Imagens otimizadas
- [ ] Lighthouse score >85
- [ ] Links internos funcionando
- [ ] 404 handling
- [ ] SEO sitemap.xml
- [ ] RSS feed válido
- [ ] Botão WhatsApp funciona

---

## 🔗 Links Importantes

```
🌐 Site: https://conexaoterrabambu.com.br
📝 Blog: https://conexaoterrabambu.com.br/blog/
🔐 Admin: https://conexaoterrabambu.com.br/admin/
📊 API: https://conexaoterrabambu.com.br/posts.json
🔄 RSS: https://conexaoterrabambu.com.br/rss.xml
🗺️ Sitemap: https://conexaoterrabambu.com.br/sitemap.xml

💻 Repo: https://github.com/marcel-alonso/ctb
🚀 Actions: https://github.com/marcel-alonso/ctb/actions
```

---

**Última Atualização**: Fevereiro 2026
