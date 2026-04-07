# Guia de Administração do Blog - Conexão Terra Bambu

## 🚀 Começando em Menos de 2 Minutos

### 1. Gerar Token do GitHub

O painel administrativo usa a API do GitHub para salvar posts. Você precisará de um Personal Access Token:

1. Acesse [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Complete os dados:
   - **Note**: "Admin Blog CTB" (um nome descritivo)
   - **Expiration**: "No expiration" (ou defina um prazo)
   - **Scopes**: Selecione apenas `repo` (acesso completo ao repositório)
4. Clique em **"Generate token"**
5. **Copie o token imediatamente** (você só o verá uma vez!)

⚠️ **SEGURANÇA**: Guarde este token com cuidado. Nunca o compartilhe ou envie por email!

### 2. Acessar o Painel Admin

1. Acesse `/admin/` no navegador (ou `/admin/login.html`)
2. Você verá um formulário com os seguintes campos:
   - **GitHub Personal Access Token**: Cole o token que você copiou na etapa anterior
   - **Proprietário do Repositório**: `marcel-alonso` (padrão)
   - **Nome do Repositório**: `ctb` (padrão)
   - **Branch**: `main` (padrão)
3. Clique em **"Autenticar"**
4. Se o token é válido e tem permissão no repositório, você será redirecionado para o painel

> 💡 **Dica**: O token é salvo apenas na sessão do seu navegador. Se fechar a aba ou o navegador, precisará fazer login novamente.

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
   - A imagem será enviada para `/assets/images/` no repositório
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

## ⚙️ Configurações do Site

### Site

- **Título do Site**: Nome da organização
- **Descrição**: Descrição curta (para meta tags)
- **URL Base**: URL do site em produção
- **Logo**: Caminho da imagem do logo

### SEO

- **Palavras-chave**: Separadas por vírgula
## 🔐 Segurança e Autenticação

### ⚠️ Proteção do Token

- **NUNCA** compartilhe seu token do GitHub com ninguém
- **NUNCA** o envie por email ou mensagem
- Se expor acidentalmente o token, revogue-o imediatamente em [GitHub Settings → Tokens](https://github.com/settings/tokens)
- O token funciona como uma chave mestre do repositório

### Revogar Token Exposto

Se alguém conseguir ver seu token:

1. Vá para [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Encontre o token "Admin Blog CTB"
3. Clique em **"Delete"**
4. Gere um novo token seguindo o guia de início

### Padrões de Segurança

- **Checklist de Segurança**:
  - ✔ Token guardado em local seguro
  - ✔ Não reuse o token em outros aplicativos
  - ✔ Mantenha o navegador atualizado
  - ✔ Use HTTPS para acessar o painel
  - ✔ Feche a sessão ao terminar (botão "Sair")

- **Imagens**:
  - ✔ Formatos: PNG, JPG, WebP
  - ✔ Tamanho máximo: 5MB
  - ✔ Caminho: `/assets/images/slug-cover.jpg`

- **Conteúdo**:
  - ✔ Valide links e formatação antes de publicar
  - ✔ Use preview para testar o layout
  - ✔ Texto alternativo obrigatório para imagens

## 📊 Visualizar Posts

### Ver Posts

1. Na aba **"Posts"**, veja todos os seus posts
2. Cada linha mostra: Título, categoria, data, status
3. Use o campo de busca para procurar por título ou slug

### Editar Post

1. Clique em **"Editar"** no post que deseja modificar
2. Altere os campos desejados
3. Clique em **"Atualizar Post"** para salvar as mudanças

### Deletar Post

1. Clique em **"Deletar"** no post
2. Confirme a exclusão
3. O post será removido do GitHub e do blog

### Preview

1. Clique em **"Visualizar"** para ver como fica o post
2. O preview é atualizado em tempo real conforme você digita
3. Você pode testar links e formatos antes de publicar

## ⚙️ Configurações Adicionais

### Site

- **Título do Site**: Nome da organização
- **Descrição**: Descrição curta (para meta tags)
- **URL Base**: URL do site em produção
- **Logo**: Caminho da imagem do logo

### SEO

- **Palavras-chave**: Separadas por vírgula
- **Author Name**: Nome padrão do site para blogs
- **Social Share Image**: Imagem padrão para compartilhamento

## 🔐 Checklist de Segurança (resumido)
- ✔ Sem URLs diretas de imagens de terceiros
- ✔ Sem informações sensíveis no conteúdo

### Token do GitHub

- ⚠️ **Nunca compartilhe seu token**
- ⚠️ Se o token vazar, regenere imediatamente em [GitHub Settings](https://github.com/settings/tokens)
- ✔ Use um token pessoal, não o token do app
- ✔ Armazene em local seguro (password manager)

### Autenticação

- O login está na página `/admin/login.html`
- As credenciais são verificadas no servidor
- Use HTTPS em produção

## 🐛 Troubleshooting

### Estrutura de Arquivos

O blog espera que os posts estejam em:

- Arquivos `.md`: `/content/posts/{slug}.md`
- Imagens: `/assets/images/{nome}.{ext}`
- JSON de posts: `/posts.json` (gerado automaticamente)
- Páginas HTML de cada post: `blog/{slug}/index.html`

### Verificação de Integridade

- ✔ A pasta `/content/posts/` existe
- ✔ Os arquivos `.md` têm front-matter válido
- ✔ As imagens existem no diretório correto

### "Erro ao conectar com GitHub"

- ✔ Verifique se o token está correto nas Configurações
- ✔ Confirme que o token não expirou
- ✔ Teste o token em [GitHub API Tester](https://docs.github.com/en/rest)
- ✔ Verifique sua conexão com a internet

### "Slug já existe"

- ✔ O título gera um slug automático
- ✔ Se já existe, altere o título
- ✔ Slugs são URL-friendly (minúsculas, hífens)

### "Campo obrigatório faltando"

- ✔ Todos os campos com * são obrigatórios
- ✔ Verifique cada aba (Detalhes, Conteúdo, Imagem)
- ✔ Título, resumo, categoria, tags são críticas

### "Imagem não aparece"

- ✔ Verifique se o caminho está correto
- ✔ O caminho deve começar com `/assets/images/`
- ✔ Confirme o nome do arquivo (case-sensitive)
- ✔ Recarregue a página (Ctrl+F5 / Cmd+Shift+R)

## 📚 Ajuda Adicional

Se encontrar problemas:

1. Verifique este guia
2. Consulte o [TUTORIAL_ACESSO.md](TUTORIAL_ACESSO.md)
3. Revise o [ACESSOS_E_LOGIN.md](ACESSOS_E_LOGIN.md)
4. Leia [ARCHITECTURE_DETAILED.md](ARCHITECTURE_DETAILED.md) para entender o sistema

---

**Versão:** 2.1  
**Data de Atualização:** 2024-01-28
