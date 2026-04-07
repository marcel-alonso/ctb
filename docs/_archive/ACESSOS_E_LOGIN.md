# 🔐 Guia de Acessos e Login - Blog Admin v2.1

## 1. Primeiras Credenciais

### ⚙️ Painel Administrativo (Admin)

```
URL: http://localhost:3000/admin/
ou   https://seu-dominio.com/admin/

Credenciais Padrão:
├─ Usuário: admin
└─ Senha: admin123
```

> ⚠️ **IMPORTANTE**: Altere essas credenciais em produção!

### 🔑 Token do GitHub

```
Token: ghp_abc123def456xyz...  (SEU TOKEN PESSOAL)
Proprietário: seu-username-github
Repositório: ctb
Branch: main
```

---

## 2. Fluxo de Acesso

### Passo 1: Login
```
1. Vá para http://localhost/admin/login.html
2. Digite as credenciais:
   - Username: admin
   - Password: admin123
3. Clique em "Entrar"
```

### Passo 2: Primeira Configuração

Após fazer login, você será redirecionado para `/admin/index.html`. 

#### Configure o GitHub:
1. Clique na aba **"⚙️ Configurações"**
2. Preencha os campos:
   - **Token do GitHub**: Cole seu token pessoal
   - **Proprietário**: Seu username do GitHub
   - **Repositório**: `ctb`
   - **Branch**: `main`
3. Clique em **"💾 Salvar Configurações do GitHub"**

### Passo 3: Criar Primeiro Post

1. Clique na aba **"📝 Posts"**
2. Clique em **"✨ Novo Post"**
3. Preencha todos os campos obrigatórios:
   - Título
   - Resumo (excerpt)
   - Categoria
   - Tags
   - Imagem de Capa
   - Conteúdo
4. Clique em **"💾 Salvar Post"**

---

## 3. Estrutura de Dados

### Posts no Admin

Cada post é salvo em `/content/posts/{slug}.md` com front-matter YAML:

```yaml
---
title: "Título do Post"
slug: titulo-do-post
excerpt: "Resumo do post..."
date: '2024-01-28'
modified: '2024-01-28'
status: published
category: "Guia Básico"
tags:
  - bambu
  - sustentabilidade
author:
  id: ctb
  name: "Conexão Terra Bambu"
  picture: /assets/images/logo.png
coverImage: /assets/images/titulo-do-post-cover.jpg
coverAlt: "Descrição da imagem"
ogImage: /assets/images/titulo-do-post-cover.jpg
canonical: https://seu-dominio.com/blog/titulo-do-post
readingTime: "5 min"
wordCount: 1200
---

# Conteúdo do post em Markdown...
```

### Posts no Frontend

Arquivo `/posts.json` (gerado automaticamente):

```json
[
  {
    "slug": "titulo-do-post",
    "title": "Título do Post",
    "excerpt": "Resumo...",
    "category": "Guia Básico",
    "tags": ["bambu", "sustentabilidade"],
    "date": "2024-01-28",
    "coverImage": "/assets/images/titulo-do-post-cover.jpg",
    "readingTime": "5 min",
    "wordCount": 1200,
    "status": "published"
  }
]
```

---

## 4. Fluxo de Publicação

```
┌─────────────────────────────────────────────────────┐
│  ADMIN PANEL                                        │
│  ┌─────────────────────────────────────────────┐   │
│  │ 1. Preencher Formulário                     │   │
│  │    └─ Título, Tags, Conteúdo, etc         │   │
│  └─────────────────────────────────────────────┘   │
│           │                                         │
│           ▼                                         │
│  ┌─────────────────────────────────────────────┐   │
│  │ 2. Upload de Imagem (base64)               │   │
│  │    └─ uploadCoverImageToGithub()           │   │
│  │       → /assets/images/slug-cover.jpg      │   │
│  └─────────────────────────────────────────────┘   │
│           │                                         │
│           ▼                                         │
│  ┌─────────────────────────────────────────────┐   │
│  │ 3. Gerar Front-Matter YAML                 │   │
│  │    └─ escapeYamlValue() seguro             │   │
│  └─────────────────────────────────────────────┘   │
│           │                                         │
│           ▼                                         │
│  ┌─────────────────────────────────────────────┐   │
│  │ 4. Commit no GitHub                        │   │
│  │    └─ PUT /content/posts/{slug}.md         │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────┐
│  GITHUB (Repositório)                              │
│  ┌─────────────────────────────────────────────┐   │
│  │ ✅ Webhook Acionado                         │   │
│  │    → GitHub Actions Workflow                │   │
│  │       ├─ Validar posts                      │   │
│  │       ├─ Gerar posts.json                   │   │
│  │       └─ Commit e Push                      │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────┐
│  WEBSITE (Frontend)                                 │
│  ┌─────────────────────────────────────────────┐   │
│  │ 1. Fetch /posts.json                        │   │
│  │ 2. Gerar Filtros Dinamicamente              │   │
│  │ 3. Renderizar Posts com Paginação           │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

---

## 5. Segurança

### 🔒 Senhas e Tokens

```
❌ NUNCA exponha:
   - GitHub Personal Access Token (ghp_...)
   - Senhas de admin (admin123)
   - API Keys privadas

✅ SEMPRE use:
   - sessionStorage para tokens temporários
   - localStorage para configurações não-sensíveis
   - HTTPS em produção
   - Variáveis de ambiente para credenciais
```

### 📝 YAML Escaping Automático

```javascript
// Campos com caracteres especiais são automaticamente escapados:

Title: "Um título com \"aspas\""
Category: "DIY & Sustentabilidade"
Author: "João da Silva"

// Funcionam perfeitamente graças a escapeYamlValue()
```

### 🔐 Armazenamento de Credenciais

```javascript
// Nunca salvo em localStorage:
sessionStorage.getItem('github_token')  // ✅ Temporário

// Nunca commitado em código:
// Token sempre solicitado ao fazer login
```

---

## 6. URLs Importantes

### Desenvolvimento Local
```
Admin Login:   http://localhost:3000/admin/login.html
Admin Panel:   http://localhost:3000/admin/
Blog:          http://localhost:3000/blog/
Posts API:     http://localhost:3000/posts.json
```

### Produção
```
Admin Login:   https://seu-dominio.com/admin/login.html
Admin Panel:   https://seu-dominio.com/admin/
Blog:          https://seu-dominio.com/blog/
Posts API:     https://seu-dominio.com/posts.json
```

### GitHub Settings
```
Tokens:        https://github.com/settings/tokens
Repo Settings: https://github.com/seu-username/ctb/settings
Actions:       https://github.com/seu-username/ctb/actions
```

---

## 7. Troubleshooting

### ❌ Erro: "Todos os campos são obrigatórios"

**Solução:**
- Título, Resumo, Categoria, Tags, Conteúdo e Imagem são obrigatórios
- Verifique se todos estão preenchidos

### ❌ Erro: "Erro ao conectar com GitHub"

**Solução:**
1. Verifique se o token está correto nas Configurações
2. Confirme que o token tem acesso ao repositório `ctb`
3. Verifique se você está online

### ❌ Erro: "Slug já existe"

**Solução:**
- Cada post precisa de um slug único
- O slug é gerado automaticamente do título
- Se já existe, altere o título

### ❌ Imagem não aparece

**Solução:**
1. Verifique se a URL está correta (começa com `/assets/images/`)
2. Confirme que a imagem foi enviada ao GitHub
3. Limpe o cache do navegador (Ctrl+Shift+Del)

### ❌ Posts não aparecem no blog

**Solução:**
1. Verifique se `/posts.json` foi gerado
2. Confirme que os posts têm `status: published`
3. Verifique a categoria (filtros podem estar ativo)
4. Recarregue a página (F5)

---

## 8. Checklist de Configuração

```
Desenvolvimento Local:
  ☐ Admin rodando em http://localhost:3000/admin/
  ☐ Blog rodando em http://localhost:3000/blog/
  ☐ Logged in com admin / admin123
  ☐ GitHub token configurado
  ☐ Repositório e branch corretos
  ☐ Teste: Criar um post demo
  ☐ Verifique se posts.json foi gerado
  ☐ Posts aparecem no blog com filtros

Produção:
  ☐ Admin HTTPS configurado
  ☐ Senhas de admin alteradas
  ☐ Token do GitHub atualizado
  ☐ GitHub Actions ativo
  ☐ Posts.json gerado corretamente
  ☐ Blog exibindo posts
  ☐ SEO metadata presente
  ☐ Backups configurados

```

---

## 9. Documentação Adicional

Para mais informações, consulte:

- 📖 [TUTORIAL_ACESSO.md](TUTORIAL_ACESSO.md) - Guia passo a passo
- 🏗️ [ARCHITECTURE_DETAILED.md](ARCHITECTURE_DETAILED.md) - Detalhes técnicos
- 📚 [IMPLEMENTATION_UPDATE.md](IMPLEMENTATION_UPDATE.md) - Todas as mudanças
- 🔧 [ADMIN_GUIDE.md](ADMIN_GUIDE.md) - Guia detalhado do admin

---

**Última atualização:** 2024-01-28  
**Versão:** v2.1  
**Status:** ✅ Pronto para Produção
