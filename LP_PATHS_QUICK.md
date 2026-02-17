# 🎯 GUIA RÁPIDO - LOCALIZAÇÃO DAS LPs

## ⚡ TL;DR - Resumo Executivo

### 3 ARQUIVOS HTML PRINCIPAIS

```
✅ LP MOBILE:   lp/forros-bambu/index-mobile.html
✅ LP DESKTOP:  lp/forros-bambu/index-desktop.html
✅ ROTEADOR:    lp/forros-bambu/index.html
```

### URLs DIRETAS GITHUB RAW

```
📱 Mobile:  https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html
🖥️  Desktop: https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html
🤖 Router:  https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index.html
```

### CSS RELACIONADO

```
📱 Mobile CSS:  lp/forros-bambu/css/forros-bambu-lp-mobile.css
🖥️  Desktop CSS: lp/forros-bambu/css/forros-bambu-lp.css
```

---

## 🗂️ ÁRVORE DE DIRETÓRIOS SIMPLIFICADA

```
📁 ctb/
│
├── 📁 lp/forros-bambu/  ⭐ AQUI ESTÃO AS LPs
│   │
│   ├── 📄 index.html                    🤖 Roteador inteligente
│   ├── 📄 index-mobile.html             📱 LP Mobile
│   ├── 📄 index-desktop.html            🖥️  LP Desktop
│   │
│   ├── 📁 css/
│   │   ├── forros-bambu-lp-mobile.css   📱 Estilos Mobile
│   │   └── forros-bambu-lp.css          🖥️  Estilos Desktop
│   │
│   └── 📁 assets/
│       └── (imagens, ícones, etc.)
│
├── 📁 admin/            (Painel admin)
├── 📁 blog/             (Blog posts)
├── 📁 css/              (CSS global)
├── 📁 js/               (JavaScript)
├── 📁 scripts/          (Build scripts)
└── 📄 index.html        (Homepage principal)
```

---

## 🎨 O QUE CADA ARQUIVO FAZ

### 1️⃣ **index.html** (Roteador)
```javascript
// Detecta automaticamente mobile vs desktop
// E redireciona para a versão apropriada

if (isMobileDevice()) {
  window.location.href = '.../index-mobile.html'
} else {
  window.location.href = '.../index-desktop.html'
}
```

### 2️⃣ **index-mobile.html** (LP Mobile)
- Otimizada para telas < 768px
- Formulário simplificado
- Acordeão para modelos
- FAQ compacto
- ~500 linhas

### 3️⃣ **index-desktop.html** (LP Desktop)
- Otimizada para telas > 768px
- Tabela comparativa de modelos
- Hero section expandida
- Formulário completo
- ~800 linhas

---

## 🔗 CAMINHOS RELATIVOS

### Do Repositório Raiz

```plaintext
lp/forros-bambu/index.html
lp/forros-bambu/index-mobile.html
lp/forros-bambu/index-desktop.html
lp/forros-bambu/css/forros-bambu-lp-mobile.css
lp/forros-bambu/css/forros-bambu-lp.css
```

### Do Diretório lp/forros-bambu/

```plaintext
./index.html
./index-mobile.html
./index-desktop.html
./css/forros-bambu-lp-mobile.css
./css/forros-bambu-lp.css
```

---

## 📡 URLs DE ACESSO

### Acesso Público

```
https://conexaoterrabambu.com.br/lp/forros-bambu/
https://conexaoterrabambu.com.br/lp/forros-bambu/index-mobile.html
https://conexaoterrabambu.com.br/lp/forros-bambu/index-desktop.html
```

### GitHub Raw (sem autenticação)

```
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index.html
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css
```

---

## 💾 COMANDO PARA PUXAR TUDO

### Usando curl (uma linha para cada)

```bash
# Mobile
curl -o mobile.html https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html

# Desktop
curl -o desktop.html https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html

# CSS Mobile
curl -o mobile.css https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css

# CSS Desktop
curl -o desktop.css https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css
```

### Usando wget (alternativa)

```bash
wget https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html
wget https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html
wget https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css
wget https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css
```

---

## 🤖 PARA O AGENTE CHATGPT

### Copie e Cole Este Texto

```
As Landing Pages do projeto estão em:

PASTA: lp/forros-bambu/

ARQUIVOS PRINCIPAIS:
1. index-mobile.html   (Mobile LP)
2. index-desktop.html  (Desktop LP)
3. index.html          (Roteador)

CSS:
- css/forros-bambu-lp-mobile.css
- css/forros-bambu-lp.css

Para puxar via API GitHub Raw:
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css
```

---

## 📋 CHECKLIST PARA COLETAR ARQUIVOS

- [ ] Ir para `lp/forros-bambu/`
- [ ] Baixar `index-mobile.html`
- [ ] Baixar `index-desktop.html`
- [ ] Verificar `index.html`
- [ ] Baixar `css/forros-bambu-lp-mobile.css`
- [ ] Baixar `css/forros-bambu-lp.css`
- [ ] Processar arquivos
- [ ] Pronto!

---

## 🎯 MAIS CONCISO AINDA

```
MOBILE LP:   lp/forros-bambu/index-mobile.html
DESKTOP LP:  lp/forros-bambu/index-desktop.html
```

Pronto! 🚀

---

**Criado em:** 16 de Fevereiro de 2026
