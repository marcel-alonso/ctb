# 🔮 ROADMAP DE MELHORIAS - Conexão Terra Bambu

**Data**: Fevereiro 2026  
**Versão Atual**: 2.1  
**Status Projeto**: ✅ Produção (Melhorias Identificadas)

---

## 📊 Prioritização de Melhorias

```
IMPACTO
   ↑
   │  ┌──────────────────────────────────┐
   │  │ 🔴 CRÍTICO                       │
   │  │ • Testes automatizados           │
   │  │ • Rate limiting                  │
   │  │ • CSRF protection                │
   │  │ • Sanitização HTML/XSS           │
   │  └──────────────────────────────────┘
   │
   │  ┌──────────────────────────────────┐
   │  │ 🟡 IMPORTANTE                    │
   │  │ • Service Worker + offline       │
   │  │ • Caching estratégico            │
   │  │ • Analytics integrado            │
   │  │ • Dark mode                      │
   │  │ • Busca de posts                 │
   │  └──────────────────────────────────┘
   │
   │  ┌──────────────────────────────────┐
   │  │ 🟢 NICE-TO-HAVE                  │
   │  │ • Comentários (Disqus)           │
   │  │ • Email newsletter               │
   │  │ • Social media scheduling        │
   │  │ • Multi-idioma                   │
   │  │ • E-commerce                     │
   │  └──────────────────────────────────┘
   │
   └─────────────────────────────────→ TEMPO/ESFORÇO
```

---

## 🔴 CRÍTICO (Sprint 1-2)

### 1. Testes Automatizados

**Problema**: Sem cobertura de testes  
**Impacto**: Mudanças futuras podem quebrar funcionalidades  
**Esforço**: 1-2 sprints  
**Custo**: $0 (ferramentas open-source)

**Implementação**:
```bash
# 1. Instalar dependências
npm install --save-dev jest @testing-library/dom @testing-library/jest-dom

# 2. Configurar jest.config.js
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {},
  collectCoverageFrom: [
    'js/**/*.js',
    'scripts/**/*.mjs',
    '!scripts/templates/**'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};

# 3. Criar testes
mkdir tests/
touch tests/blog.test.js
touch tests/admin.test.js
touch tests/build.test.js

# 4. Adicionar script
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage"
```

**Testes Prioritários**:
- ✅ Validação de frontmatter (build-blog.mjs)
- ✅ Carregamento de posts (blog.js)
- ✅ Filtros e paginação (blog.js)
- ✅ Validação de formulário (admin.js)
- ✅ GitHub API calls (admin.js)

---

### 2. Rate Limiting & Segurança

**Problema**: Sem proteção contra força bruta  
**Impacto**: Abuso de API GitHub, token exposto  
**Esforço**: 3-5 dias  
**Custo**: $0 (lógica local)

**Implementação**:
```javascript
// admin/js/security.js
class RateLimiter {
    constructor(maxAttempts = 5, timeWindow = 60000) {
        this.maxAttempts = maxAttempts;
        this.timeWindow = timeWindow;
        this.attempts = new Map();
    }
    
    isAllowed(key) {
        const now = Date.now();
        const userAttempts = this.attempts.get(key) || [];
        
        // Remove tentativas antigas
        const recentAttempts = userAttempts.filter(
            time => now - time < this.timeWindow
        );
        
        if (recentAttempts.length >= this.maxAttempts) {
            return false;
        }
        
        recentAttempts.push(now);
        this.attempts.set(key, recentAttempts);
        return true;
    }
    
    reset(key) {
        this.attempts.delete(key);
    }
}

// Uso
const limiter = new RateLimiter(5, 60000); // 5 tentativas por minuto

async function savePost() {
    if (!limiter.isAllowed('post-save')) {
        showError('Muitas tentativas. Aguarde 1 minuto.');
        return;
    }
    // ... continuar com salvamento
}
```

**Checklist de Segurança**:
- [ ] Rate limiting em POST/PUT/DELETE
- [ ] Validação de CSRF token
- [ ] Sanitização de HTML (DOMPurify)
- [ ] Validação de entrada (regex)
- [ ] Escaping de output
- [ ] HTTPS forçado (já temos)
- [ ] CSP headers
- [ ] SameSite cookies

---

### 3. CSRF Protection

**Problema**: Vulnerabilidade CSRF em formulários  
**Impacto**: Requisições não autorizadas em nome do usuário  
**Esforço**: 2-3 dias  
**Custo**: $0

**Implementação**:
```javascript
// Gerar token CSRF
function generateCSRFToken() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Armazenar em sessionStorage
sessionStorage.setItem('csrf-token', generateCSRFToken());

// Incluir em requisições
async function apiCall(endpoint, options = {}) {
    const token = sessionStorage.getItem('csrf-token');
    
    return fetch(endpoint, {
        ...options,
        headers: {
            ...options.headers,
            'X-CSRF-Token': token
        }
    });
}

// Validar no servidor (backend se houver)
// Por enquanto, apenas validar que token existe
if (!headers['x-csrf-token']) {
    return response.status(403).json({ error: 'Invalid CSRF token' });
}
```

---

### 4. Sanitização de HTML (XSS Prevention)

**Problema**: Posts Markdown podem conter HTML malicioso  
**Impacto**: Injeção de scripts maliciosos  
**Esforço**: 1 dia  
**Custo**: $0 (DOMPurify)

**Implementação**:
```bash
# 1. Instalar DOMPurify
npm install dompurify
```

```javascript
// scripts/build-blog.mjs
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

// Configurar window para Node.js
const window = new JSDOM('').window;
const purify = DOMPurify(window);

// Sanitizar HTML do post
const sanitizedContent = purify.sanitize(
    marked.parse(markdown),
    {
        ALLOWED_TAGS: [
            'b', 'i', 'strong', 'em', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'ul', 'ol', 'li', 'a', 'img', 'blockquote', 'code', 'pre', 'table',
            'thead', 'tbody', 'tr', 'th', 'td', 'hr', 'br'
        ],
        ALLOWED_ATTR: [
            'href', 'title', 'target', 'rel', 'src', 'alt', 'width', 'height'
        ],
        KEEP_CONTENT: true
    }
);
```

---

## 🟡 IMPORTANTE (Sprint 3-4)

### 5. Service Worker + Offline Mode

**Problema**: Sem funcionalidade offline  
**Impacto**: Usuários não conseguem ler blogs sem conexão  
**Esforço**: 2-3 sprints  
**Custo**: $0

**Implementação Básica**:
```javascript
// sw.js
const CACHE_NAME = 'ctb-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/main.js',
    '/js/blog.js',
    '/posts.json',
    '/assets/images/logo_only.png',
    '/assets/images/hero.webp'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
            .catch(() => caches.match('/offline.html'))
    );
});

// main.js - Registrar service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('SW registered'))
        .catch(err => console.log('SW registration failed'));
}
```

---

### 6. Caching Estratégico

**Problema**: posts.json carregado em cada visita  
**Impacto**: Tráfico desnecessário, páginas mais lentas  
**Esforço**: 2-3 dias  
**Custo**: $0

**Estratégia Cache-First para Imagens**:
```javascript
// Imagens: Cache-first (com revalidação)
const imageCache = caches.open('images-v1');

self.addEventListener('fetch', event => {
    if (event.request.destination === 'image') {
        event.respondWith(
            imageCache
                .then(cache => {
                    return cache.match(event.request)
                        .then(response => {
                            if (response) {
                                // Atualizar cache em background
                                fetch(event.request)
                                    .then(r => cache.put(event.request, r));
                                return response;
                            }
                            return fetch(event.request)
                                .then(r => {
                                    cache.put(event.request, r.clone());
                                    return r;
                                });
                        });
                })
        );
    }
});

// posts.json: Stale-while-revalidate (30 min)
const CACHE_DURATION = 30 * 60 * 1000;
let postsCache = {
    data: null,
    timestamp: 0
};

async function fetchPosts() {
    const now = Date.now();
    
    if (postsCache.data && now - postsCache.timestamp < CACHE_DURATION) {
        return postsCache.data; // Usar cache
    }
    
    const response = await fetch('/posts.json');
    const data = await response.json();
    
    postsCache = { data, timestamp: now };
    return data;
}
```

---

### 7. Analytics Integrado

**Problema**: Sem dados de visitantes/comportamento  
**Impacto**: Impossível medir sucesso ou otimizar  
**Esforço**: 1 dia  
**Custo**: Grátis (Plausible) ou $0 (Fathom lite)

**Implementação - Plausible Analytics**:
```html
<!-- index.html -->
<script defer data-domain="conexaoterrabambu.com.br" 
        src="https://plausible.io/js/plausible.js"></script>

<!-- Rastrear eventos customizados -->
<script>
    // Link clicado para WhatsApp
    document.querySelector('.whatsapp-float').addEventListener('click', () => {
        plausible('WhatsApp Click');
    });
    
    // Post visitado
    document.addEventListener('DOMContentLoaded', () => {
        const slug = window.location.pathname.split('/blog/')[1];
        if (slug) {
            plausible('Post Viewed', { props: { slug } });
        }
    });
</script>
```

---

### 8. Dark Mode

**Problema**: Sem opção de tema escuro  
**Impacto**: Usuários em modo noturno sofrem  
**Esforço**: 1-2 dias  
**Custo**: $0

**Implementação**:
```javascript
// js/theme.js
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }
    
    init() {
        this.applyTheme(this.theme);
        this.setupToggle();
        this.watchSystemPreference();
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    
    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.theme);
    }
    
    setupToggle() {
        const button = document.querySelector('.theme-toggle');
        button?.addEventListener('click', () => this.toggle());
    }
    
    watchSystemPreference() {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        media.addEventListener('change', e => {
            const newTheme = e.matches ? 'dark' : 'light';
            this.applyTheme(newTheme);
        });
    }
}

// CSS
:root {
    --bg: #fff;
    --text: #000;
    --border: #ddd;
}

[data-theme="dark"] {
    --bg: #1a1a1a;
    --text: #fff;
    --border: #333;
}
```

---

### 9. Busca de Posts

**Problema**: Sem funcionalidade de busca  
**Impacto**: Difícil encontrar posts específicos  
**Esforço**: 2-3 dias  
**Custo**: $0 (minisearch)

**Implementação**:
```bash
npm install minisearch
```

```javascript
// js/search.js
import MiniSearch from 'minisearch';

let miniSearch;

async function initSearch() {
    const posts = await fetch('/posts.json').then(r => r.json());
    
    miniSearch = new MiniSearch({
        fields: ['title', 'excerpt', 'content'],
        storeFields: ['title', 'slug', 'date', 'excerpt']
    });
    
    miniSearch.addAll(posts);
}

function search(query) {
    return miniSearch.search(query, {
        prefix: true,
        fuzzy: 0.2
    });
}

// HTML
<input id="search-input" placeholder="Buscar posts...">
<div id="search-results"></div>

// Event listener
document.querySelector('#search-input').addEventListener('input', e => {
    if (e.target.value.length < 2) return;
    
    const results = search(e.target.value);
    renderResults(results);
});
```

---

## 🟢 NICE-TO-HAVE (Sprint 5+)

### 10. Sistema de Comentários

**Ferramenta Recomendada**: Utterances (grátis, baseado em GitHub Issues)

```html
<!-- Adicionar ao final de cada post -->
<script src="https://utteranc.es/client.js"
    repo="marcel-alonso/ctb"
    issue-term="pathname"
    label="comments"
    theme="github-light"
    crossorigin="anonymous"
    async>
</script>
```

---

### 11. Newsletter/Email

**Ferramenta**: Brevo (antigo Sendinblue - grátis até 300 emails)

```html
<!-- Form integrado -->
<form id="newsletter-form">
    <input type="email" name="email" placeholder="Seu email">
    <button type="submit">Inscrever</button>
</form>

<script>
    document.querySelector('#newsletter-form')
        .addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            
            // Integrar com Brevo API
            await fetch('https://api.brevo.com/v3/contacts', {
                method: 'POST',
                headers: {
                    'api-key': 'YOUR_BREVO_KEY',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    listIds: [1],
                    updateEnabled: true
                })
            });
        });
</script>
```

---

### 12. Multi-Idioma (i18n)

**Ferramenta**: i18next

```bash
npm install i18next
```

```javascript
// locales/pt.json
{
    "header": {
        "home": "Início",
        "blog": "Blog",
        "contact": "Contato"
    }
}

// locales/en.json
{
    "header": {
        "home": "Home",
        "blog": "Blog",
        "contact": "Contact"
    }
}

// js/i18n.js
import i18next from 'i18next';

await i18next.init({
    lng: 'pt',
    fallbackLng: 'en',
    resources: {
        pt: { translation: ptTranslations },
        en: { translation: enTranslations }
    }
});

// HTML
<h1 data-i18n="header.home"></h1>

// JavaScript
i18next.t('header.home')
```

---

### 13. E-commerce (Shopify)

**Caso de Uso**: Vender produtos (bambu, acessórios, cursos)

```javascript
// Integração com Shopify Buy Button
<script src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"></script>

<div id="product-component-1234567890"></div>

<script>
    ShopifyBuy.UI.onReady(client => {
        const component = ShopifyBuy.UI.ProductSet({
            id: [productId],
            node: document.getElementById('product-component-1234567890'),
            options: {
                product: {
                    styles: { button: { color: '#4a7c59' } }
                }
            }
        });
        
        ShopifyBuy.UI.createComponent('ProductSet', {
            id: [productId],
            node: document.getElementById('product-component-1234567890')
        });
    });
</script>
```

---

## 📈 Cronograma de Implementação

```
FEVEREIRO 2026       MARÇO 2026          ABRIL 2026
├─ Week 1-2:         ├─ Week 5-6:        ├─ Week 9-10:
│  Testes (Jest)     │  Caching          │  Service Worker
│  Rate Limiting     │  Dark Mode        │  Search
│  CSRF              │  Analytics        │  Melhorias SEO
│  Sanitização       │                   │
│                    │  Week 7-8:        │  Week 11-12:
│  Week 3-4:         │  Comments         │  Roadmap Futuro
│  Code Review       │  Newsletter       │  Planning
│  Bugfixes          │  i18n prep        │  Tech Debt
│  Documentation     │                   │
```

---

## 💰 Investimento Requerido

| Item | Custo | ROI | Prioridade |
|------|-------|-----|-----------|
| Testes Automatizados | $0 | Alto | 🔴 Crítico |
| Rate Limiting | $0 | Alto | 🔴 Crítico |
| CSRF Protection | $0 | Alto | 🔴 Crítico |
| Sanitização XSS | $0 | Alto | 🔴 Crítico |
| Service Worker | $0 | Médio | 🟡 Importante |
| Caching | $0 | Alto | 🟡 Importante |
| Analytics (Plausible) | $9/mês | Alto | 🟡 Importante |
| Dark Mode | $0 | Baixo | 🟡 Importante |
| Search | $0 | Médio | 🟡 Importante |
| Comentários (Utterances) | $0 | Médio | 🟢 Nice |
| Email (Brevo) | $0 (free tier) | Médio | 🟢 Nice |
| Multi-idioma | $0 | Baixo | 🟢 Nice |
| E-commerce (Shopify) | $29/mês | Alto | 🟢 Nice |
| | | | |
| **TOTAL** | **~$38/mês** | **Alto** | - |

---

## ✅ Checklist de Implementação

### Sprint 1 (Segurança)
- [ ] Testes com Jest (cobertura >70%)
- [ ] Rate limiting implementado
- [ ] CSRF tokens adicionados
- [ ] Sanitização de HTML (DOMPurify)
- [ ] Code review completo

### Sprint 2 (Performance)
- [ ] Service Worker configurado
- [ ] Cache estratégico
- [ ] Analytics (Plausible)
- [ ] Dark mode implementado
- [ ] Busca de posts funcional

### Sprint 3 (Funcionalidades)
- [ ] Sistema de comentários (Utterances)
- [ ] Newsletter integrado
- [ ] Multi-idioma basics
- [ ] Imagens em AVIF format
- [ ] WebP fallback completo

### Sprint 4+ (Longo Prazo)
- [ ] Migração para Astro/Next.js
- [ ] Banco de dados (Supabase)
- [ ] E-commerce (Shopify)
- [ ] Mobile app
- [ ] Analytics avançado

---

## 🎯 KPIs de Sucesso

| Métrica | Atual | Target | Timeline |
|---------|-------|--------|----------|
| Lighthouse Score | 90 | 95+ | Sprint 2 |
| Test Coverage | 0% | 80%+ | Sprint 1 |
| Page Load (3G) | 2.5s | <2s | Sprint 2 |
| Posts/Month | 3 | 8+ | Sprint 3 |
| Monthly Visitors | N/A | 1000+ | Sprint 4 |
| Bounce Rate | N/A | <40% | Sprint 4 |
| Time on Page | N/A | >2min | Sprint 4 |
| Newsletter Subs | 0 | 100+ | Sprint 3 |

---

## 📞 Próximos Passos

1. **Imediato**: Priorizar segurança (Crítico)
2. **Semana 1**: Implementar testes
3. **Semana 2-3**: Rate limiting e CSRF
4. **Semana 4**: Sanitização HTML
5. **Semana 5**: Code review final
6. **Semana 6-8**: Performance (cache, SW)
7. **Semana 9+**: Features (comentários, search)

---

**Documento Criado**: Fevereiro 2026  
**Responsável**: Equipe CTB  
**Próxima Revisão**: Março 2026
