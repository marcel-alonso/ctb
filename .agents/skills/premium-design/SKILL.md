# SKILL: Premium Design System - Conexão Terra Bambu

**Status**: ✅ Ativo  
**Versão**: 2.0.0  
**Data**: 2026-04-13

---

## 1. Missão do Skill

Manter e evoluir a Landing Page de Bambu com design premium (Apple/Google style) através de:
- Sistema de componentes base reutilizáveis
- Animações suaves e profissionais (Framer Motion)
- Design tokens CSS consistentes
- Padrões rígidos de centralização e espaçamento
- Zero dependências externas

---

## 2. Estrutura do Projeto

```
ctb/
├── terrabambu-lp-v2/          ← ÚNICO fonte React (V2 — sempre usar este)
│   ├── src/components/base/   ← Button, Card, Badge, Section, Container, Grid
│   ├── src/components/        ← Componentes emocionais (HeroEmocional, etc)
│   ├── src/styles/tokens.css  ← Design tokens (40+ variáveis CSS)
│   ├── src/shared/            ← animations.premium.js
│   ├── src/config.js          ← WhatsApp, mensagens, telefone
│   └── public/assets/         ← Imagens e vídeos
├── lp/forros-bambu/           ← Build final (HTML+CSS+JS) — gerado via deploy
└── index.html                 ← Site institucional
```

> ⚠️ **NÃO** usar `terrabambu-lp/` (V1 removida). Sempre `terrabambu-lp-v2/`.

---

## 3. Comandos

```bash
# Desenvolvimento (HMR em tempo real)
cd terrabambu-lp-v2
npm run dev              # localhost:5173/lp/forros-bambu/

# Deploy (build + copia para ../lp/forros-bambu/)
npm run deploy

# Preview do build
npm run preview
```

---

## 4. Branding / Design Tokens (`src/styles/tokens.css`)

### Paleta Principal
```css
--accent:      #7EC850   /* Verde Bambu — cor principal */
--accent-dark: #5BA33A   /* Verde escuro */
--accent-light:#A8D970   /* Verde claro */
--bg:          #0D1810   /* Fundo dark premium */
--bg-2:        #162212   /* Fundo secundário dark */
--bg-light:    #F5F2EC   /* Fundo claro (seções light) */
--text:        #F0F4EF   /* Texto principal */
--text-dark:   #1A2410   /* Texto em seções light */
--text-muted:  #94A88F   /* Texto secundário */
--gold:        #D4A842   /* Dourado — badges premium, trust signals */
--gold-dark:   #B89530   /* Dourado escuro */
```

### Tipografia
- **Headings**: `Outfit` (700, 800, 900)
- **Body**: `Plus Jakarta Sans` (400, 500, 600, 700)

> ❌ Não usar DM Sans ou Bricolage Grotesque (fontes removidas na V2)

### Uso de Tokens (OBRIGATÓRIO)
```css
/* ✅ Correto */
color: var(--text);
background: var(--surface);
box-shadow: var(--shadow-lg);
border-color: var(--accent);

/* ❌ Errado — não hardcodar */
color: #F0F4EF;
background: rgba(255,255,255,0.05);
```

---

## 5. Componentes Base

```jsx
import { Button, Badge, Section, Container, Card, Grid } from "./base";
```

### Button
| Prop | Valores |
|---|---|
| `variant` | `primary` \| `secondary` \| `ghost` \| `accent` |
| `size` | `sm` (32px) \| `md` (36px) \| `lg` (40px) \| `xl` (44px) |
| `icon` | Lucide icon component |

```jsx
// Hero / CTA Final → xl
<Button variant="primary" size="xl" onClick={() => trackAndOpenWA(msg)}>
  SOLICITAR ORÇAMENTO GRÁTIS
</Button>

// Cards de produto → md + secondary
<Button variant="secondary" size="md" icon={ArrowRight} onClick={...}>
  Solicitar Orçamento
</Button>
```

### Card
```jsx
<Card interactive elevated>  {/* interactive = hover/tap effects */}
  {children}
</Card>
```

### Badge
| Variante | Uso |
|---|---|
| `gold` | Badges de seção (destaque premium) |
| `dark` | Badges em cards sobre imagem |
| `light` | Hero sobre fundo escuro |
| `accent` | Destaque verde |

```jsx
<Badge icon={Star} label="Excelência em Execução" variant="gold" className="mb-6" />
```

### Section
```jsx
<Section variant="dark" id="solucoes">   {/* dark ou light */}
  <Container>
    {children}
  </Container>
</Section>
```

### Container
| Size | Max-width |
|---|---|
| `sm` | 42rem — seções estreitas (FAQ) |
| `default` | 64rem — padrão |
| `lg` | 80rem — full width |

---

## 6. Animações (`src/shared/animations.premium.js`)

```jsx
import { fadeUpPremium, staggerSlow, parallax } from "../shared/animations.premium";
```

| Animação | Uso |
|---|---|
| `fadeUpPremium` | Entrada padrão de qualquer elemento |
| `staggerSlow` | Container — cria cascata nos filhos |
| `parallax` | Background do Hero |
| `scaleReveal` | Entrada com escala |
| `bounceEnter` | Entrada com bounce (spring) |

---

## 7. Padrão OBRIGATÓRIO de Header de Seção

**Todo header de seção deve seguir este padrão:**

```jsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  variants={staggerSlow}
  className="flex flex-col items-center text-center mb-16"
>
  <motion.div variants={fadeUpPremium}>
    <Badge icon={Icon} label="Label da Seção" variant="gold" className="mb-6" />
  </motion.div>

  <motion.h2
    variants={fadeUpPremium}
    className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter text-center"
  >
    Título com <span className="text-[var(--accent)]">destaque</span>
  </motion.h2>

  <motion.p
    variants={fadeUpPremium}
    className="text-base md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed font-medium text-center mb-16 md:mb-20"
  >
    Subtítulo da seção.
  </motion.p>
</motion.div>
```

---

## 8. Regras de Centralização (CRÍTICO)

> Estas regras foram estabelecidas após múltiplas correções de layout.

✅ **SEMPRE**:
- `flex flex-col items-center` no wrapper `motion.div` do header
- `text-center` em h2 e parágrafos de header
- `mx-auto` em parágrafos com `max-w-*`

❌ **NUNCA**:
- `md:text-left` em títulos ou parágrafos de header
- `md:justify-start` em flex containers de header
- `w-full` em wrapper quando o objetivo é centralizar filhos com max-width

**Por quê:** `mx-auto` em elemento `block` só funciona se o elemento pai for um flex container ou tiver largura bem definida. Sem `flex flex-col items-center` no pai, o `mx-auto` pode resolver incorretamente e deslocar o texto para a esquerda.

---

## 9. Padrões de Espaçamento

| Contexto | Classe |
|---|---|
| Entre header e cards/grid | `mb-16 md:mb-20` no último elemento do header |
| Wrapper header completo | `mb-14` a `mb-16` |
| Padding de seção (padrão) | `py-24 md:py-32` (automático via Section) |
| Gap entre cards | `gap-6` |
| Touch targets (botões) | mínimo `xl` (44px) em Hero e CTA final |

---

## 10. WhatsApp Integration (`src/config.js`)

```jsx
import { CONFIG, trackAndOpenWA } from "../config";

// Abre WA com tracking opcional de evento Meta Pixel
trackAndOpenWA("Mensagem contextualizada", "Event_Name");
```

Mensagens por seção (configuradas em `CONFIG.wa`):
- Hero → `CONFIG.wa.msgHero`
- Produto → `"Olá! Tenho interesse no [Produto]. Pode me passar um orçamento?"`
- FAQ → `CONFIG.wa.msgFaq`
- CTA Final → `CONFIG.wa.msgFinal`

---

## 11. Estrutura Emocional das LPs

Toda LP CTB segue esta jornada de 6 seções + componentes de suporte:

| # | Componente | Objetivo Emocional |
|---|---|---|
| 1 | `HeroEmocional` | Impacto visual imediato + CTA |
| 2 | `ProvaVisualEmocional` | Stats numéricas + galeria de projetos |
| 3 | `SolucoesEmocional` | 4 produtos com cards interativos |
| 4 | `DepoimentosEmocional` | Vídeo testimonial + 3 depoimentos |
| 5 | `FAQEmocional` | Resolver objeções técnicas |
| 6 | `CTAFinalEmocional` | Urgência suave + trust signals + footer |

Suporte permanente:
- `WhatsAppFloat` — botão fixo, aparece após 2s
- `ScrollIndicator` — indicador animado entre seções

---

## 12. Responsividade

```jsx
// Mobile-first sempre
className="text-4xl sm:text-5xl md:text-7xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
className="py-16 md:py-24 lg:py-32"
```

| Breakpoint | Layout |
|---|---|
| Mobile | 1 coluna, carousel snap-scroll, texto compacto |
| Tablet (md: 768px) | 2 colunas |
| Desktop (lg: 1024px+) | 3–4 colunas, animações completas |

**Carrossel mobile:**
```jsx
<div className="flex gap-4 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
     style={{ WebkitOverflowScrolling: "touch" }}>
  {items.map(item => (
    <div className="flex-shrink-0 w-[75vw] snap-center">...</div>
  ))}
</div>
```

---

## 13. Acessibilidade e Performance

- `prefers-reduced-motion` → desativa animações (já configurado em tokens.css)
- `touch-action: manipulation` → remove 300ms tap delay
- `-webkit-tap-highlight-color: transparent` → sem flash de tap
- `loading="lazy"` em todas as imagens
- `alt` descritivo em todas as imagens
- Imagens: importar via `import img from "@assets/images/file.jpg"` (nunca strings)

---

## 14. O Que NÃO Fazer

❌ Usar `terrabambu-lp/` (V1 removida — só `terrabambu-lp-v2/`)  
❌ Hardcodar cores (`#7EC850`) — usar `var(--accent)`  
❌ Hardcodar transições — usar tokens de animação  
❌ `md:text-left` em headers de seção  
❌ `md:justify-start` em flex containers de header  
❌ Usar divs brutas quando há componente base disponível  
❌ `content-visibility: auto` em seções (quebra `mx-auto` em elementos filhos)  
❌ Mexer em `.github/workflows/deploy.yml` sem erro confirmado  

---

## 15. Checklist Antes de Deploy

- [ ] Componentes base usados (Button, Card, Badge, Section, Container)
- [ ] Animações via tokens (fadeUpPremium, staggerSlow)
- [ ] Headers com `flex flex-col items-center` no wrapper
- [ ] Parágrafos com `mx-auto text-center`
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] `npm run deploy` sem erros
- [ ] Git commit + push

---

**Última atualização**: 2026-04-13  
**Versão**: 2.0.0  
**Status**: Production Ready ✅
