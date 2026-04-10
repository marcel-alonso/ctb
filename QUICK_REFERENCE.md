# ⚡ Quick Reference - Premium Design System

**Cheat sheet** para usar a skill premium no dia a dia.

---

## 🎯 Componentes (Import)

```jsx
import { 
  Button,      // Botão premium
  Card,        // Card reutilizável
  Badge,       // Badge com variantes
  Divider,     // Divisor animado
  Section,     // Seção com background
  Container,   // Contenedor responsivo
  Grid         // Grid automático
} from './components/base';
```

---

## 🎬 Animações (Import)

```jsx
import { 
  fadeUpPremium,      // Fade + slide up
  scaleReveal,        // Scale com spring
  staggerSlow,        // Stagger lento
  stagger,            // Stagger padrão
  glowPulse,          // Pulso de brilho
  hoverLift,          // Levanta no hover
  bounceEnter,        // Bounce na entrada
  floatSubtle,        // Flutua suavemente
  blurIn,             // Desfoque gradual
  slideDown,          // Desliza para baixo
  slideUp,            // Desliza para cima
  containerFadeScale  // Combo fade + scale
} from './shared/animations.premium';
```

---

## 🎨 Cores (CSS Variables)

```css
--accent          #7EC850   /* Verde principal */
--accent-dark     #5BA33A   /* Verde escuro */
--accent-light    #A8D970   /* Verde claro */
--gold            #D4A842   /* Ouro premium */
--text            #F0F4EF   /* Texto principal */
--text-muted      #94A88F   /* Texto suave */
--bg              #0D1810   /* Fundo escuro */
--surface         rgba(255,255,255,0.05)  /* Card bg */
--shadow-glow     0 0 30px rgba(126,200,80,0.2)  /* Brilho */
```

---

## 🧩 Button Variantes

```jsx
<Button variant="primary" />    /* Verde, principal */
<Button variant="secondary" />  /* Glass, secundário */
<Button variant="ghost" />      /* Transparente, leve */
<Button variant="accent" />     /* Verde claro, destaque */
```

**Tamanhos:**
```jsx
<Button size="sm" />  /* 8px × 2, 10px font */
<Button size="md" />  /* 12px × 3, 14px font */
<Button size="lg" />  /* 20px × 5, 16px font */
<Button size="xl" />  /* 24px × 6, 18px font */
```

**Com Ícone:**
```jsx
<Button icon={ArrowRight}>Texto</Button>
```

---

## 🃏 Card Variantes

```jsx
<Card />                    /* Padrão */
<Card interactive />        /* Hover effects */
<Card elevated />           /* Com sombra */
<Card interactive elevated />  /* Ambos */
<Card hoverable={false} />  /* Sem hover */
```

---

## 🎖️ Badge Variantes

```jsx
<Badge variant="dark" />      /* Preto com blur */
<Badge variant="light" />     /* Branco claro */
<Badge variant="accent" />    /* Verde destaque */
<Badge variant="gold" />      /* Ouro premium */
```

**Com Ícone:**
```jsx
<Badge icon={MapPin} label="Texto" />
```

---

## 📦 Section Variantes

```jsx
<Section variant="dark" />      /* Fundo escuro */
<Section variant="light" />     /* Fundo claro */
<Section variant="gradient" />  /* Gradiente */
```

---

## 📐 Container Tamanhos

```jsx
<Container size="sm" />      /* max-w-2xl */
<Container size="default" /> /* max-w-6xl (padrão) */
<Container size="lg" />      /* max-w-7xl */
<Container size="full" />    /* Sem limite */
```

---

## 🔗 Grid Automático

```jsx
<Grid cols={{ default: 1, md: 2, lg: 3 }} gap="gap-8">
  {items.map(item => <Card key={item.id}>{item}</Card>)}
</Grid>
```

---

## ✨ Animações - Padrão de Uso

```jsx
{/* Seção com stagger */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  variants={staggerSlow}
>
  {/* Itens filhos com fadeUpPremium */}
  <motion.div variants={fadeUpPremium}>
    Conteúdo
  </motion.div>
</motion.div>
```

---

## 🎬 Animações Úteis por Cenário

| Cenário | Animação | Quando |
|---------|----------|--------|
| Entrada de seção | `staggerSlow` | Container pai |
| Item de lista | `fadeUpPremium` | Motion child |
| Card hover | `hoverLift` | Motion card |
| Destaque continuo | `glowPulse` | Elemento fixo |
| Entrada suave | `blurIn` | Imagens |
| Entrada impactante | `scaleReveal` | CTAs |
| Entrada dinâmica | `bounceEnter` | Features |

---

## 🚀 Boilerplate Completo

```jsx
import { motion } from "framer-motion";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { Section, Container, Card, Button } from "./base";

export default function MyComponent() {
  return (
    <Section variant="dark">
      <Container>
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerSlow}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUpPremium} className="text-5xl font-black text-white">
            Título
          </motion.h2>
          <motion.p variants={fadeUpPremium} className="text-[var(--text-muted)]">
            Descrição
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerSlow}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[1, 2, 3].map((i) => (
            <motion.div key={i} variants={fadeUpPremium}>
              <Card interactive elevated>
                <h3 className="text-xl font-bold text-white mb-4">Card {i}</h3>
                <p className="text-[var(--text-muted)] mb-6">Descrição</p>
                <Button variant="secondary">Ação</Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
```

---

## 🔧 CSS Tokens Úteis

```css
/* Espaçamentos */
padding: var(--space-md);     /* 16px */
margin: var(--space-lg);      /* 24px */

/* Sombras */
box-shadow: var(--shadow-lg);        /* Sombra grande */
box-shadow: var(--shadow-glow);      /* Brilho verde */

/* Transições */
transition: var(--transition-base);   /* 300ms */

/* Border Radius */
border-radius: var(--radius-3xl);    /* 40px */

/* Blur */
backdrop-filter: blur(var(--blur-lg)); /* 16px */
```

---

## 📱 Responsive Helpers

```jsx
{/* Mobile: show, Desktop: hide */}
<div className="block md:hidden">Mobile only</div>

{/* Desktop: show, Mobile: hidden */}
<div className="hidden md:block">Desktop only</div>

{/* Flexible spacing */}
className="px-md md:px-lg"

{/* Responsive text size */}
className="text-lg md:text-2xl lg:text-3xl"
```

---

## ⌨️ Comandos CLI

```bash
npm run dev      # Desenvolvimento (localhost:5173)
npm run build    # Build production
npm run preview  # Preview do build
npm run lint     # ESLint
```

---

## 🎯 Checklist Rápido (Antes de Committar)

- [ ] Componentes base usados (não divs customizadas)
- [ ] Animações de tokens (não valores hardcoded)
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] Acessibilidade OK (contrast, alt text)
- [ ] Performance OK (`npm run build`)
- [ ] Sem console errors/warnings

---

## 💡 Padrões Comuns

### Seção + Heading + Cards
```jsx
<Section variant="dark">
  <Container>
    <motion.h2 variants={fadeUpPremium}>Título</motion.h2>
    <Grid cols={{ default: 1, md: 3 }}>
      {items.map(i => <Card key={i.id}>{i}</Card>)}
    </Grid>
  </Container>
</Section>
```

### Cards com Imagem
```jsx
<Card interactive>
  <img src={url} className="w-full h-64 object-cover rounded-2xl mb-6" />
  <h3 className="text-xl font-bold text-white mb-3">Título</h3>
  <p className="text-[var(--text-muted)]">Descrição</p>
</Card>
```

### Call-to-Action
```jsx
<motion.div className="flex flex-col sm:flex-row gap-4">
  <Button variant="primary" size="lg">Principal</Button>
  <Button variant="secondary" size="lg">Secundário</Button>
</motion.div>
```

### Autoridade (Números)
```jsx
<Card>
  <div className="text-4xl font-black text-[var(--accent)] mb-2">10+</div>
  <div className="text-white font-bold">Anos</div>
  <p className="text-[var(--text-muted)]">De experiência</p>
</Card>
```

---

## 🎓 Exemplos Reais Disponíveis

1. **SolucaoPremium.jsx** - Componente completo refatorado
2. **IMPLEMENTATION_EXAMPLES.md** - Exemplo para cada seção
3. **COPY_PASTE_TEMPLATES.md** - Templates prontos

---

## 📖 Documentação Completa

- **premium-design-system.md** - Spec técnica
- **PREMIUM_SKILL_GUIDE.md** - Guia implementação
- **IMPLEMENTATION_EXAMPLES.md** - Exemplos seção por seção
- **COPY_PASTE_TEMPLATES.md** - Templates copy/paste
- **QUICK_REFERENCE.md** - Este arquivo

---

## 🐛 Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| Animação não funciona | Verificar `motion.div`, importar `framer-motion` |
| Cores não aparecem | Verificar `styles/tokens.css` importado em `index.css` |
| Build falha | `rm -rf node_modules && npm install && npm run build` |
| Layout quebrado | Testar com `npm run dev`, verificar Grid cols |
| Performance baixa | Rodar `npm run build`, verificar bundle size |

---

## 🎨 Paleta Rápida

```
Verde Bamboo
├─ #7EC850 (primário)
├─ #5BA33A (escuro)
└─ #A8D970 (claro)

Ouro
├─ #D4A842 (primário)
└─ #B89530 (escuro)

Neutros
├─ #F0F4EF (texto claro)
├─ #94A88F (muted)
├─ #0D1810 (bg dark)
└─ #F5F2EC (bg light)
```

---

## ✨ Status

✅ **Pronto para Produção**  
✅ **100% Reutilizável**  
✅ **Sem Dependências Externas**  
✅ **Documentação Completa**  

---

**Última atualização**: 2026-04-10 | **Versão**: 1.0.0
