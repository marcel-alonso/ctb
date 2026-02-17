# 🗺️ LOCALIZAÇÃO DAS LANDING PAGES - Guia para API

**Projeto:** Conexão Terra Bambu  
**Data:** 16 de Fevereiro de 2026

---

## 📍 LOCALIZAÇÃO EXATA DAS LPs

### LP PRINCIPAL (Roteador)
```
📁 Raiz do Repositório
└── 📄 lp/
    └── 📄 forros-bambu/
        └── 📄 index.html ⭐ ROTEADOR INTELIGENTE
```

**Caminho Completo:**
```
lp/forros-bambu/index.html
```

**URL de Acesso:**
```
https://conexaoterrabambu.com.br/lp/forros-bambu/
```

---

## 📱 LP MOBILE

```
📁 Raiz do Repositório
└── 📁 lp/
    └── 📁 forros-bambu/
        ├── 📄 index-mobile.html ⭐ VERSÃO MOBILE
        ├── 📁 css/
        │   └── forros-bambu-lp-mobile.css
        └── 📁 assets/ (imagens)
```

**Caminho Completo:**
```
lp/forros-bambu/index-mobile.html
```

**URL de Acesso:**
```
https://conexaoterrabambu.com.br/lp/forros-bambu/index-mobile.html
```

**Arquivo CSS Associado:**
```
lp/forros-bambu/css/forros-bambu-lp-mobile.css
```

---

## 🖥️ LP DESKTOP

```
📁 Raiz do Repositório
└── 📁 lp/
    └── 📁 forros-bambu/
        ├── 📄 index-desktop.html ⭐ VERSÃO DESKTOP
        ├── 📁 css/
        │   └── forros-bambu-lp.css
        └── 📁 assets/ (imagens)
```

**Caminho Completo:**
```
lp/forros-bambu/index-desktop.html
```

**URL de Acesso:**
```
https://conexaoterrabambu.com.br/lp/forros-bambu/index-desktop.html
```

**Arquivo CSS Associado:**
```
lp/forros-bambu/css/forros-bambu-lp.css
```

---

## 🗂️ ESTRUTURA COMPLETA DA PASTA

```
lp/
└── forros-bambu/
    ├── index.html                          (ROTEADOR - detecta device)
    ├── index-mobile.html                   (VERSÃO MOBILE - 768px max)
    ├── index-desktop.html                  (VERSÃO DESKTOP - 768px+)
    ├── css/
    │   ├── forros-bambu-lp.css            (Desktop styles)
    │   ├── forros-bambu-lp-mobile.css     (Mobile styles)
    │   └── (outros arquivos CSS)
    └── assets/ (imagens e recursos)
```

---

## 🔗 CAMINHOS PARA USAR NA API GitHub

### Via GitHub Raw Content

#### LP Roteador
```
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index.html
```

#### LP Mobile
```
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html
```

#### LP Desktop
```
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html
```

#### CSS Mobile
```
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css
```

#### CSS Desktop
```
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css
```

---

## 📥 COMO PUXAR VIA API GitHub

### 1. Usando GitHub API (REST)

```bash
# Puxar LP Mobile
curl -H "Authorization: token YOUR_TOKEN" \
  https://api.github.com/repos/marcel-alonso/ctb/contents/lp/forros-bambu/index-mobile.html

# Puxar LP Desktop
curl -H "Authorization: token YOUR_TOKEN" \
  https://api.github.com/repos/marcel-alonso/ctb/contents/lp/forros-bambu/index-desktop.html

# Puxar CSS Mobile
curl -H "Authorization: token YOUR_TOKEN" \
  https://api.github.com/repos/marcel-alonso/ctb/contents/lp/forros-bambu/css/forros-bambu-lp-mobile.css

# Puxar CSS Desktop
curl -H "Authorization: token YOUR_TOKEN" \
  https://api.github.com/repos/marcel-alonso/ctb/contents/lp/forros-bambu/css/forros-bambu-lp.css
```

### 2. Usando GitHub Raw (mais simples)

```bash
# Puxar LP Mobile
curl https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html

# Puxar LP Desktop
curl https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html

# Puxar CSS Mobile
curl https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css

# Puxar CSS Desktop
curl https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css
```

### 3. Em JavaScript/Node.js

```javascript
// Puxar LP Mobile
const mobileLp = await fetch(
  'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html'
).then(r => r.text());

// Puxar LP Desktop
const desktopLp = await fetch(
  'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html'
).then(r => r.text());

// Puxar CSS Mobile
const mobileCss = await fetch(
  'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css'
).then(r => r.text());

// Puxar CSS Desktop
const desktopCss = await fetch(
  'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css'
).then(r => r.text());
```

---

## 🎯 RESUMO RÁPIDO

### 3 Arquivos Principais

| Arquivo | Caminho | Tamanho Aprox | Função |
|---------|---------|---------------|--------|
| **Roteador** | `lp/forros-bambu/index.html` | ~150 linhas | Detecta device e redireciona |
| **Mobile** | `lp/forros-bambu/index-mobile.html` | ~500 linhas | LP otimizada para móvel |
| **Desktop** | `lp/forros-bambu/index-desktop.html` | ~800 linhas | LP completa para desktop |

### 2 Arquivos CSS

| Arquivo | Caminho | Função |
|---------|---------|--------|
| **Mobile CSS** | `lp/forros-bambu/css/forros-bambu-lp-mobile.css` | Estilos móvel |
| **Desktop CSS** | `lp/forros-bambu/css/forros-bambu-lp.css` | Estilos desktop |

---

## 🚀 INSTRUÇÕES PARA CHATGPT AGENT

### Copie e Cole Isso Para o Agente

```
As Landing Pages estão localizadas em:

📱 MOBILE LP:
  Arquivo: lp/forros-bambu/index-mobile.html
  CSS: lp/forros-bambu/css/forros-bambu-lp-mobile.css
  Raw URL: https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html

🖥️ DESKTOP LP:
  Arquivo: lp/forros-bambu/index-desktop.html
  CSS: lp/forros-bambu/css/forros-bambu-lp.css
  Raw URL: https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html

🤖 ROTEADOR:
  Arquivo: lp/forros-bambu/index.html
  Função: Detecta automaticamente mobile vs desktop e redireciona

Todos os arquivos podem ser puxados via GitHub Raw API.
```

---

## 📊 ESTRUTURA VISUAL DO REPOSITÓRIO

```
ctb (Raiz)
├── 📁 lp/
│   └── 📁 forros-bambu/                    👈 AQUI ESTÃO AS LPs
│       ├── index.html                      ← Roteador
│       ├── index-mobile.html               ← Mobile LP ⭐
│       ├── index-desktop.html              ← Desktop LP ⭐
│       ├── 📁 css/
│       │   ├── forros-bambu-lp.css
│       │   ├── forros-bambu-lp-mobile.css
│       │   └── (outros)
│       ├── 📁 assets/
│       │   └── (imagens)
│       └── 📁 videos/
│           └── (vídeos)
│
├── 📁 blog/
├── 📁 admin/
├── 📁 css/
├── 📁 js/
├── 📁 scripts/
├── index.html (página principal)
├── README.md
└── (muitos outros arquivos)
```

---

## ✅ CHECKLIST PARA O AGENTE

- [ ] Acessar `lp/forros-bambu/index-mobile.html`
- [ ] Acessar `lp/forros-bambu/index-desktop.html`
- [ ] Carregar `lp/forros-bambu/css/forros-bambu-lp-mobile.css`
- [ ] Carregar `lp/forros-bambu/css/forros-bambu-lp.css`
- [ ] Verificar roteador em `lp/forros-bambu/index.html`
- [ ] Processar conteúdo
- [ ] Retornar para análise

---

## 🔍 FILTRO PARA BUSCA NO REPOSITÓRIO

Se o agente estiver usando Git ou busca local:

```bash
# Encontrar LPs
find . -path "*/lp/forros-bambu/*.html" -type f

# Encontrar CSS das LPs
find . -path "*/lp/forros-bambu/css/*.css" -type f

# Listar tudo na pasta LP
ls -la lp/forros-bambu/
```

---

## 🎯 PARA COLAR DIRETO NO PROMPT DO AGENTE

```
LOCALIZAÇÃO DAS LANDING PAGES:

MOBILE: lp/forros-bambu/index-mobile.html
DESKTOP: lp/forros-bambu/index-desktop.html
ROTEADOR: lp/forros-bambu/index.html

CSS MOBILE: lp/forros-bambu/css/forros-bambu-lp-mobile.css
CSS DESKTOP: lp/forros-bambu/css/forros-bambu-lp.css

URLs para puxar via API:
- https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html
- https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html
- https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css
- https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css
```

---

**Criado em:** 16 de Fevereiro de 2026  
**Propósito:** Facilitar acesso via API para agentes
