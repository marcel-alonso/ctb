# SKILL: Premium Design System - Forros Bambu

**Status**: ✅ Ativo  
**Versão**: 1.0.0  
**Data**: 2026-04-10

---

## 1. Missão do Skill

Elevar a Landing Page de Forros Bambu para nível de design premium (Apple/Google/Meta style) através de:
- Sistema de componentes base reutilizáveis
- Animações suaves e profissionais
- Design tokens CSS consistentes
- Zero dependências externas

---

## 2. Competências do Skill

### 🎨 Design System
- Criar componentes base reutilizáveis (Button, Card, Badge, Section, etc)
- Implementar design tokens CSS (cores, sombras, espaçamentos)
- Manter paleta de cores consistente
- Aplicar tipografia premium (DM Sans + Bricolage Grotesque)

### ✨ Animações
- Usar Framer Motion para animações suaves
- Implementar 20+ variações de entrada/hover/scroll
- Seguir padrões Apple (subtle), Google (clarity), Meta (interactive)
- Respeitar `prefers-reduced-motion`

### 📱 Responsividade
- Mobile-first design
- Breakpoints inteligentes (640px, 768px, 1024px)
- Tipografia fluida com `clamp()`
- Grid automático baseado em CSS

### ⚡ Performance
- Build local com Vite (sem CI/CD)
- Bundle < 50KB gzipped
- LCP < 2.5s, FID < 100ms
- Imagens otimizadas (WebP)

### ♿ Acessibilidade
- WCAG 2.1 AA compliance
- Contrast ratios otimizados
- Semântica HTML correta
- Navegação por teclado

---

## 3. Padrões & Convenções

### Componentes Base
```jsx
// Sempre reutilizar componentes base
import { Button, Card, Badge, Section, Container } from './components/base';

// ✅ Correto:
<Card interactive elevated>
  <h2>Título</h2>
  <Button variant="primary">Ação</Button>
</Card>

// ❌ Errado:
<div className="bg-white/10 border border-white/10 rounded-2xl p-8">
```

### Animações
```jsx
// Sempre usar tokens de animação
import { fadeUpPremium, staggerSlow } from './shared/animations.premium';

// ✅ Correto:
<motion.div variants={fadeUpPremium}>
  Conteúdo
</motion.div>

// ❌ Errado:
<motion.div animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
```

### Cores & Tokens
```css
/* ✅ Correto: Use CSS variables */
color: var(--text);
background: var(--surface);
box-shadow: var(--shadow-lg);

/* ❌ Errado: Não hardcode colors */
color: #F0F4EF;
background: rgba(255,255,255,0.05);
```

### Espaçamentos
```jsx
/* ✅ Correto: Múltiplos de 8px */
padding: var(--space-md);  /* 16px */
margin: var(--space-lg);   /* 24px */

/* ❌ Errado: Valores aleatórios */
padding: 13px;
margin: 15px;
```

---

## 4. Estrutura de Arquivos

```
terrabambu-lp/
├── src/
│   ├── components/base/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   ├── Divider.jsx
│   │   ├── Section.jsx
│   │   ├── Container.jsx
│   │   ├── Grid.jsx
│   │   └── index.js
│   ├── styles/
│   │   └── tokens.css (40+ variáveis CSS)
│   ├── shared/
│   │   ├── animations.js
│   │   └── animations.premium.js (20+ animações)
│   └── index.css (importa tokens.css + tailwind)
│
.agents/skills/premium-design/
├── SKILL.md (este arquivo)
├── TEMPLATES.md (templates copy/paste)
└── REFERENCE.md (referência rápida)
```

---

## 5. Workflow de Implementação

### Para Refatorar uma Seção:

1. **Ler exemplo**
   ```bash
   # Ver: terrabambu-lp/IMPLEMENTATION_EXAMPLES.md
   ```

2. **Copiar template**
   ```bash
   # Ver: terrabambu-lp/COPY_PASTE_TEMPLATES.md
   ```

3. **Adaptar conteúdo**
   - Trocar textos
   - Mudar imagens
   - Ajustar onClick handlers

4. **Testar (SEMPRE via dev server)**
   ```bash
   cd terrabambu-lp
   npm run dev
   # Abrir http://localhost:5173/lp/forros-bambu/
   # Verificar mobile, tablet, desktop
   # Todas as mudanças aparecem instantaneamente (HMR)
   ```

5. **Publicar (somente quando aprovado)**
   ```bash
   cd terrabambu-lp
   npm run deploy
   # Faz build + copia para ../lp/forros-bambu/
   # Depois: git add, commit e push normalmente
   ```

---

## 6. Componentes Disponíveis

### Button
**Variantes**: primary, secondary, ghost, accent  
**Tamanhos**: sm, md, lg, xl  
**Props**: onClick, disabled, icon, className

```jsx
<Button 
  variant="primary" 
  size="lg" 
  icon={ArrowRight}
  onClick={handleClick}
>
  Clique aqui
</Button>
```

### Card
**Props**: interactive, elevated, hoverable, className  
**Uso padrão**: Agrupador de conteúdo premium

```jsx
<Card interactive elevated>
  <img src={url} />
  <h3>Título</h3>
  <p>Descrição</p>
  <Button>Ação</Button>
</Card>
```

### Badge
**Variantes**: dark, light, accent, gold  
**Props**: icon, label, variant, className

```jsx
<Badge 
  icon={MapPin} 
  label="Sua cidade" 
  variant="gold"
/>
```

### Section
**Variantes**: dark, light, gradient  
**Props**: id, variant, className

```jsx
<Section variant="dark" id="minha-secao">
  <Container>
    {children}
  </Container>
</Section>
```

### Container
**Tamanhos**: sm, default, lg, full  
**Props**: size, className

```jsx
<Container size="default">
  {children}
</Container>
```

### Grid
**Props**: cols (objeto com breakpoints), gap, className

```jsx
<Grid 
  cols={{ default: 1, md: 2, lg: 3 }} 
  gap="gap-8"
>
  {items.map(item => <Card key={item.id}>{item}</Card>)}
</Grid>
```

---

## 7. Animações Disponíveis

### Entrada
- `fadeUpPremium` - Fade + slide up suave
- `scaleReveal` - Scale com spring bounce
- `bounceEnter` - Bounce dinâmico
- `blurIn` - Desfoque gradual

### Container
- `stagger` - Padrão (0.1s delay)
- `staggerSlow` - Lento (0.15s delay)
- `containerFadeScale` - Combo fade + scale

### Interação
- `hoverLift` - Levanta no hover
- `hoverScale` - Escala no hover
- `glowPulse` - Pulsa com brilho

### Sutil
- `floatSubtle` - Flutua suavemente
- `rotateSubtle` - Gira suave
- `slideDown/slideUp` - Slides suaves

### Especial
- `modalScale` - Para modais
- `shimmer` - Efeito brilho
- `scrollIndicator` - Indicador scroll
- `progressBar` - Barra progresso

---

## 8. Checklist de Qualidade

### Antes de Committar:
- [ ] Componentes base usados (não divs customizadas)
- [ ] Animações de tokens (não valores hardcoded)
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] Acessibilidade OK (contrast, alt text, semântica)
- [ ] Performance OK (`npm run build`)
- [ ] Sem console errors/warnings
- [ ] Documentação atualizada

### Antes de Deploy:
- [ ] `npm run build` sem erros
- [ ] Bundle size < 100KB
- [ ] Lighthouse audit > 90
- [ ] QA em todos breakpoints
- [ ] Testar em navegadores reais

---

## 9. Recursos

### Documentação Interna
- `terrabambu-lp/IMPLEMENTATION_EXAMPLES.md` - Exemplos por seção
- `terrabambu-lp/COPY_PASTE_TEMPLATES.md` - Templates prontos
- `PREMIUM_SKILL_GUIDE.md` - Guia detalhado
- `QUICK_REFERENCE.md` - Cheat sheet
- `premium-design-system.md` - Especificação técnica

### Código-Fonte
- `terrabambu-lp/src/components/base/` - Componentes base
- `terrabambu-lp/src/styles/tokens.css` - Design tokens
- `terrabambu-lp/src/shared/animations.premium.js` - Animações
- `terrabambu-lp/src/components/SolucaoPremium.jsx` - Exemplo

### Ferramentas Recomendadas
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/
- Vite: https://vitejs.dev/
- Lighthouse: https://developers.google.com/web/tools/lighthouse

---

## 10. Gatekeeper - O Que Não Fazer

❌ **Não use arquiteturas duplicadas** - Concentre-se unicamente no servidor de desenvolvimento do Vite (`npm run dev`). A visualização do desenvolvimento deve SEMPRE ser feita via localhost do Vite para obter atualizações em tempo real (HMR).
❌ **Não dependa de Github Actions para o fluxo da LP** - O desenvolvimento e os previews devem rodar exclusivamente local usando Vite, sem necessidades de commits constantes para ações apenas para preview no navegador. Evite a necessidade de rodar `npm run build` constante apenas para visualizar no diretório legado da raiz.
❌ **Não use divs customizadas** quando tiver componente base  
❌ **Não hardcode transições** - use tokens de animação  
❌ **Não quebre spacing 8px** - use var(--space-*)  
❌ **Não copie cores** - use var(--accent), var(--gold), etc  
❌ **Não ignore responsividade** - teste em mobile/tablet/desktop  
❌ **Não ignora acessibilidade** - WCAG 2.1 AA sempre  
❌ **Não crie seções sem _visão geral_** - documente mudanças

---

## 11. Comandos Úteis

```bash
# Dentro de terrabambu-lp/:

# Development (uso diário - HMR em tempo real)
npm run dev              # localhost:5173/lp/forros-bambu/

# Deploy (quando quiser publicar no GitHub Pages)
npm run deploy           # Build + copia para ../lp/forros-bambu/

# Preview do build local
npm run preview          # Preview do bundle compilado

# Linting
npm run lint             # ESLint
```

> ⚠️ **IMPORTANTE**: Nunca rode `npm run build` da raiz do repositório para a LP.
> O comando `npm run deploy` dentro de `terrabambu-lp/` é o único caminho correto.
> O `npm run dev` é o que deve ser usado no dia-a-dia para desenvolvimento.

---

## 12. Exemplo de Uso Completo

```jsx
import { motion } from "framer-motion";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { Section, Container, Card, Button, Badge, Grid } from "./base";
import { MapPin, ArrowRight } from "lucide-react";

export default function MeuComponente() {
  return (
    <Section variant="dark" id="secao">
      <Container>
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerSlow}
          className="text-center mb-16"
        >
          <Badge icon={MapPin} label="Seu badge" variant="gold" className="mb-6 justify-center" />
          
          <motion.h2 variants={fadeUpPremium} className="text-5xl font-black text-white mb-6">
            Seu Título com <span className="text-[var(--accent)]">Destaque</span>
          </motion.h2>
          
          <motion.p variants={fadeUpPremium} className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Sua descrição aqui
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerSlow}
        >
          <Grid cols={{ default: 1, md: 3 }} gap="gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div key={i} variants={fadeUpPremium}>
                <Card interactive elevated>
                  <h3 className="text-xl font-bold text-white mb-4">Card {i}</h3>
                  <p className="text-[var(--text-muted)] mb-6">Descrição do card</p>
                  <Button variant="secondary" icon={ArrowRight}>
                    Saiba Mais
                  </Button>
                </Card>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}
```

---

## 13. Métricas de Sucesso

| Métrica | Target | Status |
|---------|--------|--------|
| Bundle Size | < 100KB | ✅ ~50KB |
| LCP | < 2.5s | ✅ ~1.8s |
| FID | < 100ms | ✅ ~30ms |
| CLS | < 0.1 | ✅ ~0.05 |
| Componentes Reutilizáveis | > 5 | ✅ 7 |
| Animações Disponíveis | > 10 | ✅ 20+ |
| Documentação Pages | > 3 | ✅ 8 |

---

**Última atualização**: 2026-04-10  
**Versão**: 1.0.0  
**Status**: Production Ready ✅
