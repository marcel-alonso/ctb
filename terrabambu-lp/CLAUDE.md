# 🤖 Instruções para Claude e IAs

## ⚠️ CRÍTICO: Como Trabalhar com Imagens

**Leia primeiro**: `../.agents/specs/terrabambu-lp-vite-images.spec.md`

### O Problema
O projeto usa Vite com `base: '/lp/forros-bambu/'`. Imagens como strings (`"/assets/images/..."`):
- ✅ Funcionam em dev
- ❌ Quebram em produção (GitHub Pages)

### A Solução
**Todas as imagens devem ser importadas como módulos ES6:**

```jsx
// ❌ ERRADO
const img = "/assets/images/hero.png";

// ✅ CORRETO
import heroImg from "@assets/images/hero.png";
<img src={heroImg} alt="..." />
```

### Por quê?
- Vite processa o import e gera URLs corretas automaticamente
- Funciona com qualquer valor de `base`
- Funciona perfeitamente em GitHub Pages

## 📋 Checklist Ao Adicionar Imagens

- [ ] Coloca arquivo em `public/assets/images/`
- [ ] Importa: `import img from "@assets/images/file.jpg"`
- [ ] Usa no JSX: `<img src={img} alt="..." />`
- [ ] Testa com `npm run dev` (deve funcionar)
- [ ] Testa com `npm run build` (deve funcionar)

## 📖 Documentação

- **Especificação técnica**: `../.agents/specs/terrabambu-lp-vite-images.spec.md`
- **Regras globais**: `../.agents/rules.md` (seção 2, imagens)
- **Exemplos no código**:
  - `src/components/Hero.jsx` - 1 imagem
  - `src/components/ProvaVisual.jsx` - 4 imagens
  - `src/components/Solucao.jsx` - 4 imagens

## 🔧 Configuração

`vite.config.js` define:
```javascript
resolve.alias = { '@assets': './public/assets' }
base = '/lp/forros-bambu/'
```

**NÃO MODIFIQUE sem entender as implicações!**

---

**Dúvida sobre imagens?** Leia a spec completa em `.agents/specs/`
