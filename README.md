# Conexão Terra Bambu - Landing Pages & Blog

## 📱 Links Rápidos

- **Site Principal:** [https://conexaoterrabambu.com.br](https://conexaoterrabambu.com.br)
- **GitHub Pages:** [https://marcel-alonso.github.io/ctb/](https://marcel-alonso.github.io/ctb/)
- **LP Forros de Bambu (Mobile):** [/lp/forros-bambu/index-mobile.html](lp/forros-bambu/index-mobile.html)
- **LP Forros de Bambu (Desktop):** [/lp/forros-bambu/index-desktop.html](lp/forros-bambu/index-desktop.html)

## 🎯 Seções do Projeto

### 1️⃣ **Landing Page de Forros de Bambu** 🌿
A principal página de vendas otimizada para conversão de leads com duas versões (mobile/desktop):

#### Versão Mobile (`/lp/forros-bambu/index-mobile.html`)
- ✅ Acordeão interativo para modelos (Roliço, Filepa Reta, Entrelaçado)
- ✅ Formulário simplificado com campos essenciais
- ✅ Testimunhas compactas com ratings
- ✅ FAQ com acordeão
- ✅ Botão WhatsApp flutuante
- ✅ Otimizado para telas < 768px
- ✅ Layout de coluna única

#### Versão Desktop (`/lp/forros-bambu/index-desktop.html`)
- ✅ Tabela comparativa de modelos (Roliço, Filepa, Entrelaçado)
- ✅ Seção Hero expandida com benefícios
- ✅ Grid de comparação Problema vs Solução
- ✅ Cards de proposição de valor
- ✅ Formulário completo com 10 campos
- ✅ Testimunhas lado a lado
- ✅ FAQ expandida
- ✅ Otimizado para desktops
- ✅ Logo responsivo (diminui ao scroll)

#### Roteador Inteligente (`/lp/forros-bambu/index.html`)
- 🤖 Detecta automaticamente device (mobile/desktop)
- 🤖 Redireciona para versão apropriada
- 🤖 Fallback em caso de JavaScript desativado
- 🤖 Preserva SEO com meta tags em ambas versões

### 2️⃣ **Blog de Bioconstrução** 📚
Conteúdo educativo sobre construção sustentável:

#### Posts Disponíveis:
1. [Como Começar sua Casa Sustentável](blog/como-comecar-casa-sustentavel.html)
   - Um guia completo para iniciar sua jornada na bioconstrução
   - Data: 15 de Janeiro de 2024
   - Categoria: Guia Básico

2. [Benefícios do Bambu na Construção](blog/beneficios-bambu-construcao.html)
   - Descubra as vantagens deste material versátil e sustentável
   - Data: 10 de Janeiro de 2024
   - Categoria: Materiais

3. [Tintas Naturais: Cores que Respiram](blog/tintas-naturais-cores-que-respiram.html)
   - Aprenda sobre alternativas saudáveis para colorir sua casa
   - Data: 5 de Janeiro de 2024
   - Categoria: DIY

### 3️⃣ **Admin Dashboard** 🔐
Painel administrativo privado para gerenciamento:
- 📊 Acesso em [/admin/](admin/)
- 🔑 Login com credenciais seguras
- 📝 Gerenciamento de posts
- 📈 Analytics e conversões

## 🎯 Objetivo da LP Forros de Bambu

A página foi projetada para ser uma máquina de conversão de leads, focada em:

- **Capturar atenção:** Headlines magnéticas com emojis e urgência (promoção até 28/02)
- **Remover objeções:** Garantia de 10 anos, tratamento contra pragas, social proof (4.9/5 ⭐)
- **Facilitar ação:** Formulário simplificado com integração WhatsApp pré-preenchida
- **Aumentar conversão:** Múltiplos CTAs estratégicos, pricing transparente, testimoniais reais

## ✨ Funcionalidades Principais

### 🎯 Landing Page de Vendas (Forros de Bambu)

#### Elementos de Conversão
- **Banner de Urgência:** Animado com promoção limitada (15% OFF até 28/02)
- **Logo Responsivo:** Diminui e se move para canto inferior ao scroll
- **Hero Section:** Headline magnética + value props + benefit badges
- **Trust Marks:** Ícones de confiança (truck, shield, headset, star)
- **Comparação Problema vs Solução:** Grid visual com cores
- **Tabelas Comparativas:** Modelos x features x preços
- **Social Proof:** 3+ testimoniais reais com 5⭐ ratings (4.9/5 média)
- **Guarantee Badge:** 10 anos de garantia + lifetime support
- **Lead Capture Form:** 10 campos inteligentes com WhatsApp webhook
- **FAQ Otimizado:** 10 respostas focadas em objeção-handling

#### Integração WhatsApp
- 📱 Pré-preenchimento automático de mensagens
- 📋 Todos os dados do formulário inclusos
- ⚡ Links diretos em cada modelo
- 🔔 Redirecionamento automático ao enviar

#### Detecção Inteligente
- 🎯 Auto-detecta mobile vs desktop (768px breakpoint)
- 📊 User Agent detection para máxima compatibilidade
- ♿ Acessibilidade WCAG 2.1
- 📈 JSON-LD Schema.org para SEO

### 📚 Blog

-   **CMS baseado em Markdown:** Sistema simples e eficiente para gerenciamento de conteúdo
-   **SEO Otimizado:** Meta tags, dados estruturados, Open Graph e URLs amigáveis
-   **Design Responsivo:** Layout adaptável para todas as telas
-   **Categorias:** Filtros para organizar o conteúdo
-   **Posts Relacionados:** Sugestões de leitura relacionada
-   **Newsletter:** Captura de leads interessados em conteúdo
-   **Compartilhamento Social:** Meta tags otimizadas para Twitter, Facebook, LinkedIn
-   **Botão Flutuante WhatsApp:** Um botão de contato sempre visível

### 🛠️ Arquitetura Técnica

#### Estrutura de Arquivos
```
/lp/forros-bambu/
├── index.html                    # Roteador inteligente
├── index-mobile.html            # Versão mobile otimizada
├── index-desktop.html           # Versão desktop completa
├── css/
│   ├── forros-bambu-lp.css      # Estilos desktop
│   └── forros-bambu-lp-mobile.css # Estilos mobile
└── (imagens e assets)
```

#### Performance
- ⚡ Critical CSS inline para faster first paint
- 📦 Preload de recursos críticos
- 🖼️ Imagens otimizadas (WebP + fallback)
- 🔄 Lazy loading para imagens não-críticas
- 📱 Mobile-first responsive design

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Semântica, acessibilidade e dados estruturados (Schema.org)
- **CSS3:** Grid, Flexbox, animations, media queries (BEM naming convention)
- **JavaScript (Vanilla):** Interatividade sem dependências externas
- **Font Awesome 6:** Ícones vetoriais otimizados
- **Poppins Font:** Tipografia moderna e legível
- **WhatsApp Web API:** Integração para geração de leads
- **JSON-LD:** Estrutura para SEO e rich snippets

### Compatibilidade
- ✅ Todos os navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ iOS 12+
- ✅ Android 8+
- ✅ Progressive Enhancement (funciona sem JavaScript)

## � Modelos de Bambu - Preços & Especificações

| Modelo | Preço/m² | Acabamento | Ideal Para | Link Orçamento |
|--------|----------|-----------|-----------|---|
| 🌿 **Roliço** | R$ 160 | Cilíndrico natural | Rústico, casual | [WhatsApp](https://wa.me/5511992908488?text=Ol%C3%A1!%20Gostaria%20de%20or%C3%A7amento%20para%20o%20modelo%20RO%C3%89ÇO) |
| 📐 **Filepa Reta** | R$ 180 | Reto e geométrico | Moderno, sofisticado | [WhatsApp](https://wa.me/5511992908488?text=Ol%C3%A1!%20Gostaria%20de%20or%C3%A7amento%20para%20o%20modelo%20FILEPA%20RETA) |
| 🔀 **Entrelaçado** | R$ 200 | Trançado/esteira | Premium, diferenciado | [WhatsApp](https://wa.me/5511992908488?text=Ol%C3%A1!%20Gostaria%20de%20or%C3%A7amento%20para%20o%20modelo%20ENTRELA%C3%87ADO) |

**Garantia:** 10 anos (áreas cobertas) | 3 anos (áreas descobertas)
**Abrangência:** Todo Brasil | Instalação em Grande SP, Bauru e região

## 🚀 Como Usar a LP de Forros de Bambu

### Acessar via Navegador
1. **Mobile:** Acesse `/lp/forros-bambu/` em qualquer dispositivo < 768px
2. **Desktop:** Acesse `/lp/forros-bambu/` em desktop ou tablet > 768px
3. **Roteamento automático:** O `index.html` detecta e redireciona automaticamente

### Personalizar a LP

#### Mudar o Número do WhatsApp
Procure por `5511992908488` em:
- `lp/forros-bambu/index-mobile.html` (linhas com WhatsApp)
- `lp/forros-bambu/index-desktop.html` (linhas com WhatsApp)

#### Mudar Preços dos Modelos
**Desktop:** Procure na tabela comparativa (linha 800-850)
**Mobile:** Procure nos accordion buttons (linha 200-250)

#### Mudar Conteúdo do FAQ
**Desktop:** Procure a seção `faq-list` (linha 900+)
**Mobile:** Procure a seção `accordion-mobile` (linha 400+)

#### Mudar Data da Promoção
Procure por `28/02` e atualize para nova data:
- Banner de urgência
- Meta descriptions
- Conteúdo do hero

## 🌐 Publicar no GitHub Pages

Para publicar seu site e deixá-lo acessível para todos na internet, usaremos o **GitHub Pages**, uma ferramenta gratuita do próprio GitHub.

### Pré-requisitos
- Conta GitHub ativa
- Domínio personalizado (opcional) ou uso do GitHub Pages

### Passo a Passo - Desktop

1. **Fork do Repositório:**
   - Clique em "Fork" no topo desta página
   - Escolha sua conta pessoal
   - GitHub criará uma cópia em seu perfil

2. **Acesse Settings:**
   - No seu repositório, clique em "Settings" (Configurações)
   - No menu lateral, clique em "Pages"

3. **Configure GitHub Pages:**
   - **Source:** Selecione `main` branch
   - **Folder:** Mantenha `/ (root)`
   - Clique "Save"

4. **Aguarde Deploy:**
   - GitHub Pages build levará 1-5 minutos
   - Você verá um link verde com seu site: `https://seu-usuario.github.io/ctb/`

5. **(Opcional) Domínio Personalizado:**
   - Em "Custom domain", insira seu domínio (ex: `conexaoterrabambu.com.br`)
   - Configure os registros DNS em sua empresa de domínios:
     ```
     A Record: 185.199.108.153
     A Record: 185.199.109.153
     A Record: 185.199.110.153
     A Record: 185.199.111.153
     CNAME: seu-usuario.github.io
     ```

### Passo a Passo - Celular

1. **Fork via App GitHub:**
   - Abra o app do GitHub no celular
   - Procure este repositório
   - Toque em "Fork"

2. **Acesse Settings:**
   - No seu repositório, toque em "Settings"
   - Role até "Pages"

3. **Configure:**
   - Selecione `main` branch
   - Toque "Save"

4. **Seu site estará online em minutos!**

### Testar Localmente (Opcional)

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/ctb.git
cd ctb

# Abrir com Live Server (VS Code)
# Extensão: Live Server (ritwickdey.liveserver)
# Clique: "Go Live"

# Ou use Python
python -m http.server 8000
# Acesse: http://localhost:8000
```

## 📱 Acessar a LP em Diferentes Dispositivos

### Links Diretos
- **Versão Mobile:** [/lp/forros-bambu/index-mobile.html](lp/forros-bambu/index-mobile.html)
- **Versão Desktop:** [/lp/forros-bambu/index-desktop.html](lp/forros-bambu/index-desktop.html)
- **Auto-redirecionamento:** [/lp/forros-bambu/](lp/forros-bambu/)

### Testar Responsividade no Chrome
1. Abra a LP
2. Pressione `F12` para abrir DevTools
3. Clique no ícone de dispositivo (canto superior esquerdo)
4. Escolha diferentes tamanhos de tela

## 📧 Contato & Suporte

Para dúvidas sobre a LP, personalizações ou bugs:

- **WhatsApp:** [Enviar mensagem](https://wa.me/5511992908488)
- **Email:** Através do formulário da LP
- **Issues GitHub:** Abra uma issue neste repositório---

## 📊 Métricas de Sucesso da LP

### KPIs Monitorizados
- 📊 Taxa de clique nos CTAs (alvo: >5%)
- 💬 Conversões via WhatsApp (alvo: >2%)
- ⏱️ Tempo médio na página (alvo: >2min)
- 📱 Taxa de bounce mobile vs desktop
- 🔄 Retorno de visitantes (alvo: >15%)

### Como Rastrear

1. **Google Analytics 4:**
   - Adicione o script GA4 no `<head>` de ambas as versões
   - Configure eventos customizados para cliques em CTAs
   - Monitore comportamento por dispositivo

2. **Hotjar (Opcional):**
   - Veja heatmaps de cliques
   - Gravações de sessões reais
   - Feedback de usuários

3. **Meta Pixel (Facebook):**
   - Rastreie conversões em anúncios
   - Configure públicos customizados para retargeting

## 🤝 Contribuir

Se encontrou um bug ou tem sugestões:

1. Abra uma [Issue](https://github.com/marcel-alonso/ctb/issues)
2. Descreva o problema/sugestão
3. Inclua prints ou exemplos
4. Aguarde feedback

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente.
Para uso comercial, entre em contato via WhatsApp.

## ✅ Checklist de Deployment

Antes de publicar a LP em produção:

- [ ] Verificar todos os links WhatsApp funcionam
- [ ] Testar formulário em mobile e desktop
- [ ] Revisar preços e promoção vigente
- [ ] Verificar imagens carregam corretamente
- [ ] Testar em diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Validar HTML com W3C Validator
- [ ] Testar speed com PageSpeed Insights
- [ ] Configurar Google Analytics
- [ ] Ativar HTTPS (automático no GitHub Pages)
- [ ] Verificar meta tags (Open Graph, Twitter Card)

---

_Última atualização: 16 de Fevereiro de 2026_  
_Versão: 2.0 - Landing Page Otimizada para Conversão_