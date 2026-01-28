# Conexão Terra Bambu - Sistema de Blog Refatorado v2.0

## 🎯 O que foi implementado

Sistema completo de gerenciamento de blog com integração GitHub API, painel administrativo moderno e recursos avançados de SEO.

## ✨ Principais Mudanças

### 1. Novo Front-Matter Estruturado

Todos os posts agora possuem campos padronizados:

```yaml
---
title: Benefícios do Bambu na Construção
slug: beneficios-bambu-construcao
excerpt: Conheça as vantagens de usar bambu em sua construção...
date: '2024-01-10'
modified: '2024-01-10'
status: published
category: Materiais
tags:
  - bambu
  - materiais-sustentáveis
  - construção
  - estruturas
author:
  id: ctb
  name: Conexão Terra Bambu
  picture: /assets/images/logo_only.png
coverImage: /assets/images/bambu.webp
coverAlt: Estrutura de bambu em construção tradicional
ogImage: /assets/images/bambu.webp
canonical: https://conexaoterrabambu.com.br/blog/beneficios-bambu-construcao
readingTime: 4
wordCount: 892
---
```

**Campos Obrigatórios:**
- `title` - Título do post
- `slug` - URL amigável (gerado automaticamente)
- `excerpt` - Resumo do post
- `date` - Data de publicação (ISO format)
- `status` - `draft` ou `published`
- `category` - Categoria do post
- `tags` - Array de tags
- `author` - Informações do autor
- `coverImage` - Caminho da imagem de capa
- `coverAlt` - Texto alternativo da imagem

**Campos Opcionais:**
- `modified` - Data da última modificação
- `ogImage` - Imagem para Open Graph (redes sociais)
- `canonical` - URL canônica (auto-preenchida)
- `readingTime` - Tempo de leitura em minutos (auto-calculado)
- `wordCount` - Contagem de palavras (auto-calculado)

### 2. Painel Administrativo Renovado

#### Nova Interface (`/admin/index.html`)

- **Seções Colapsáveis**: Organiza campos em grupos (Detalhes, Conteúdo, Imagem, Tags, Avançado)
- **Campos Novos**: Tags, Alt text, Author selector, Canonical URL
- **Estatísticas em Tempo Real**: Contador de palavras, tempo de leitura
- **Multiple Tabs**: Posts, Editor, Mídia, Configurações
- **Auto-preenchimento**: Slug, canonical URL, data
- **Validação**: Campos obrigatórios e alertas

#### Funcionalidades

✅ Criar, editar e deletar posts via GitHub API  
✅ Upload de imagens para `assets/images/`  
✅ Gerenciar autores (CRUD completo)  
✅ Configurações do site (título, descrição, SEO)  
✅ Integração com GitHub Token (seguro)  
✅ Preview em tempo real  
✅ Search e filtros de posts  

### 3. Sistema de Autores (`authors.json`)

```json
{
  "authors": [
    {
      "id": "ctb",
      "name": "Conexão Terra Bambu",
      "picture": "/assets/images/logo_only.png",
      "bio": "Especialistas em bioconstrução e sustentabilidade",
      "email": "contato@conexaoterrabambu.com.br"
    }
  ]
}
```

**Gerenciamento de Autores no Admin:**
- Adicionar novos autores
- Editar informações
- Deletar autores
- Seletor no formulário de posts

### 4. Páginas HTML com SEO Completo

Cada post gera HTML com:

#### Meta Tags
- `<title>` - Título otimizado
- `<meta name="description">` - Descrição do post
- `<meta name="keywords">` - Tags como keywords
- `<link rel="canonical">` - URL canônica

#### Open Graph (Redes Sociais)
- `og:title`, `og:description`, `og:image`, `og:url`
- `og:type: article` com metadados de artigo
- Suporte para Twitter Card

#### JSON-LD Estruturado
- BlogPosting schema completo
- BreadcrumbList schema
- Organization schema
- Inclui autor, publisher, data publicada/modificada

#### Breadcrumbs
- Navegação estruturada
- Baseada em schema.org
- Melhora UX e SEO

#### Informações do Autor
- Foto do autor
- Nome e data de publicação
- Bio (se disponível)

### 5. Tempo de Leitura e Contagem de Palavras

Calculado automaticamente:
- **Padrão**: 200 palavras por minuto
- **Mínimo**: 1 minuto
- **Atualizado em tempo real** no admin
- **Exibido no HTML** do post

### 6. Scripts de Build (`scripts/`)

#### `build-blog.mjs`
Gera artefatos estáticos:
- 📄 Páginas HTML de cada post (`blog/slug/index.html`)
- 📑 Index do blog (`blog/index.html`)
- 📊 JSON de posts (`posts.json`)
- 🗺️ Sitemap XML (`sitemap.xml`)
- 📡 Feed RSS (`rss.xml`)

**Uso:**
```bash
npm run build
# ou
node scripts/build-blog.mjs
```

#### `new-post.mjs`
Cria scaffold de novo post com front-matter preenchido.

**Uso:**
```bash
npm run new-post "Título do Post" --category "Materiais" --tags "bambu,construção"
```

#### `validate-posts.mjs`
Valida integridade de todos os posts.

**Uso:**
```bash
npm run validate
# ou
node scripts/validate-posts.mjs
```

**Valida:**
- ✔ Campos obrigatórios
- ✔ Slugs únicos
- ✔ Categorias válidas
- ✔ Datas em formato ISO
- ✔ Estrutura de autor
- ✔ Tags presentes
- ✔ Tamanho mínimo de conteúdo

### 7. GitHub Actions (`/.github/workflows/blog.yml`)

Automação completa:
1. Monitora mudanças em `content/posts/`
2. Executa validação de posts
3. Gera artefatos (HTML, JSON, RSS, sitemap)
4. Faz commit dos artefatos gerados
5. Push automático

**Trigger:**
- Qualquer push em `content/posts/`
- Qualquer mudança em `authors.json`
- Dispatch manual

## 🚀 Como Usar

### Primeira Vez

1. **Gerar Token do GitHub**
   - Acesse https://github.com/settings/tokens
   - Crie um token com escopo `repo`
   - Copie o token

2. **Configurar Admin**
   - Abra `/admin/index.html`
   - Vá para Configurações → GitHub
   - Cole o token, proprietário e repositório
   - Salve

3. **Criar Primeiro Post**
   - Clique em "Novo Post"
   - Preencha os dados
   - Clique em "Publicar Post"
   - ✅ Post salvo no GitHub!

### Criar Posts

**Método 1: Via Interface Admin (Recomendado)**
```
/admin/index.html → "Novo Post" → Preencher → "Publicar Post"
```

**Método 2: Via CLI**
```bash
npm run new-post "Meu Post" --category "DIY" --tags "bambu,casa"
# Edita o arquivo .md criado
# Faça git push
```

### Validar Antes de Publicar

```bash
npm run validate
```

### Build Manual (Após editar posts)

```bash
npm run build
```

## 📊 Estrutura de Arquivos

```
ctb/
├── admin/
│   ├── index.html           # Painel administrativo
│   ├── login.html           # Login
│   ├── css/admin.css        # Estilos do admin
│   └── js/admin.js          # Lógica do admin (GitHub API)
│
├── content/
│   └── posts/               # Posts em Markdown
│       ├── post-1.md
│       ├── post-2.md
│       └── post-3.md
│
├── scripts/
│   ├── build-blog.mjs       # Gera blog estático
│   ├── new-post.mjs         # Cria novo post
│   ├── validate-posts.mjs   # Valida posts
│   └── templates/
│       └── post.js          # Template HTML
│
├── blog/                    # Output gerado
│   ├── index.html           # Índice do blog
│   └── slug/
│       └── index.html       # Página do post
│
├── authors.json             # Configuração de autores
├── posts.json               # JSON de todos os posts
├── sitemap.xml              # Sitemap para SEO
├── rss.xml                  # Feed RSS
│
├── .github/workflows/
│   └── blog.yml             # GitHub Actions
│
└── ADMIN_GUIDE.md           # Este guia
```

## 🔒 Segurança

### Token do GitHub
- ✅ Armazenado apenas em `sessionStorage`
- ✅ Perdido ao fechar abra
- ✅ Nunca enviado para servidor externo
- ✅ Apenas usado para GitHub API

### Recomendações
- ⚠️ Use token em máquina pessoal
- ⚠️ Rote tokens regularmente
- ⚠️ Mantenha permissões mínimas necessárias
- ⚠️ Não compartilhe em públicode

## 📱 Compatibilidade

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers
- ✅ Responsive design
- ✅ Acessibilidade WCAG 2.1

## 🎨 Customização

### Adicionar Categoria

Edite `admin/index.html` (linha ~580):
```html
<option value="Nova Categoria">Nova Categoria</option>
```

E `scripts/validate-posts.mjs` (linha ~65):
```javascript
const validCategories = ['Guia Básico', 'Materiais', 'DIY', 'Nova Categoria'];
```

### Alterar Velocidade de Leitura

Edite `admin/js/admin.js`:
```javascript
const wordsPerMinute = 200; // Altere este valor
```

### Customizar Canonical URL

Edite `admin/js/admin.js`:
```javascript
const canonical = `https://seu-dominio.com.br/blog/${slug}`;
```

## 🐛 Troubleshooting

### "Erro ao conectar com GitHub"
```
Verifique:
- ✔ Token correto nas Configurações
- ✔ Escopo 'repo' ativado
- ✔ Conexão com internet
- ✔ Repositório existe
```

### "Slug já existe"
```
Motivo: Dois posts têm o mesmo slug
Solução: Mude o título ou delete o post existente
```

### "Validação falhou"
```bash
npm run validate
# Verifique os erros reportados
# Edite o arquivo e tente novamente
```

## 📚 Referências Técnicas

### Dependências
- `gray-matter@4.0.3` - Parse YAML frontmatter
- `marked@4.3.0` - Markdown parser
- `chokidar@3.5.3` - File watcher (build)

### APIs Usadas
- GitHub REST API v3 (content operations)
- Fetch API (client-side)
- FileReader API (upload)

### Schemas Usados
- Schema.org BlogPosting
- Schema.org BreadcrumbList
- Schema.org Organization
- Open Graph Protocol v1.1

## 📝 Mudanças de Versão

### v2.0 (Janeiro 2026)
- ✨ Novo sistema de front-matter
- ✨ Painel administrativo refatorado
- ✨ Integração GitHub API
- ✨ SEO completo com JSON-LD
- ✨ Sistema de autores
- ✨ GitHub Actions automático
- 🔧 Scripts de build e validação
- 📖 Documentação completa

## 💬 Suporte

Para dúvidas:
1. Leia `ADMIN_GUIDE.md`
2. Verifique logs do navegador (F12)
3. Consulte `validate-posts.mjs` para erros
4. Revise GitHub Actions logs

## 📄 Licença

Mesmo da Conexão Terra Bambu

---

**Versão**: 2.0  
**Atualizado**: Janeiro 2026  
**Status**: Pronto para Produção ✅
