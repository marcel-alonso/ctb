# CTB — Conexão Terra Bambu

Projeto de Landing Pages para a empresa Conexão Terra Bambu (bambu premium).

## Stack
- React + Vite + TailwindCSS v4
- Framer Motion (animações)
- Lucide React (ícones)
- Deploy: GitHub Pages em `/lp/forros-bambu/`

## Estrutura do Projeto
```
ctb/
├── terrabambu-lp-v2/      — Único fonte React (V2)
│   ├── src/components/    — Componentes emocionais + base
│   ├── src/styles/        — tokens.css (design system)
│   ├── src/shared/        — animations.premium.js
│   ├── src/config.js      — WhatsApp, mensagens, telefone
│   └── public/assets/     — imagens e vídeos
├── lp/forros-bambu/       — Build final (HTML+CSS+JS)
└── index.html             — Site institucional
```

Deploy: `cd terrabambu-lp-v2 && npm run deploy`

---

## Branding / Design Tokens

Paleta principal (`src/styles/tokens.css`):
- `--accent`: #7EC850 — Verde Bambu (cor principal)
- `--accent-dark`: #5BA33A — Verde escuro
- `--bg`: #0D1810 — Fundo dark premium
- `--bg-light`: #F5F2EC — Fundo claro (seções light)
- `--gold`: #D4A842 — Dourado (trust signals, badges premium)
- `--text-muted`: #94A88F — Texto secundário
- `--text-dark`: #1A2410 — Texto em seções light
- Fontes: **Outfit** (headings) + **Plus Jakarta Sans** (body)

---

## Componentes Base (`src/components/base/`)

```jsx
import { Button, Badge, Section, Container, Card, Grid } from "./base";
```

| Componente | Variantes / Props principais |
|---|---|
| `Button` | variant: `primary\|secondary\|ghost\|accent` / size: `sm\|md\|lg\|xl` |
| `Card` | props: `interactive`, `elevated`, `hoverable` |
| `Badge` | variant: `dark\|light\|accent\|gold` / props: `icon`, `label` |
| `Section` | variant: `dark\|light\|gradient` |
| `Container` | size: `sm\|default\|lg\|full` |

---

## Animações (`src/shared/animations.premium.js`)

```jsx
import { fadeUpPremium, staggerSlow, parallax } from "../shared/animations.premium";
```

- `fadeUpPremium` — entrada padrão de elementos (opacity + y)
- `staggerSlow` — container para cascata de filhos
- `parallax` — para backgrounds Hero
- `scaleReveal`, `bounceEnter`, `blurIn` — variações de entrada

**Padrão obrigatório para todas as seções:**
```jsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  variants={staggerSlow}
  className="flex flex-col items-center text-center mb-16"
>
  <motion.div variants={fadeUpPremium}>
    <Badge icon={Icon} label="Label" variant="gold" className="mb-6" />
  </motion.div>
  <motion.h2 variants={fadeUpPremium} className="... text-center">
    Título com <span className="text-[var(--accent)]">destaque</span>
  </motion.h2>
  <motion.p variants={fadeUpPremium} className="max-w-2xl mx-auto text-center">
    Subtítulo da seção.
  </motion.p>
</motion.div>
```

---

## Regras de Centralização (OBRIGATÓRIO)

- Headers de seção: SEMPRE centralizados em **todos** os breakpoints
- NUNCA usar `md:text-left` ou `md:justify-start` em headers
- Wrapper de header: **obrigatório** `flex flex-col items-center`
- Parágrafos com max-width: sempre `mx-auto text-center`
- Sem `w-full` no wrapper quando o objetivo é centralizar elementos internos

---

## Padrões de Spacing (Apple/Google HIG)

- Touch targets mínimos: **44px** (botões `xl` em Hero/CTA final)
- Espaçamento entre header de seção e cards: `mb-16 md:mb-20`
- Padding vertical de seções: `py-24 md:py-32` (padrão Section)
- Gap entre cards: `gap-6`
- Micro-copy abaixo de CTAs: `text-[10px] uppercase tracking-[0.3em] text-white/40`

---

## Padrões de Responsividade

- **Mobile:** 1 coluna, carousel snap-scroll horizontal, texto compacto
- **Tablet (md):** 2 colunas, spacing maior
- **Desktop (lg+):** 3–4 colunas, animações completas
- Sempre **mobile-first** (classes base = mobile, `md:` e `lg:` sobrescrevem)

---

## WhatsApp Integration (`src/config.js`)

```jsx
import { CONFIG, trackAndOpenWA } from "../config";

// Abre WA com tracking de evento
trackAndOpenWA("Mensagem contextualizada", "Event_Name");
```

- Número configurado em `CONFIG.wa.phone`
- Mensagens contextualizadas por seção (Hero, Produto, FAQ, Footer)

---

## Estrutura de Seção Emocional

Toda LP segue esta jornada emocional de 6 seções:
1. **HeroEmocional** — headline + CTA + parallax background
2. **ProvaVisualEmocional** — stats animadas + galeria 4 fotos
3. **SolucoesEmocional** — 4 produtos com cards interativos
4. **DepoimentosEmocional** — vídeo testimonial + 3 depoimentos
5. **FAQEmocional** — 9 perguntas accordion
6. **CTAFinalEmocional** — trust signals + footer + CNPJ

Componentes de suporte sempre presentes:
- `WhatsAppFloat` — botão flutuante fixo (aparece após 2s)
- `ScrollIndicator` — indicador animado entre seções

---

## Git e Deploy

- Branch principal: `main`
- Deploy: `cd terrabambu-lp-v2 && npm run deploy`
- Base path: `/lp/forros-bambu/`
- Após deploy: `git add . && git commit && git push` para GitHub Pages
