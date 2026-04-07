# Global Rules: Comportamento de Agentes

**Status:** Ativo  
**Regras de Governança para IA e Colaboradores**

---

## 1. Tom de Voz e Copywriting

- **Aspiracional e Premium**: O foco deve ser no design, no conforto e na natureza. O público-alvo busca elevar o padrão de seus espaços.
- **Não Focar na Dor**: Proibido usar tons de "urgência negativa" ou "medo" (ex: "Sua casa está horrível?"). Use: "Transforme seu ambiente", "Evolua seu design".
- **Linguagem**: Sempre em **Português do Brasil (PT-BR)**, com clareza e elegância. Isso inclui toda a documentação interna, PRDs, Specs e **mensagens de commit**.
- **Clareza nos Benefícios**: Priorize o conforto térmico, o design artesanal e a durabilidade real.

## 2. Padrões de Código e UI (Landing Page React)

- **Framework**: React funcional com Hooks (Vite).
- **Estilização**: Tailwind CSS (preferencialmente via plugin Vite).
- **Animações**: Framer Motion de alto nível. Suaves e intencionais.
- **Variáveis CSS**: Todas as cores e tokens devem ser gerenciados em `terrabambu-lp/src/index.css`. Nunca hardcodar cores.
- **Ícones**: Utilizar `lucide-react` para consistência.
- **Imagens**: Sempre `loading="lazy"`. Formato WebP com fallback se possível. Atributos `alt` descritivos para SEO.

## 3. SEO e Acessibilidade

- **SEO**: Toda página deve ter meta tags `og:`, `title` único e hierarquia de headings (`h1` -> `h2`).
- **Acessibilidade**: Contraste de cores adequado e labels semânticos para leitores de tela.

## 4. Gestão de Funil e Conversão

- **WhatsApp**: Toda conversão deve passar pela função `trackAndOpenWA()` no `config.js`. Incluir o parâmetro de nome do evento para tracking no Meta Pixel.
- **Dados Estáticos**: Usar o `config.js` para gerenciar telefone, mensagens padrão e prazos da IA.

## 5. Fluxo de Trabalho (SDD)

- **Consulte Always**: Leia o `prd.md` e a `spec.md` relevante antes de qualquer código.
- **Commits**: Commits em PT-BR, seguindo padrão de tags (ex: `feat:`, `fix:`, `docs:`).
- **Documentação**: Atualize as specs sempre que houver mudança técnica significativa.
