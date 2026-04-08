# SPEC: Terrabambu LP - Vite Image Handling

**Status:** ✅ Documentado e Implementado  
**Criticidade:** 🔴 ALTA - Afeta build e deploy  
**Última atualização:** 2026-04-07  

---

## 📋 Resumo Executivo

O projeto usa Vite com `base: '/lp/forros-bambu/'`. Imagens referenciadas como strings (`"/assets/images/..."`), funcionam em dev mas **quebram em produção**.

**Solução:** Todas as imagens devem ser **importadas como módulos ES6**, nunca como strings.

---

## 🔴 O Problema

### Sintoma
- ✅ Imagens aparecem em `npm run dev`
- ❌ Imagens desaparecem em `npm run build` ou GitHub Pages

### Causa Raiz

```javascript
// vite.config.js
export default defineConfig({
  base: '/lp/forros-bambu/',  // ← URL base do app
  build: {
    outDir: '../lp/forros-bambu',
  }
})
```

Quando você usa um caminho de string como `/assets/images/hero.png`:
- Em dev: `/assets/images/hero.png` é servido diretamente ✅
- Em prod: `/assets/images/hero.png` é procurado na raiz do GitHub Pages ❌
  - Deveria ser: `/lp/forros-bambu/assets/images/hero.png`

**O Vite não sabe que você quer processar essa imagem** se for apenas uma string.

---

## ✅ A Solução: Imports de Imagens

### 1. Configure o Alias (JÁ FEITO em `vite.config.js`)

```javascript
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './public/assets'),
    }
  },
})
```

### 2. Importe Imagens como Módulos

```jsx
// ❌ ERRADO - String, Vite não processa
const img = "/assets/images/hero.png";
export function Hero() {
  return <img src={img} alt="Hero" />;
}

// ✅ CORRETO - Import, Vite gerencia automaticamente
import heroImg from "@assets/images/hero.png";
export function Hero() {
  return <img src={heroImg} alt="Hero" />;
}
```

### 3. Por que funciona

Quando você faz `import heroImg from "@assets/images/hero.png"`:
1. Vite **processa a imagem** durante o build
2. Gera um caminho URL **relativo à base** automaticamente
3. Otimiza e versiona a imagem (`hero-abc123.png`)
4. Funciona com qualquer valor de `base`
5. Funciona perfeitamente em GitHub Pages

---

## 📁 Estrutura de Arquivos

```
terrabambu-lp/
├── vite.config.js               ← Define base + alias @assets
├── public/
│   └── assets/
│       └── images/              ← COLOCA IMAGENS AQUI
│           ├── hero-ultra-luxo.png
│           ├── gourmet-churrasqueira.jpg
│           ├── pergolado-black-grid.jpg
│           ├── bambu-paralelo-ecobans.jpg
│           ├── forro-reto.png
│           └── teto-ventilador.jpg
└── src/
    └── components/
        ├── Hero.jsx             ← import heroImg from "@assets/images/..."
        ├── ProvaVisual.jsx      ← import imgs from "@assets/images/..."
        ├── Solucao.jsx          ← import imgs from "@assets/images/..."
        └── ...
```

---

## 🎯 Checklist: Adicionando Novas Imagens

- [ ] Arquivo está em `terrabambu-lp/public/assets/images/`
- [ ] Componente importa: `import img from "@assets/images/nome.jpg"`
- [ ] Componente usa a variável: `<img src={img} alt="..." />`
- [ ] **NÃO usa string**: `src="/assets/images/..."` ❌
- [ ] **NÃO usa caminho relativo errado**: `src="./assets/images/..."` ❌
- [ ] Testou em dev: `npm run dev` → imagens aparecem ✅
- [ ] Testou em build: `npm run build` → imagens ainda aparecem ✅

---

## 🧪 Teste Rápido

```bash
# Terminal 1: Dev mode
cd terrabambu-lp
npm run dev
# Abrir http://localhost:5173
# Verifica: todas as imagens aparecem?

# Terminal 2: Build
npm run build
# Verifica arquivo gerado em: ../lp/forros-bambu/
# Inspeciona: imagens estão em ../lp/forros-bambu/assets/images/?
# Valida: nomes têm hash? (ex: hero-abc123.png)
```

---

## ❌ Erros Comuns

| Erro | Causa | Solução |
|------|-------|---------|
| `<img src="/assets/images/..."` | Caminho absoluto como string | Importar: `import img from "@assets/images/..."` |
| `<img src="./assets/images/..."` | Caminho relativo do HTML | Importar: `import img from "@assets/images/..."` |
| "Cannot find module '@assets/...'" | Alias não configurado | Verificar `vite.config.js` tem `resolve.alias` |
| Imagens faltam em produção | Não foi processado pelo Vite | Usar import, não string |
| 404 em GitHub Pages | Vite não foi rodado | Verificar: `npm run build` rodou antes do deploy? |

---

## 📋 Componentes com Imagens (Status)

| Componente | Imagens | Status |
|------------|---------|--------|
| `Hero.jsx` | 1 (hero-ultra-luxo.png) | ✅ Implementado |
| `ProvaVisual.jsx` | 4 (gourmet, pergolado, teto, revestimento) | ✅ Implementado |
| `Solucao.jsx` | 4 (forro, painel, pergolado, revestimento) | ✅ Implementado |

---

## 🔗 Documentação Relacionada

- `CLAUDE.md` (terrabambu-lp/) - Instruções para IAs
- `IMAGES_SETUP.md` (terrabambu-lp/) - Guia detalhado
- `rules.md` (.agents/) - Regras globais do projeto

---

## 🚀 GitHub Pages Deployment

O GitHub Actions (`.github/workflows/deploy.yml`) executa:
1. `npm run build` em `terrabambu-lp/`
2. Output é escrito para `lp/forros-bambu/`
3. Upload inteiro para GitHub Pages

Com a solução de imports, as imagens aparecem corretamente em:
```
https://usuario.github.io/lp/forros-bambu/
```

Sem necessidade de ajustes manuais de caminho!

---

## ⚠️ NÃO FAÇA ISSO

```javascript
// ❌ Hardcoding caminhos em variáveis
const images = {
  hero: "/assets/images/hero.png",  // String - não funciona em prod
};

// ❌ Construir caminhos dinamicamente
function getImagePath(name) {
  return `/assets/images/${name}.png`;  // String - não funciona em prod
}

// ❌ Usar require em lugar de import
const img = require("/assets/images/hero.png");  // Antigo/quebrado
```

## ✅ FAÇA ISTO

```javascript
// ✅ Import direto no topo do arquivo
import heroImg from "@assets/images/hero.png";
import gourmetImg from "@assets/images/gourmet-churrasqueira.jpg";

// ✅ Usar as variáveis importadas
const products = [
  { img: heroImg, title: "Hero" },
  { img: gourmetImg, title: "Gourmet" },
];

// ✅ Usar em JSX
<img src={heroImg} alt="Hero" loading="lazy" />
```

---

## 📞 Quando Adicionar Novas Imagens

1. Salva arquivo em `terrabambu-lp/public/assets/images/`
2. Abre o componente React onde vai usar
3. Adiciona import no topo: `import nomeImg from "@assets/images/arquivo.jpg"`
4. Usa no JSX: `<img src={nomeImg} alt="..." />`
5. Testa: `npm run dev` + `npm run build`
6. Commit a documentação de spec se mudou fluxo

---

**Última revisão:** 2026-04-07  
**Próxima revisão:** Quando adicionar nova imagem ou mudar base path
