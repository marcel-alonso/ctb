# SPEC: LP Forros de Bambu (React)

**Domínio:** Funil de Alta Performance  
**Tecnologia:** Vite + React + Tailwind  
**Caminho:** `/terrabambu-lp/`

---

## 1. Funil de Conversão (Estrutura)

A LP é composta pelos seguintes componentes, em ordem:

1.  **Hero**: Impacto visual com tagline aspiracional. Imagem de alto luxo.
2.  **ProvaVisual**: Indicadores de confiança com `AnimatedCounter` (m², IA, 10+ anos, 5 anos garantia).
3.  **Soluções**: Grid de cards (Forro Reto, Pergolado, Revestimento, **Painel Trançado**).
4.  **Autoridade**: Diferenciais do método Terra Bambu.
5.  **Como Funciona**: Fluxo do pedido até a instalação.
6.  **Depoimentos**: Prova social de clientes reais.
7.  **FAQ**: Tratamento de objeções.
8.  **CTAFinal**: Chamada conclusiva para o WhatsApp.

## 2. Componentes Críticos

- **`Hero.jsx`**: Foco na headline "Design que respira...".
- **`Solucao.jsx`**: Gerencia a exibição dos produtos. Toda imagem deve ser `aspect-[3/4]` ou similar.
- **`ProvaVisual.jsx`**: Coração técnica dos contadores. Requer Framer Motion para os gatilhos visuais.

## 3. Configurações (`config.js`)

- Centraliza telefone (`CONFIG.wa.phone`), mensagens padrão e o status da IA (`CONFIG.prazo`).
- Função `trackAndOpenWA`: Responsável pelo envio de eventos para o Meta Pixel.

## 4. Estilização

- Base no `index.css`. Cores via CSS Variables (`--accent`, `--gold`).
- Breakpoints: Mobile-first. Desktop (>768px).
