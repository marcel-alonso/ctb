# Workflow: Novo Post no Blog

**Status:** Ativo  
**Instruções para Autores e Agentes**

---

## 1. Preparação (O que?)

- Escolher um tema de Bioconstrução alinhado ao PRD (Educação/Autoridade).
- Definir palavra-chave foco (ex: "benefícios do bambu", "taipa de mão moderna").

## 2. Escrita (Como?)

- **Tom de Voz**: Educativo, técnico mas acessível, inspirador.
- **Estrutura**:
    - Título Magnético H1.
    - Introdução com gancho.
    - Tópicos H2 com listas de benefícios.
    - Conclusão com CTA para a LP de Forros ou WhatsApp.

## 3. Execução Técnica

- Executar `node scripts/new-post.mjs`.
- Seguir o prompt para preencher título, slug e categoria.
- Inserir o conteúdo no arquivo JSON/MD gerado em `/content/posts/`.

## 4. Publicação e Build

- Executar `npm run build` para gerar a página HTML do post.
- Validar as meta tags geradas.
- Sincronizar com o repositório.
