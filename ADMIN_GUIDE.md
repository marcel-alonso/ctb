# Guia de Administração do Blog - Conexão Terra Bambu

## 🚀 Começando em Menos de 1 Minuto

### 1. Gerar Token do GitHub

O painel administrativo usa a API do GitHub para salvar posts. Siga estes passos:

1. Acesse https://github.com/settings/tokens
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Complete os dados:
   - **Note**: "Admin Blog CTB"
   - **Expiration**: "No expiration"
   - **Scopes**: Selecione `repo` (acesso completo ao repositório)
4. Clique em **"Generate token"**
5. **Copie o token** (você só verá uma vez!)

### 2. Configurar o Painel Admin

1. Abra `/admin/index.html` no navegador
2. Faça login com suas credenciais
3. Vá para a aba **"Configurações"** → **"GitHub"**
4. Preencha:
   - **Token do GitHub**: Cole o token que você copiou
   - **Proprietário do Repositório**: `marcel-alonso` (seu username)
   - **Nome do Repositório**: `ctb`
   - **Branch Padrão**: `main`
5. Clique em **"Salvar Configurações do GitHub"**

### 3. Criar um Novo Post

1. No painel admin, clique em **"Novo Post"**
2. Preencha os dados básicos:
   - **Título** *(obrigatório)*
   - **Resumo/Descrição** *(obrigatório)*
   - **Categoria** *(obrigatório)*: Guia Básico, Materiais ou DIY
   - **Tags** *(obrigatório)*: Digite e pressione Enter para adicionar várias

3. Na seção **"Conteúdo"**:
   - Escreva o conteúdo em Markdown
   - O **contador de palavras** e **tempo de leitura** atualizam em tempo real
   - Use a sintaxe Markdown padrão (títulos com `#`, listas com `-`, etc.)

4. Na seção **"Imagem de Capa"**:
   - Clique em "Upload de Imagem de Capa" para selecionar uma imagem
   - Preencha **"Texto Alternativo"** com descrição da imagem (importante para acessibilidade)
   - Opcionalmente, adicione uma **URL para Redes Sociais (OG)**

5. Na seção **"Tags e Autor"**:
   - Selecione o **Autor** da lista suspensa
   - Se o autor não existir, vá para Configurações → Autores e crie um novo

6. Preencha o status e salve:
   - **Status**: "Rascunho" ou "Publicado"
   - **Data de Publicação**: Deixe em branco para usar data atual
   - Clique em **"Publicar Post"**

O post será salvo no GitHub e estará disponível automaticamente no blog!

## 📝 Campos de um Post

### Obrigatórios
- **Título**: O nome do post
- **Resumo**: Descrição breve (aparece na lista de posts e redes sociais)
- **Categoria**: Guia Básico, Materiais ou DIY
- **Conteúdo**: Corpo do post em Markdown
- **Tags**: Palavras-chave para classificação (mínimo 1)
- **Imagem de Capa**: Arquivo ou URL
- **Texto Alternativo da Imagem**: Descrição da imagem (acessibilidade)

### Preenchidos Automaticamente
- **Slug**: URL amigável, gerado a partir do título
- **Canonical URL**: URL canônica do post no blog
- **Tempo de Leitura**: Calculado automaticamente
- **Contagem de Palavras**: Atualizada em tempo real
- **Data de Modificação**: Se vazio, usa data de publicação

### Opcionais
- **OG Image**: Imagem para redes sociais (se vazio, usa imagem de capa)
- **Data de Publicação**: Se vazio, usa data atual
- **Autor**: Padrão é "Conexão Terra Bambu"

## 👥 Gerenciar Autores

### Adicionar Autor

1. Vá para **Configurações** → **Autores**
2. Clique em **"Adicionar Autor"**
3. Preencha:
   - **Nome** *(obrigatório)*
   - **URL da Foto**: Caminho da imagem de perfil
   - **Biografia**: Breve descrição do autor
   - **Email**: Email de contato
4. Clique em **"Salvar Autor"**

### Editar/Deletar Autor

1. Vá para **Configurações** → **Autores**
2. Clique em **"Editar"** ou **"Deletar"** no autor desejado

## 🔧 Configurações do Site

### Site
- **Título do Site**: Nome da organização
- **Descrição do Site**: Breve descrição do negócio

### SEO
- **Palavras-chave**: Separadas por vírgula
- **URLs do Instagram e Facebook**: Para redes sociais

### GitHub
Configure aqui seu token e informações do repositório (veja "Gerar Token" acima)

## 📊 Gerenciar Posts

### Ver Posts
1. Na aba **"Posts"**, veja todos os seus posts
2. Use a **barra de busca** para filtrar por título
3. Selecione uma **categoria** para filtrar por assunto

### Editar Post
1. Clique em **"Editar"** no post que deseja modificar
2. Altere os dados necessários
3. Clique em **"Publicar Post"**

### Deletar Post
1. Clique em **"Deletar"** no post
2. Confirme a ação

### Preview
1. Clique em **"Visualizar"** para ver como fica o post
2. A preview abre em uma janela modal
3. Você pode verificar formatação, imagens e layout

## 📱 Upload de Mídia

### Adicionar Imagens

1. Vá para a aba **"Mídia"**
2. Clique em **"Upload de Imagem"**
3. Selecione a imagem do seu computador
4. A imagem será enviada para `assets/images/` no repositório

### Usar Imagens

Após upload, use o caminho da imagem:
- Exemplo: `/assets/images/minha-imagem.jpg`

## ✅ Validação de Posts

O sistema valida automaticamente:
- ✔ Todos os campos obrigatórios preenchidos
- ✔ Slug único (não pode repetir)
- ✔ Formato correto de datas
- ✔ Categoria válida

Se houver erro, uma mensagem aparecerá indicando o problema.

## 🔐 Segurança

### Token do GitHub
- ⚠️ **Nunca compartilhe seu token**
- Está armazenado em `sessionStorage` (perdido ao fechar o navegador)
- Não é enviado para nenhum servidor externo
- Só é usado para comunicar com a API do GitHub

### Autenticação
- O login está na página `/admin/login.html`
- Modifique as credenciais conforme necessário no `admin/js/admin.js`

## 🛠️ Scripts de Build

### Criar Novo Post (CLI)

```bash
node scripts/new-post.mjs "Título do Post" --category "Materiais" --tags "bambu,construção"
```

Isso cria um scaffold de post com front-matter preenchido.

### Validar Posts

```bash
node scripts/validate-posts.mjs
```

Valida todos os posts e reporta erros.

### Build Completo do Blog

```bash
node scripts/build-blog.mjs
```

Gera:
- Páginas HTML de cada post (`blog/slug/index.html`)
- Index do blog (`blog/index.html`)
- Feed RSS (`rss.xml`)
- Sitemap (`sitemap.xml`)
- JSON de posts (`posts.json`)

## 🚀 Workflow Completo

1. **Criar post** via interface admin ou CLI
2. **Editar conteúdo** e adicionar imagens
3. **Visualizar** para verificar formatação
4. **Publicar** quando pronto
5. **GitHub Action** executa build automaticamente
6. **Post aparece** no blog em segundos

## 🐛 Troubleshooting

### "Erro ao conectar com GitHub"
- ✔ Verifique se o token está correto nas Configurações
- ✔ Verifique se o token tem escopo `repo`
- ✔ Verifique conexão com internet

### "Slug já existe"
- ✔ O título gera um slug automático
- ✔ Mude o título ou delete o post existente

### "Campo obrigatório faltando"
- ✔ Todos os campos com * são obrigatórios
- ✔ Preencha antes de publicar

### "Imagem não aparece"
- ✔ Verifique se o caminho está correto
- ✔ Use `/assets/images/nome.jpg` como padrão
- ✔ Certifique-se de que o arquivo existe no repositório

## 📚 Referências

- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub API Docs](https://docs.github.com/en/rest)
- [Schema.org BlogPosting](https://schema.org/BlogPosting)
- [Open Graph Protocol](https://ogp.me/)

## 💬 Suporte

Se tiver dúvidas ou encontrar problemas:
1. Verifique este guia
2. Revise os logs do navegador (F12)
3. Verifique os workflows do GitHub Actions

---

**Última atualização**: Janeiro de 2026
**Versão**: 2.0 (Refatoração Completa)
