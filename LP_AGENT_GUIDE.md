# 🎯 GUIA COMPLETO - LOCALIZAÇÃO DAS LPs PARA CHATGPT AGENT

**Objetivo:** Ajudar o agente ChatGPT a encontrar e puxar as Landing Pages via API  
**Data:** 16 de Fevereiro de 2026

---

## 📌 O ESSENCIAL (30 segundos)

### Paths das LPs

```
📱 Mobile:  lp/forros-bambu/index-mobile.html
🖥️  Desktop: lp/forros-bambu/index-desktop.html
```

### URLs para Puxar via API

```
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html
```

Pronto! 🚀

---

## 📚 DOCUMENTOS CRIADOS

Criei **3 documentos** para facilitar:

### 1. 📍 **LOCALIZACAO_LPS_API.md** (Detalhado)
- Estrutura completa do diretório
- Caminhos relativos e absolutos
- URLs de acesso
- Exemplos de API calls
- Instruções para o agente

### 2. ⚡ **LP_PATHS_QUICK.md** (Rápido)
- TL;DR com tudo em uma página
- Árvore de diretórios
- Checklist para o agente
- Mais conciso possível

### 3. 🚀 **LP_API_EXAMPLES.md** (Código)
- Exemplos em 6 linguagens:
  - JavaScript/Node.js
  - Python
  - Bash/Curl
  - Browser Fetch API
  - GitHub API
  - PowerShell
- Código pronto para copiar e usar

---

## 🗺️ ESTRUTURA DO REPOSITÓRIO

```
📁 ctb/
├── 📁 lp/forros-bambu/        ⭐ AQUI ESTÃO AS LPs
│   ├── 📄 index.html           (Roteador - detecta device)
│   ├── 📄 index-mobile.html    (📱 LP Mobile)
│   ├── 📄 index-desktop.html   (🖥️  LP Desktop)
│   ├── 📁 css/
│   │   ├── forros-bambu-lp-mobile.css
│   │   └── forros-bambu-lp.css
│   └── 📁 assets/
│       └── (imagens)
│
├── 📁 admin/
├── 📁 blog/
├── 📁 css/
├── 📁 js/
├── 📁 scripts/
└── 📄 index.html (homepage)
```

---

## 🔗 TODOS OS CAMINHOS

### Arquivos HTML

| Arquivo | Caminho | Função |
|---------|---------|--------|
| Roteador | `lp/forros-bambu/index.html` | Detecta mobile vs desktop |
| Mobile LP | `lp/forros-bambu/index-mobile.html` | LP otimizada para móvel |
| Desktop LP | `lp/forros-bambu/index-desktop.html` | LP otimizada para desktop |

### Arquivos CSS

| Arquivo | Caminho |
|---------|---------|
| Mobile CSS | `lp/forros-bambu/css/forros-bambu-lp-mobile.css` |
| Desktop CSS | `lp/forros-bambu/css/forros-bambu-lp.css` |

### URLs GitHub Raw (Direto)

```
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index.html
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css
```

---

## 💻 COMANDOS PARA USAR AGORA

### Se o agente usa JavaScript/Node.js

```javascript
const fetch = require('node-fetch'); // ou usar fetch nativo

async function getLPs() {
  const mobileLP = await fetch('https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html').then(r => r.text());
  const desktopLP = await fetch('https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html').then(r => r.text());
  return { mobileLP, desktopLP };
}

getLPs().then(console.log);
```

### Se o agente usa Python

```python
import requests

urls = {
    'mobile': 'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html',
    'desktop': 'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html'
}

for name, url in urls.items():
    content = requests.get(url).text
    print(f'{name}: {len(content)} chars')
```

### Se o agente usa Curl

```bash
curl https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html -o mobile.html
curl https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html -o desktop.html
```

---

## 🤖 INSTRUÇÃO PARA COPIAR E COLAR NO CHATGPT AGENT

```
A seguinte informação é sobre um projeto web que preciso que você analise.

As Landing Pages estão localizadas em:

DIRETÓRIO: lp/forros-bambu/

ARQUIVOS PRINCIPAIS:
1. index-mobile.html   → LP otimizada para mobile (< 768px)
2. index-desktop.html  → LP otimizada para desktop (> 768px)
3. index.html          → Roteador que detecta dispositivo

CSS RELACIONADO:
1. css/forros-bambu-lp-mobile.css   → Estilos mobile
2. css/forros-bambu-lp.css          → Estilos desktop

COMO PUXAR VIA API:
Use estas URLs (sem autenticação):
- https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html
- https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html
- https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css
- https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css

EXEMPLO EM JAVASCRIPT:
const mobile = await fetch('https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html').then(r => r.text());
const desktop = await fetch('https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html').then(r => r.text());

Agora, por favor:
[DESCREVA O QUE VOCÊ QUER QUE O AGENTE FAÇA]
```

---

## ✅ CHECKLIST PARA O AGENTE

- [ ] Navegar para `lp/forros-bambu/`
- [ ] Encontrar `index-mobile.html`
- [ ] Encontrar `index-desktop.html`
- [ ] Verificar `index.html` (roteador)
- [ ] Localizar `css/forros-bambu-lp-mobile.css`
- [ ] Localizar `css/forros-bambu-lp.css`
- [ ] Puxar via GitHub Raw API
- [ ] Processar conteúdo
- [ ] Retornar resultado

---

## 📊 INFORMAÇÕES ADICIONAIS

### Tamanho dos Arquivos

| Arquivo | Linhas Aprox | Tamanho |
|---------|-------------|--------|
| index-mobile.html | 500 | ~20 KB |
| index-desktop.html | 800 | ~35 KB |
| forros-bambu-lp-mobile.css | 300 | ~12 KB |
| forros-bambu-lp.css | 500 | ~20 KB |

### O Que Cada Versão Tem

#### Mobile Version
- Acordeão de modelos
- Formulário simplificado (campos essenciais)
- FAQ compacto
- Testimoniais em carrossel
- Otimizado para < 768px

#### Desktop Version
- Tabela comparativa de modelos
- Formulário completo (10 campos)
- Hero section expandida
- Grid de cards
- FAQ expandida
- Otimizado para > 768px

### O Roteador
- Detecta user agent
- Detecta tamanho de tela
- Redireciona automaticamente
- Fallback se JavaScript desativado
- Preserva SEO em ambas versões

---

## 🚀 PRÓXIMOS PASSOS

1. **Abra um dos 3 documentos criados:**
   - `LOCALIZACAO_LPS_API.md` (completo)
   - `LP_PATHS_QUICK.md` (rápido)
   - `LP_API_EXAMPLES.md` (código)

2. **Copie a instrução acima**

3. **Passe para o agente ChatGPT**

4. **Pronto!** O agente conseguirá encontrar as LPs

---

## 📞 DÚVIDAS?

### "Onde exatamente estão as LPs?"
```
lp/forros-bambu/
├── index-mobile.html
└── index-desktop.html
```

### "Como puxar?"
```
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html
```

### "E os estilos CSS?"
```
lp/forros-bambu/css/forros-bambu-lp-mobile.css
lp/forros-bambu/css/forros-bambu-lp.css
```

### "Qual é a diferença entre as duas?"
```
Mobile:  < 768px, formulário simplificado, acordeão
Desktop: > 768px, formulário completo, tabelas
```

---

**Criado em:** 16 de Fevereiro de 2026  
**Objetivo:** Facilitar acesso das LPs para análise via agente  
**Status:** ✅ Pronto para usar
