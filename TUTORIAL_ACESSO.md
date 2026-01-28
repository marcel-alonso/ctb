# 🎯 Tutorial Completo - Acessar e Usar o Blog Admin

## 📍 Índice
1. [Preparação Inicial](#preparação-inicial)
2. [Acessar o Painel](#acessar-o-painel)
3. [Primeira Configuração](#primeira-configuração)
4. [Criar Seu Primeiro Post](#criar-seu-primeiro-post)
5. [Dicas e Truques](#dicas-e-truques)

---

## 🛠️ Preparação Inicial

### O que você precisa

- ✅ Conta GitHub (grátis: github.com/signup)
- ✅ Acesso ao repositório `marcel-alonso/ctb`
- ✅ Navegador moderno (Chrome, Firefox, Safari, Edge)
- ✅ Conexão com internet

### Passo 1: Criar Token do GitHub

#### 1.1 Acesse GitHub Settings

1. Vá para: **https://github.com/settings/tokens**
2. Você será redirecionado automaticamente se estiver logado
3. Se não estiver, faça login com suas credenciais

```
URL: https://github.com/settings/tokens
Você precisa estar logado!
```

#### 1.2 Gerar Novo Token

1. Clique em **"Generate new token"**
2. Selecione **"Generate new token (classic)"**

```
┌─────────────────────────────────────┐
│  GitHub Settings                    │
├─────────────────────────────────────┤
│  Personal access tokens             │
│  [Generate new token ▼]             │
│  ├─ Generate new token (classic)    │
│  └─ Tokens (beta)                   │
└─────────────────────────────────────┘
```

#### 1.3 Preencher Formulário

| Campo | Valor |
|-------|-------|
| **Note** | "CTB Blog Admin" ou "Meu Blog Token" |
| **Expiration** | "No expiration" (nunca expirar) |
| **Scopes** | Marcar apenas: `repo` |

#### 1.4 Copiar Token

1. Após gerar, verá uma página com o token
2. Clique em **"Copiar para clipboard"** (ícone de cópia)
3. **GUARDE O TOKEN EM LOCAL SEGURO** (notepad, password manager, etc)

```
┌─────────────────────────────────────────┐
│  ✅ Personal access token created!      │
├─────────────────────────────────────────┤
│  ghp_abc123def456xyz...                 │
│  [📋 Copiar]                            │
│                                         │
│  ⚠️ Make sure to copy your new token    │
│  now. You won't be able to see it again │
└─────────────────────────────────────────┘
```

---

## 🚪 Acessar o Painel

### Passo 2: Abrir o Admin Panel

#### No Seu Computador Local
```
http://localhost/admin/index.html
```

#### Se Hospedado Online
```
https://seu-dominio.com.br/admin/index.html
```

#### 📱 Acesse de Qualquer Dispositivo
- **Desktop**: http://localhost/admin/ ou https://seu-dominio.com/admin/
- **Smartphone**: https://seu-dominio.com/admin/ (HTTPS obrigatório)
- **Tablet**: Mesma URL que smartphone

💡 **Dica**: Use um navegador moderno (Chrome, Firefox, Safari, Edge)

---

## ⚙️ Primeira Configuração

### Passo 3: Fazer Login

#### Credenciais Padrão

| Campo | Valor |
|-------|-------|
| **Username** | admin |
| **Password** | admin123 |

⚠️ **Segurança**: Altere essas credenciais em produção!

### Passo 4: Configurar GitHub

#### 4.1 Ir para Configurações

1. Clique na aba **"Configurações"** (no topo)
2. Clique na aba secundária **"GitHub"**

#### 4.2 Preencher Campos

| Campo | Valor | Exemplo |
|-------|-------|---------|
| **Token** | Seu token GitHub | ghp_abc123def... |
| **Proprietário** | Seu username GitHub | seu-username |
| **Repositório** | Nome do repo | ctb |
| **Branch** | Branch padrão | main |

#### 4.3 Salvar

1. Clique em **"Salvar Configurações do GitHub"**
2. Você verá: ✅ **Configurações do GitHub salvas!**

```
┌─────────────────────────────────────────┐
│  ⚙️ Configurações GitHub                │
├─────────────────────────────────────────┤
│                                         │
│  Token:        [ghp_abc123...]          │
│  Proprietário: [seu-username]           │
│  Repositório:  [ctb]                    │
│  Branch:       [main]                   │
│                                         │
│  [Salvar Configurações do GitHub]       │
│                                         │
│  ✅ Configurações salvas!               │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📝 Criar Seu Primeiro Post

### Passo 5: Novo Post

#### 5.1 Ir para Editor

Clique na aba **"Novo Post"** ou **"Editor"** (no topo)

#### 5.2 Formulário Pré-preenchido

O formulário aparece com todos os campos:

```
┌─────────────────────────────────────────┐
│  📝 Novo Post                           │
├─────────────────────────────────────────┤
│                                         │
│  Detalhes Básicos                       │
│  ├─ Título *:          [_____________]  │
│  ├─ Slug:              [_____________]  │
│  ├─ Resumo *:          [_____________]  │
│  ├─ Categoria *:       [Dropdown ▼]     │
│  ├─ Status:            [draft / pub.]   │
│  │                                      │
│  Conteúdo                               │
│  ├─ Markdown Editor:   [____________]   │
│  │   (autocompletar)                    │
│  │                                      │
│  Imagem de Capa                         │
│  ├─ Upload: [Selecionar Arquivo]        │
│  ├─ Alt Text *: [_________________]     │
│  │                                      │
│  Tags e Autor                           │
│  ├─ Tags *: [tag1, tag2, tag3]          │
│  ├─ Autor: [Dropdown ▼]                 │
│  │                                      │
│  [Visualizar] [Publicar Post]           │
│                                         │
└─────────────────────────────────────────┘
```

### Passo 6: Preencher Formulário

#### 📝 **Título** (Obrigatório)
```
Exemplo: "Benefícios do Bambu na Construção"
↓ (automático)
Slug gerado: "beneficios-do-bambu-na-construcao"
```

#### 📄 **Resumo/Descrição** (Obrigatório)
```
Exemplo: "Descubra como o bambu oferece resistência, 
sustentabilidade e beleza natural em projetos de construção."
```

#### 📂 **Categoria** (Obrigatório)
Selecione uma das opções:
- `Guia Básico`
- `Materiais`
- `DIY`

#### 📋 **Status**
- `draft` - Rascunho (não publicado)
- `published` - Publicado (aparece no blog)

Comece com `draft` e mude para `published` quando pronto.

#### 📝 **Conteúdo (Markdown)** (Obrigatório)

Use Markdown padrão:

```markdown
# Benefícios do Bambu

## Introdução
O bambu é um material ancestral...

## Propriedades
- Resistência
- Flexibilidade
- Sustentabilidade

## Conclusão
Um excelente material para construção.
```

✓ Palavras, tempo de leitura e caracteres são contados automaticamente!

#### 🖼️ **Imagem de Capa** (Obrigatório)

1. Clique em **"Selecionar Arquivo"**
2. Escolha uma imagem JPG, PNG ou WebP
3. Tamanho recomendado: 1200x630px
4. Preview aparecer após seleção

#### 📝 **Texto Alternativo** (Obrigatório)

Descreva a imagem para pessoas com deficiência visual:
```
Exemplo: "Estrutura de bambu em construção com artesões"
```

#### 🏷️ **Tags** (Obrigatório)

Adicione tags separadas por vírgula:
```
Exemplo: "bambu, material-natural, construção, sustentável"
```

Cada tag é clicável no frontend para filtrar posts!

#### 👤 **Autor** (Selecionado por padrão)

Selecione entre os autores cadastrados. Se nenhum estiver disponível, o sistema usa o padrão.

### Passo 7: Visualizar e Publicar

#### 🔍 Visualizar (Opcional)

1. Clique em **"Visualizar"**
2. Uma janela modal abre com preview do post
3. Verifique formatação, imagens e texto
4. Feche a janela quando terminar

#### ✅ Publicar

1. Altere **Status** para `published` (se ainda está em `draft`)
2. Clique em **"Publicar Post"** (botão verde)
3. Sistema valida todos os campos
4. Se OK: ✅ **Post criado com sucesso!**

```
Ao publicar:
1. Sistema valida campos (< 1 segundo)
2. Faz upload de imagem (se necessário)
3. Envia para GitHub API (PUT request)
4. GitHub Actions detecta novo arquivo
5. Build automático gera HTML, JSON, sitemap, RSS
6. Seu post está ao vivo em /blog/slug/ ✅
```

---

## 💡 Dicas e Truques

### Dica 1: Slug é Automático
Quando você digita o título, o slug é gerado automaticamente:
```
Título: "Benefícios do Bambu"
↓ (automático)
Slug:   "beneficios-do-bambu"
```

### Dica 2: Tempo de Leitura em Tempo Real
Conforme você digita, o tempo é recalculado:
```
1000 palavras = 5 min
2000 palavras = 10 min
(baseado em 200 palavras por minuto)
```

### Dica 3: Markdown Syntax
Use Markdown padrão no conteúdo:
```markdown
# Título (H1)
## Subtítulo (H2)
**Negrito**
*Itálico*
- Item 1
- Item 2
[Link](https://url.com)
```

### Dica 4: Editar Post Depois
1. Vá para a aba **"Posts"**
2. Clique em **"Editar"** no post
3. Faça as mudanças desejadas
4. Clique em **"Publicar Post"** (atualiza)

### Dica 5: Buscar e Filtrar
Na aba **"Posts"**, use:
- **Campo de busca**: encontre por título
- **Filtro de categoria**: Guia Básico, Materiais, DIY

---

## 🎯 Checklist: Seu Primeiro Post

### Preparação
- [ ] Criar token no GitHub
- [ ] Copiar token em local seguro

### Acesso
- [ ] Abrir /admin/index.html
- [ ] Fazer login (admin/admin123)
- [ ] Ir para Configurações > GitHub

### Configuração
- [ ] Colar token do GitHub
- [ ] Preencher: proprietário, repositório, branch
- [ ] Salvar configurações

### Criar Post
- [ ] Ir para "Novo Post"
- [ ] Preencher título, resumo, categoria
- [ ] Escrever conteúdo em Markdown
- [ ] Upload de imagem de capa
- [ ] Preencher alt text da imagem
- [ ] Adicionar tags (2+ recomendado)
- [ ] Selecionar autor
- [ ] Visualizar preview
- [ ] Publicar post

### Sucesso!
- [ ] Post aparece na lista de "Posts"
- [ ] Post está no repositório GitHub
- [ ] GitHub Actions gerou HTML
- [ ] Post está ao vivo em /blog/slug/

---

## 🆘 Troubleshooting

### ❌ "Erro ao conectar com GitHub"
**Soluções**:
1. Verificar se o token está correto (Configurações > GitHub)
2. Verificar se o proprietário está certo (seu username GitHub)
3. Verificar se tem conexão com internet
4. Tente novamente após alguns minutos

### ❌ "Slug já existe"
**Motivo**: O título gerou um slug que já existe
**Solução**:
1. Mude o título para gerar um slug diferente
2. Ou delete o post anterior

### ❌ "Todos os campos obrigatórios devem ser preenchidos"
**Campos obrigatórios**:
- ✓ Título
- ✓ Resumo
- ✓ Conteúdo
- ✓ Categoria
- ✓ Tags
- ✓ Imagem de capa
- ✓ Alt text da imagem

Preencha todos antes de publicar!

### ❌ "Upload de imagem falhou"
**Verifique**:
1. Formato válido (JPG, PNG, WebP)
2. Tamanho (máx 5MB recomendado)
3. Tente outra imagem
4. Verifique se token tem permissão

---

## 📖 Próximos Passos

### 1️⃣ Explore a Interface
- Vá para "Posts" e veja a lista
- Clique em "Editar" para modificar um post
- Clique em "Deletar" para remover

### 2️⃣ Gerenciar Autores
- Vá para Configurações > Autores
- Clique em "Adicionar Autor"
- Crie novos autores para seus posts

### 3️⃣ Configurar SEO
- Vá para Configurações > SEO
- Adicione palavras-chave
- Configure links de redes sociais

### 4️⃣ Upload de Mídia
- Vá para a aba "Mídia"
- Clique em "Upload de Imagem"
- Gerencie sua biblioteca de imagens

---

## 📞 Suporte

- **GitHub Issues**: https://github.com/marcel-alonso/ctb/issues
- **Email**: contato@conexaoterrabambu.com.br
- **Docs**: Veja DOCS_INDEX.md para mais recursos

---

**Versão**: 2.1.0  
**Data**: 28/01/2026  
**Status**: ✅ Production Ready
