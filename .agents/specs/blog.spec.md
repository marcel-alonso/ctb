# SPEC: Blog de Bioconstrução

**Domínio:** Autoridade e Educação SEO  
**Tecnologia:** HTML estático (Gerado via Node scripts)  
**Caminho:** `/blog/` + `/content/posts/`

---

## 1. Estrutura de Conteúdo

- **Fonte**: Arquivos JSON/Markdown na pasta `/content/posts/`.
- **Campos Obrigatórios**: `title`, `date`, `category`, `slug`, `content`, `metaDescription`.
- **Imagens**: Imagem de destaque otimizada em `/assets/images/`.

## 2. Motor de Build (`scripts/build-blog.mjs`)

- O script lê o conteúdo bruto, valida campos obrigatórios e gera as páginas HTML finais usando templates.
- **SEO Automático**: Gera meta tags dinâmicas por post.

## 3. Estratégia de Conversão

- Cada post deve ter um link para o WhatsApp ou um Call-to-Action para a LP de Forros.
- Preparar para inclusão de **Lead Magnets** (E-books e Cursos).

## 4. Regras de Manutenção

- **SEO First**: Títulos com palavras-chave de bioconstrução (bambu, construção sustentável, taipa).
- **Consistência**: Publicar mensalmente para manter autoridade orgânica.
