# 🗺️ LOCALIZAÇÃO DAS LANDING PAGES - Guia para API

**Projeto:** Conexão Terra Bambu  
**Data:** 25 de Fevereiro de 2026

---

## 📍 Localização da LP de Forros de Bambu

A landing page de *Forros de Bambu* agora é entregue como **um único arquivo responsivo**. Todo o conteúdo e layout se adaptam automaticamente conforme a largura da tela — não existem mais versões separadas para desktop ou mobile.

```
📁 Raiz do Repositório
└── 📄 lp/
    └── 📄 forros-bambu/
        └── 📄 index.html   ← Página única responsiva
```

**URL de Acesso:**
```
https://conexaoterrabambu.com.br/lp/forros-bambu/
```

### Arquivos CSS associados

- `lp/forros-bambu/css/forros-bambu-lp.css`  
  (estilos principais com media queries)
- `lp/forros-bambu/css/forros-bambu-lp-mobile.css`  
  (regras adicionais encapsuladas em `@media (max-width:768px)`)

---

## 🔗 Acessando via GitHub Raw

```bash
curl https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index.html
curl https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css
curl https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css
```

## 📄 Exemplo em JavaScript/Node.js

```javascript
const lpHtml = await fetch(
  'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index.html'
).then(r => r.text());

const lpCss = await fetch(
  'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css'
).then(r => r.text());
```

---

## 📂 Estrutura simplificada do repositório

```
ctb/
├── lp/
│   └── forros-bambu/
│       ├── index.html
│       ├── css/
│       │   ├── forros-bambu-lp.css
│       │   └── forros-bambu-lp-mobile.css
│       └── assets/
└── (outros diretórios...)
```

---

*Este documento documenta apenas a LP de forros de bambu; outras páginas seguem estrutura à parte.*
