# 🖼️ Guia de Imagens - Terrabambu LP

⚠️ **Documentação completa movida para**: `../.agents/specs/terrabambu-lp-vite-images.spec.md`

## Quick Reference

**❌ ERRADO:**
```jsx
const img = "/assets/images/hero.png";
```

**✅ CORRETO:**
```jsx
import img from "@assets/images/hero.png";
```

## Por quê?
O projeto usa `base: '/lp/forros-bambu/'`. Strings quebram em produção. Imports funcionam.

## Checklist Rápido
- [ ] Imagem em `public/assets/images/`
- [ ] Importado: `import img from "@assets/images/..."`
- [ ] Testei dev: `npm run dev` ✅
- [ ] Testei build: `npm run build` ✅

**Dúvidas?** Leia a spec completa: `../.agents/specs/terrabambu-lp-vite-images.spec.md`
