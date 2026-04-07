# 🔧 GUIA DE CORREÇÃO - Problemas Críticos de Segurança

**Projeto:** Conexão Terra Bambu v2.1  
**Data:** 16 de Fevereiro de 2026  
**Objetivo:** Corrigir vulnerabilidades críticas identificadas na revisão

---

## 🔴 PROBLEMA 1: XSS (Cross-Site Scripting)

### Localização
- **Arquivo:** `js/blog.js`
- **Linhas:** 47, 63, 238, 241, 324, 327

### Código Vulnerável

```javascript
// ❌ VULNERÁVEL - Pode executar scripts maliciosos
blogGrid.innerHTML = '<p>Nenhum post disponível no momento.</p>';
feedbackSection.innerHTML = '<p>Obrigado pelo feedback!</p>';
blogGrid.innerHTML = postsHTML;
relatedGrid.innerHTML = postsHTML;
```

### Risco
Se o conteúdo vier de uma fonte não confiável (DB, API, usuário), pode conter código malicioso:
```html
<img src=x onerror="alert('XSS Attack!')">
```

### Solução 1: TextContent (Para texto simples)

```javascript
// ✅ SEGURO - Apenas texto
blogGrid.textContent = 'Nenhum post disponível no momento.';
feedbackSection.textContent = 'Obrigado pelo feedback!';
```

### Solução 2: DOMParser (Para HTML sanitizado)

```javascript
// ✅ SEGURO - Parse e sanitização
const sanitizeHTML = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Remover scripts e atributos perigosos
    const scripts = doc.querySelectorAll('script');
    scripts.forEach(script => script.remove());
    
    const elements = doc.querySelectorAll('*');
    elements.forEach(el => {
        // Remover atributos "on*"
        Array.from(el.attributes).forEach(attr => {
            if (attr.name.startsWith('on')) {
                el.removeAttribute(attr.name);
            }
        });
    });
    
    return doc.body.innerHTML;
};

// Usar
blogGrid.innerHTML = sanitizeHTML(postsHTML);
```

### Solução 3: Usar Biblioteca (Recomendado)

```bash
npm install dompurify
```

```javascript
import DOMPurify from 'dompurify';

blogGrid.innerHTML = DOMPurify.sanitize(postsHTML);
```

---

## 🔴 PROBLEMA 2: CSRF (Cross-Site Request Forgery)

### Localização
- **Arquivo:** `admin/js/admin.js`
- **Funções:** `handleSavePost()`, `saveAuthor()`, todas as chamadas GitHub API

### Código Vulnerável

```javascript
// ❌ VULNERÁVEL - Sem validação CSRF
const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/...`,
    {
        method: 'PUT',
        headers: { 'Authorization': `token ${token}` },
        body: JSON.stringify(data)
    }
);
```

### Risco
Atacante pode forçar requisições em nome do usuário legítimo.

### Solução: CSRF Tokens

```javascript
// 1. Gerar token na inicialização
function generateCSRFToken() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// 2. Armazenar na sessão
sessionStorage.setItem('csrf_token', generateCSRFToken());

// 3. Validar antes de requisições críticas
function validateCSRFToken() {
    const token = sessionStorage.getItem('csrf_token');
    const timestamp = sessionStorage.getItem('csrf_timestamp');
    const now = Date.now();
    
    // Token expires after 1 hora
    if (!token || (now - timestamp > 3600000)) {
        throw new Error('CSRF token inválido ou expirado');
    }
    return token;
}

// 4. Usar em requisições
async function handleSavePost() {
    try {
        const csrfToken = validateCSRFToken();
        
        const response = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/contents/...`,
            {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${token}`,
                    'X-CSRF-Token': csrfToken
                },
                body: JSON.stringify(data)
            }
        );
        
        if (!response.ok) throw new Error('Save failed');
        showSuccess('Post salvo com sucesso!');
    } catch (e) {
        showError('Erro ao salvar: ' + e.message);
    }
}
```

---

## 🔴 PROBLEMA 3: Validação de Input Fraca

### Localização
- **Arquivo:** `admin/js/admin.js`
- **Funções:** `createNewPost()`, `saveAuthor()`, `handleCoverImageUpload()`

### Código Vulnerável

```javascript
// ❌ FRACA - Validação insuficiente
if (!title || !content) {
    showError('Campos obrigatórios');
    return;
}
// Falta: comprimento, caracteres especiais, HTML, etc.
```

### Risco
- Injeção de HTML/JavaScript
- Buffer overflow com strings muito longas
- Caracteres unicode maliciosos

### Solução: Validação Robusta

```javascript
// Criar classe de validação
class InputValidator {
    static MAX_TITLE_LENGTH = 200;
    static MAX_CONTENT_LENGTH = 100000;
    static MAX_NAME_LENGTH = 100;
    
    static validateTitle(title) {
        if (!title || typeof title !== 'string') {
            throw new Error('Título é obrigatório e deve ser texto');
        }
        
        const trimmed = title.trim();
        
        if (trimmed.length === 0) {
            throw new Error('Título não pode estar vazio');
        }
        
        if (trimmed.length > this.MAX_TITLE_LENGTH) {
            throw new Error(`Título máximo: ${this.MAX_TITLE_LENGTH} caracteres`);
        }
        
        // Remover tags HTML
        if (/<[^>]*>/g.test(trimmed)) {
            throw new Error('Título não pode conter HTML');
        }
        
        return trimmed;
    }
    
    static validateContent(content) {
        if (!content || typeof content !== 'string') {
            throw new Error('Conteúdo é obrigatório');
        }
        
        const trimmed = content.trim();
        
        if (trimmed.length === 0) {
            throw new Error('Conteúdo não pode estar vazio');
        }
        
        if (trimmed.length > this.MAX_CONTENT_LENGTH) {
            throw new Error(`Conteúdo máximo: ${this.MAX_CONTENT_LENGTH} caracteres`);
        }
        
        // Markdown é OK, mas validar caracteres perigosos
        const dangerousPatterns = [
            /<script/gi,
            /javascript:/gi,
            /on\w+\s*=/gi
        ];
        
        for (const pattern of dangerousPatterns) {
            if (pattern.test(trimmed)) {
                throw new Error('Conteúdo contém código suspeito');
            }
        }
        
        return trimmed;
    }
    
    static validateEmail(email) {
        if (!email || typeof email !== 'string') {
            throw new Error('Email é obrigatório');
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Email inválido');
        }
        
        return email.toLowerCase();
    }
    
    static validateSlug(slug) {
        if (!slug || typeof slug !== 'string') {
            throw new Error('Slug é obrigatório');
        }
        
        const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
        if (!slugRegex.test(slug)) {
            throw new Error('Slug deve conter apenas letras, números e hífens');
        }
        
        return slug;
    }
}

// Usar na prática
async function handleSavePost() {
    try {
        const title = InputValidator.validateTitle(
            document.getElementById('post-title').value
        );
        const content = InputValidator.validateContent(
            document.getElementById('post-content').value
        );
        const slug = InputValidator.validateSlug(
            document.getElementById('post-slug').value
        );
        
        // Dados validados, pode prosseguir
        await savePostToGitHub({ title, content, slug });
        showSuccess('Post salvo com sucesso!');
    } catch (error) {
        showError('Erro: ' + error.message);
    }
}
```

---

## 🔴 PROBLEMA 4: Sem Rate Limiting

### Localização
- **Arquivo:** `admin/js/admin.js`
- **Funções:** Login, chamadas GitHub API

### Código Vulnerável

```javascript
// ❌ SEM LIMITE - Pode ser atacado
document.getElementById('login-btn').addEventListener('click', async () => {
    // Sem limite de tentativas!
    const response = await authenticateUser(username, password);
});
```

### Risco
- Força bruta (testar muitas senhas)
- DDoS (enviar muitas requisições)

### Solução: Rate Limiter

```javascript
class RateLimiter {
    constructor(maxAttempts = 5, windowMs = 15 * 60 * 1000) {
        this.maxAttempts = maxAttempts; // 5 tentativas
        this.windowMs = windowMs; // 15 minutos
        this.attempts = {}; // { key: [timestamp1, timestamp2, ...] }
    }
    
    check(key) {
        const now = Date.now();
        
        // Inicializar se não existe
        if (!this.attempts[key]) {
            this.attempts[key] = [];
        }
        
        // Remover timestamps antigos (fora da janela)
        this.attempts[key] = this.attempts[key].filter(
            time => now - time < this.windowMs
        );
        
        // Verificar se excedeu limite
        if (this.attempts[key].length >= this.maxAttempts) {
            const oldestAttempt = this.attempts[key][0];
            const waitTime = Math.ceil((this.windowMs - (now - oldestAttempt)) / 1000);
            throw new Error(
                `Muitas tentativas. Aguarde ${waitTime} segundos.`
            );
        }
        
        // Registrar nova tentativa
        this.attempts[key].push(now);
    }
    
    reset(key) {
        delete this.attempts[key];
    }
}

// Instanciar limitadores
const loginLimiter = new RateLimiter(5, 15 * 60 * 1000); // 5 tentativas / 15 min
const apiLimiter = new RateLimiter(100, 60 * 1000); // 100 requisições / 1 min

// Usar no login
document.getElementById('login-btn').addEventListener('click', async () => {
    try {
        const username = document.getElementById('username').value;
        
        // Verificar rate limit
        loginLimiter.check(`login_${username}`);
        
        const response = await authenticateUser(username, password);
        
        if (response.ok) {
            loginLimiter.reset(`login_${username}`); // Limpar contador
            // ... sucesso
        }
    } catch (error) {
        showError(error.message);
    }
});

// Usar nas chamadas GitHub API
async function handleSavePost() {
    try {
        apiLimiter.check('github_api');
        
        const response = await fetch(
            `https://api.github.com/repos/...`,
            { /* ... */ }
        );
        
        if (!response.ok) throw new Error('Save failed');
    } catch (error) {
        showError(error.message);
    }
}
```

---

## 🟡 PROBLEMA 5: Sem Testes Automatizados

### Setup Jest + Testing Library

```bash
npm install --save-dev jest @testing-library/dom @testing-library/jest-dom
```

### Exemplo: Teste de Validação

```javascript
// __tests__/validator.test.js
import { InputValidator } from '../admin/js/admin.js';

describe('InputValidator', () => {
    describe('validateTitle', () => {
        it('deve aceitar títulos válidos', () => {
            expect(() => {
                InputValidator.validateTitle('Meu Título');
            }).not.toThrow();
        });
        
        it('deve rejeitar títulos vazios', () => {
            expect(() => {
                InputValidator.validateTitle('');
            }).toThrow('Título não pode estar vazio');
        });
        
        it('deve rejeitar títulos com HTML', () => {
            expect(() => {
                InputValidator.validateTitle('<script>alert(1)</script>');
            }).toThrow('Título não pode conter HTML');
        });
        
        it('deve rejeitar títulos muito longos', () => {
            const longTitle = 'a'.repeat(201);
            expect(() => {
                InputValidator.validateTitle(longTitle);
            }).toThrow('Título máximo: 200 caracteres');
        });
    });
});
```

### Executar Testes

```bash
npm test
```

---

## 📋 CHECKLIST DE IMPLEMENTAÇÃO

### Sprint 1: Segurança (Semana 1-2)

- [ ] Instalar DOMPurify
- [ ] Sanitizar innerHTML em blog.js (6 locais)
- [ ] Implementar InputValidator class
- [ ] Integrar validação no admin.js (5 formulários)
- [ ] Implementar RateLimiter class
- [ ] Aplicar rate limiting ao login e GitHub API
- [ ] Implementar CSRF tokens
- [ ] Testar todas as correções

### Sprint 2: Testes (Semana 3-4)

- [ ] Instalar Jest + Testing Library
- [ ] Criar testes para InputValidator
- [ ] Criar testes para RateLimiter
- [ ] Criar testes para sanitização HTML
- [ ] Configurar GitHub Actions para rodar testes
- [ ] Atingir 70% de cobertura de código

### Sprint 3: Deploy (Semana 5)

- [ ] Code review das alterações
- [ ] Testar em staging
- [ ] Fazer backup do production
- [ ] Deploy em production
- [ ] Monitorar por 48h

---

## 🧪 TESTE DE VULNERABILIDADE

Após implementar as correções, testar com:

```javascript
// 1. XSS Test
const xssPayload = '<img src=x onerror="alert(\'XSS\')">';
// Deve aparecer como texto, não executar

// 2. CSRF Test
// Rejeitar requisições sem token válido

// 3. Input Validation Test
const maliciousInput = '"; DROP TABLE posts; --';
// Deve ser rejeitado ou escapado
```

---

## 📚 REFERÊNCIAS

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN: Sanitizing HTML](https://developer.mozilla.org/en-US/docs/Glossary/sanitize)
- [DOMPurify Documentation](https://github.com/cure53/DOMPurify)
- [Jest Documentation](https://jestjs.io/)

---

**Criado por:** GitHub Copilot  
**Data:** 16 de Fevereiro de 2026  
**Versão:** 1.0
