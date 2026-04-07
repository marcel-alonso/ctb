# 🚀 EXEMPLOS DE CÓDIGO - Puxar LPs via API

## 📄 Resumo dos Caminhos

```
📱 Mobile LP:     lp/forros-bambu/index-mobile.html
🖥️  Desktop LP:   lp/forros-bambu/index-desktop.html
🤖 Roteador:      lp/forros-bambu/index.html
📋 CSS Mobile:    lp/forros-bambu/css/forros-bambu-lp-mobile.css
📋 CSS Desktop:   lp/forros-bambu/css/forros-bambu-lp.css
```

---

## 🔗 URLs GITHUB RAW (Sem Autenticação)

```
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index.html
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css
https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css
```

---

## 💻 EXEMPLO 1: JAVASCRIPT (Node.js)

```javascript
// Puxar LP Mobile
async function getLPMobile() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html'
    );
    const html = await response.text();
    console.log('LP Mobile carregada!');
    return html;
  } catch (error) {
    console.error('Erro:', error);
  }
}

// Puxar LP Desktop
async function getLPDesktop() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html'
    );
    const html = await response.text();
    console.log('LP Desktop carregada!');
    return html;
  } catch (error) {
    console.error('Erro:', error);
  }
}

// Puxar CSS Mobile
async function getCSSMobile() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css'
    );
    const css = await response.text();
    console.log('CSS Mobile carregada!');
    return css;
  } catch (error) {
    console.error('Erro:', error);
  }
}

// Puxar CSS Desktop
async function getCSSDesktop() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css'
    );
    const css = await response.text();
    console.log('CSS Desktop carregada!');
    return css;
  } catch (error) {
    console.error('Erro:', error);
  }
}

// Usar
(async () => {
  const mobileLp = await getLPMobile();
  const desktopLp = await getLPDesktop();
  const mobileCss = await getCSSMobile();
  const desktopCss = await getCSSDesktop();
  
  console.log('Tudo carregado!');
  console.log('Mobile LP:', mobileLp.substring(0, 100) + '...');
  console.log('Desktop LP:', desktopLp.substring(0, 100) + '...');
})();
```

---

## 🐍 EXEMPLO 2: PYTHON

```python
import requests
import os

# URLs
MOBILE_LP_URL = 'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html'
DESKTOP_LP_URL = 'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html'
MOBILE_CSS_URL = 'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css'
DESKTOP_CSS_URL = 'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css'

def download_file(url, filename):
    """Baixa arquivo da URL"""
    print(f'Baixando {filename}...')
    response = requests.get(url)
    
    if response.status_code == 200:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(response.text)
        print(f'✅ {filename} salvo!')
        return response.text
    else:
        print(f'❌ Erro ao baixar {filename}')
        return None

# Baixar todos os arquivos
mobile_lp = download_file(MOBILE_LP_URL, 'index-mobile.html')
desktop_lp = download_file(DESKTOP_LP_URL, 'index-desktop.html')
mobile_css = download_file(MOBILE_CSS_URL, 'forros-bambu-lp-mobile.css')
desktop_css = download_file(DESKTOP_CSS_URL, 'forros-bambu-lp.css')

print('\n✨ Arquivos baixados com sucesso!')
print(f'Mobile LP: {len(mobile_lp)} caracteres')
print(f'Desktop LP: {len(desktop_lp)} caracteres')
print(f'Mobile CSS: {len(mobile_css)} caracteres')
print(f'Desktop CSS: {len(desktop_css)} caracteres')
```

---

## 🔧 EXEMPLO 3: CURL (Terminal/Bash)

```bash
#!/bin/bash

echo "Baixando Landing Pages..."

# Criar diretório
mkdir -p lp_files
cd lp_files

# Baixar Mobile LP
echo "1️⃣  Baixando Mobile LP..."
curl -o index-mobile.html \
  https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html

# Baixar Desktop LP
echo "2️⃣  Baixando Desktop LP..."
curl -o index-desktop.html \
  https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html

# Baixar CSS Mobile
echo "3️⃣  Baixando CSS Mobile..."
curl -o forros-bambu-lp-mobile.css \
  https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css

# Baixar CSS Desktop
echo "4️⃣  Baixando CSS Desktop..."
curl -o forros-bambu-lp.css \
  https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css

echo "✅ Arquivos baixados em ./lp_files/"
ls -lah
```

---

## 🌐 EXEMPLO 4: FETCH API (Browser)

```javascript
// No console do navegador

async function fetchAllLPs() {
  const files = {
    mobileLp: 'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html',
    desktopLp: 'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html',
    mobileCss: 'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css',
    desktopCss: 'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css',
  };

  const results = {};

  for (const [key, url] of Object.entries(files)) {
    try {
      const response = await fetch(url);
      results[key] = await response.text();
      console.log(`✅ ${key} carregado (${results[key].length} caracteres)`);
    } catch (error) {
      console.error(`❌ Erro ao carregar ${key}:`, error);
    }
  }

  return results;
}

// Executar
fetchAllLPs().then(lps => {
  console.log('🎉 Todos os arquivos carregados!');
  console.log(lps);
});
```

---

## 🐙 EXEMPLO 5: GitHub API (Com Token)

```javascript
// Usar GitHub API para puxar conteúdo

const GITHUB_TOKEN = 'seu_token_aqui'; // Opcional
const REPO_OWNER = 'marcel-alonso';
const REPO_NAME = 'ctb';
const BASE_API = 'https://api.github.com/repos';

async function getFileFromGitHub(path) {
  const url = `${BASE_API}/${REPO_OWNER}/${REPO_NAME}/contents/${path}`;
  
  const headers = {
    'Accept': 'application/vnd.github.v3.raw'
  };
  
  if (GITHUB_TOKEN) {
    headers['Authorization'] = `token ${GITHUB_TOKEN}`;
  }
  
  try {
    const response = await fetch(url, { headers });
    const content = await response.text();
    return content;
  } catch (error) {
    console.error(`Erro ao buscar ${path}:`, error);
    return null;
  }
}

// Usar
(async () => {
  const mobileLp = await getFileFromGitHub('lp/forros-bambu/index-mobile.html');
  const desktopLp = await getFileFromGitHub('lp/forros-bambu/index-desktop.html');
  const mobileCss = await getFileFromGitHub('lp/forros-bambu/css/forros-bambu-lp-mobile.css');
  const desktopCss = await getFileFromGitHub('lp/forros-bambu/css/forros-bambu-lp.css');
  
  console.log('✅ Tudo carregado!');
})();
```

---

## 🎯 EXEMPLO 6: PowerShell (Windows)

```powershell
$urls = @{
    'mobile-lp' = 'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html'
    'desktop-lp' = 'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-desktop.html'
    'mobile-css' = 'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp-mobile.css'
    'desktop-css' = 'https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/css/forros-bambu-lp.css'
}

foreach ($name in $urls.Keys) {
    $url = $urls[$name]
    $file = "$name.txt"
    
    Write-Host "Baixando $name..." -ForegroundColor Cyan
    Invoke-WebRequest -Uri $url -OutFile $file
    Write-Host "✅ $file salvo!" -ForegroundColor Green
}

Write-Host "`n✨ Todos os arquivos foram baixados!" -ForegroundColor Yellow
```

---

## 📋 RESUMO RÁPIDO

### Se usar Node.js
```javascript
const html = await fetch('https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html').then(r => r.text());
```

### Se usar Python
```python
import requests
html = requests.get('https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html').text
```

### Se usar Curl
```bash
curl https://raw.githubusercontent.com/marcel-alonso/ctb/main/lp/forros-bambu/index-mobile.html
```

---

**Criado em:** 16 de Fevereiro de 2026
