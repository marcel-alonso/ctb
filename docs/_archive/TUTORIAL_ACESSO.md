# 🎯 Tutorial Completo - Acessar e Usar o Blog Admin

## 📍 Índice
1. [Preparação Inicial](#preparação-inicial)
2. [Gerar Token do GitHub](#gerar-token-do-github)
3. [Acessar o Painel](#acessar-o-painel)
4. [Criar Seu Primeiro Post](#criar-seu-primeiro-post)
5. [Dicas de Segurança](#dicas-de-segurança)
6. [Troubleshooting](#troubleshooting)

---

## 🛠️ Preparação Inicial

### O que você precisa

- ✅ Conta GitHub (grátis: [github.com/signup](https://github.com/signup))
- ✅ Acesso ao repositório `marcel-alonso/ctb`
- ✅ Navegador moderno (Chrome, Firefox, Safari, Edge)
- ✅ Conexão com internet estável

---

## 🔑 Gerar Token do GitHub

### Passo 1: Acessar GitHub Settings

1. Acesse: **[https://github.com/settings/tokens](https://github.com/settings/tokens)**
2. Faça login se necessário com suas credenciais GitHub

### Passo 2: Gerar Novo Token

1. Clique em **"Generate new token"**
2. Selecione **"Generate new token (classic)"**

```
┌─────────────────────────────────────┐
│  GitHub Settings                    │
├─────────────────────────────────────┤
│  Personal access tokens             │
│  [Generate new token ▼]             │
│  ├─ Generate new token (classic) ✓  │
│  └─ Tokens (beta)                   │
└─────────────────────────────────────┘
```

### Passo 3: Configurar o Token

Na tela de criação, preencha:


| Campo | Valor |
|-------|-------|
| Campo | Valor | Obrigatório |
|-------|-------|-------------|
| **Note** | "CTB Blog Admin" ou similar | ✅ Sim |
| **Expiration** | "No expiration" (nunca expirar) | ✅ Sim |
| **Scopes** | Marque apenas: `repo` | ✅ Sim |

### Passo 4: Copiar Token

1. Após gerar, verá uma página com o token gerado
2. Clique em **"Copiar para clipboard"** (ícone de cópia à direita)
3. **NUNCA** compartilhe este token com ninguém
4. **GUARDE** em local seguro (password manager, editor de texto local)

```
┌──────────────────────────────────────────┐
│  ✅ Personal access token created!       │
├──────────────────────────────────────────┤
│  ghp_abc123def456xyz789abc123def456      │
│  [📋 Copiar para clipboard]              │
│                                          │
│  ⚠️ Make sure to copy your new token     │
│  now. You won't be able to see it again  │
└──────────────────────────────────────────┘
```

⚠️ **IMPORTANTE**: Após sair desta página, você **NÃO** poderá ver o token novamente!

---

## 🚪 Acessar o Painel

### Acessar o Admin Panel

#### No Seu Computador Local
```
http://localhost/admin/login.html
```

#### Se Hospedado Online
```
https://seu-dominio.com.br/admin/login.html
```

### Fazer Login

1. Abra a URL acima no seu navegador
2. Você verá um formulário com 4 campos:
   - **GitHub Personal Access Token**: Cole o token que você copiou
   - **Proprietário do Repositório**: `marcel-alonso` (padrão)
   - **Nome do Repositório**: `ctb` (padrão)
   - **Branch**: `main` (padrão)

3. Clique em **"Autenticar"**
4. Se o token é válido, você será redirecionado para o painel

```
┌────────────────────────────────────────┐
│  Painel Administrativo                 │
│  Autenticação via GitHub                │
├────────────────────────────────────────┤
│                                        │
│  GitHub Personal Access Token          │
│  [••••••••••••••••••••••]              │
│                                        │
│  Proprietário do Repositório           │
│  [marcel-alonso________________]       │
│                                        │
│  Nome do Repositório                   │
│  [ctb_________________]                │
│                                        │
│  Branch                                │
│  [main________________]                │
│                                        │
│  [Autenticar] button                   │
│                                        │
│  ℹ️ Como obter seu token:              │
│     1. GitHub Settings → ...            │
│     2. Gere novo token (classic)        │
│     3. Escopo: repo                     │
│     4. Copie aqui                       │
│     ⚠️ Revogue se exposto               │
└────────────────────────────────────────┘
```

---

## ✅ Autenticação com Sucesso!

Se viu a tela do painel admin com as abas **Posts**, **Novo Post**, **Mídia**, **Configurações** e um botão **Sair**, você está autenticado com sucesso!

💡 **Lembre-se**:
- O token é armazenado apenas na sessão (na memória do navegador)
- Se fechar a aba ou o navegador, precisará fazer login novamente
- Nunca compartilhe seu token com ninguém
- Revogue imediatamente se expuser acidentalmente

---

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

## � Dicas de Segurança

### 1️⃣ Proteger seu Token

- **NUNCA** compartilhe o token por email, Slack, Discord, etc.
- **NUNCA** commit o token no Git
- **NUNCA** compartilhe screenshots que mostrem o token
- Guarde em um **password manager** (Bitwarden, 1Password, LastPass)

### 2️⃣ Revogar Token Exposto

Se alguém vê seu token:

1. Acesse [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Encontre o token "CTB Blog Admin"
3. Clique em **Delete**
4. Crie um novo token imediatamente

```
ANTES: Token exposto a X pessoas
DEPOIS: X pessoas não conseguem acessar
         (revogação é imediata)
```

### 3️⃣ Escopo Mínimo do Token

Você usou apenas o escopo `repo` (o mais permissivo, necessário para editar posts).

Se soubesse apenas criar posts de leitura, seria melhor usar `public_repo`, mas como você precisa editar, `repo` é necessário.

⚠️ **NUNCA** selecione `admin:*`, `user:*`, ou `workflow:*` - são desnecessários!

### 4️⃣ Auditoria

GitHub registra tudo que você faz com seu token:

1. Acesse [https://github.com/settings/security-log](https://github.com/settings/security-log)
2. Veja todas as ações realizadas
3. Desconfiança? **Revogue o token imediatamente!**

---

## �💡 Dicas e Truques

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

### ❌ "Token inválido ou expirado"
**Motivo**: O token é inválido ou já foi revogado
**Soluções**:
1. Verifique se copiou o token corretamente (sem espaços)
2. Acesse [GitHub Settings → Tokens](https://github.com/settings/tokens) e verifique se o token ainda existe
3. Se não existe, gere um novo token
4. Tente fazer login novamente

### ❌ "Token sem permissão para acessar este repositório"
**Motivo**: O token não tem permissão necessária
**Soluções**:
1. Verifique se tem acesso ao repositório `marcel-alonso/ctb`
2. Crie um novo token com escopo `repo`
3. Se for colaborador, peça para ser adicionado ao repositório

### ❌ "Repositório não encontrado"
**Motivo**: O proprietário ou repositório estão errados
**Verifique**:
1. **Proprietário**: `marcel-alonso` (seu username)
2. **Repositório**: `ctb`
3. **Branch**: `main`

### ❌ "Erro ao conectar com GitHub"
**Soluções**:
1. Verifique sua conexão de internet
2. Verifique se o GitHub está disponível ([status.github.com](https://status.github.com))
3. Aguarde alguns minutos e tente novamente
4. Tente em outro navegador

### ❌ "Slug já existe"
**Motivo**: O título gerou um slug que já existe
**Solução**:
1. Mude o título para gerar um slug diferente
2. Ou delete o post anterior antes de criar este

### ❌ "Todos os campos obrigatórios devem ser preenchidos"
**Campos obrigatórios**:
- ✓ Título
- ✓ Resumo (descrição)
- ✓ Conteúdo
- ✓ Categoria
- ✓ Tags (pelo menos uma)
- ✓ Imagem de capa
- ✓ Texto alternativo da imagem

Preencha todos antes de publicar!

### ❌ "Upload de imagem falhou"
**Verifique**:
1. Formato válido (JPG, PNG, WebP)
2. Tamanho < 5MB
3. Conexão com internet estável

---

## 📝 Checklist Final

Antes de publicar um post, verifique:

- [ ] Token do GitHub está válido
- [ ] Estou logado no painel
- [ ] Título preenchido (será o slug)
- [ ] Resumo/Descrição preenchido
- [ ] Conteúdo em Markdown preenchido
- [ ] Categoria selecionada
- [ ] Pelo menos uma tag adicionada
- [ ] Imagem de capa uploadada
- [ ] Texto alternativo da imagem preenchido
- [ ] Preview visto (botão Visualizar)
- [ ] Links testados no preview
- [ ] Autor selecionado
- [ ] Cliquei em "Publicar Post"
- [ ] GitHub Actions gerou HTML
- [ ] Post está ao vivo em /blog/slug/ ✅

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
