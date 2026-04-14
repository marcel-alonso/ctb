# 🌿 Case Study: Spec-Driven Development (SDD) & Agentic AI
**Terra Bambu Ecosystem — Premium Landing Page v2**

Este repositório é um **Estudo de Caso "Padrão Ouro"** demonstrando a criação de um ecossistema digital amplo usando Spec-Driven Development (SDD) integrado a robôs guiados por inteligência artificial (Agentic AI). 

O projeto representa a evolução da **Conexão Terra Bambu** de uma executora de obras para uma **plataforma de autoridade e cultura ecológica**, abrangendo Landing Pages de Alta Performance, Plataforma Institucional e um Blog voltado a SEO de cauda longa.

---

```mermaid
graph TD
    A["🌿 Conexão Terra Bambu"] --> B["🏗️ Obras e Projetos"]
    A --> C["📚 Educação e Autoridade"]
    A --> D["🛒 Marca e Produtos"]
    A --> E["👥 Escala e Times"]

    B --> B1["Forros de Bambu (Funil de Alta Performance)"]
    B --> B2["Parque Ecológico Infantil"]
    B --> B3["Projetos Sob Medida"]

    C --> C1["Curso: O Caminho do Bambu"]
    C --> C2["E-books Técnicos"]
    C --> C3["Blog SEO: Autoridade Local"]
```

*(O gráfico acima reflete todas as frentes que este repositório visa atender de forma independente, modular, mas unificada)*

---

## 🎨 O Resultado (Vitrine)

A arquitetura orientada resultou em um design premium ("apple-like"), respeitando diretrizes rígidas de branding e performance.

<table>
  <tr>
    <td align="center"><b>Hero Header</b></td>
    <td align="center"><b>Design Emocional (Apresentação)</b></td>
  </tr>
  <tr>
    <td><img src="docs/showcase/hero.png" width="400"></td>
    <td><img src="docs/showcase/prova-visual.png" width="400"></td>
  </tr>
  <tr>
    <td align="center"><b>Soluções & Interatividade</b></td>
    <td align="center"><b>FAQ Fluido</b></td>
  </tr>
  <tr>
    <td><img src="docs/showcase/produtos.png" width="400"></td>
    <td><img src="docs/showcase/faq.png" width="400"></td>
  </tr>
</table>

**URL de Produção Final:** [conexaoterrabambu.com.br/lp/forros-bambu](https://conexaoterrabambu.com.br/lp/forros-bambu/)

---

## 🧬 Framework de Conversão: A Jornada Emocional

A Landing Page não é apenas código; é uma máquina de vendas estruturada por IA em **5 pilares psicológicos (A Jornada Ouro)** projetados para converter tráfego frio em clientes premium.

<details>
  <summary><b>1️⃣ O Despertar (Hero Emocional)</b> ✨ <i>(Clique para expandir)</i></summary>
  <blockquote>
    A primeira tela evita o jargão técnico. Focamos no <b>resultado emocional</b> (<em>"Conforto térmico e design orgânico"</em>) suportado por um fundo imersivo em <i>Parallax</i>. O CTA principal é uma <b>"Semente de Ação"</b> de baixo atrito ("Solicitar Orçamento Grátis").
  </blockquote>
</details>

<details>
  <summary><b>2️⃣ O Desejo (Prova Visual e Status)</b> 🏆 <i>(Clique para expandir)</i></summary>
  <blockquote>
    Imediatamente após a dobra, ancoramos a autoridade. Usamos estatísticas animadas (<i>Framer Motion Counters</i>) como "+3.000m² Transformados" seguidos por um carrossel responsivo. O subconsciente do cliente é impactado por galerias de resorts, spas e áreas gourmet de altíssimo padrão.
  </blockquote>
</details>

<details>
  <summary><b>3️⃣ A Lógica (Soluções Pragmáticas)</b> 🧩 <i>(Clique para expandir)</i></summary>
  <blockquote>
    Apresentação das ofertas em 4 cards com hover-state. Cada card mostra os diferenciais técnicos exatos ("Painel Trançado", "Forro Reto", etc.) linkados a um <b>WhatsApp Parametrizado</b>. A IA de negócios orquestrou os badges de "Tendência" ou "O Mais Escolhido" para gerar <i>Social Proof</i>.
  </blockquote>
</details>

<details>
  <summary><b>4️⃣ A Quebra de Objeções (FAQ Fluido)</b> 🛡️ <i>(Clique para expandir)</i></summary>
  <blockquote>
    O cérebro racional procura motivos para não comprar. O <b>FAQ</b> no estilo Accordion resolve instantaneamente medos clássicos (ex: "Bambu atrai bichos?", "Aguenta Chuva?"), usando animações suaves via React State, mantendo o padrão premium com zero letras miúdas.
  </blockquote>
</details>

<details>
  <summary><b>5️⃣ A Segurança (CTA Final & Trust Signals)</b> 🤝 <i>(Clique para expandir)</i></summary>
  <blockquote>
    O fechamento. Em vez de urgência agressiva, usamos garantia estendida (10 anos) e CNPJ no rodapé. Isso estabelece a transição pacífica para o fechamento assistido via WhatsApp, capturando os últimos Leads do funil.
  </blockquote>
</details>

---

## 🧠 A Filosofia Agentic (The AI Brain)

O grande diferencial deste projeto é como a pasta interna estrita governou o trabalho da IA. Diferente de fluxos onde a IA gera "qualquer código", este repositório possui uma "Constituição", garantindo que **a inteligência artificial mantenha controle absoluto sobre a linguagem da marca, UI tokens e regras restritas**.

As especificações vitais para LPs geradas com IA estão estruturadas no diretório escondido [`/.agents/`](.agents/):

- 📜 **[`.agents/prd.md`](.agents/prd.md)**: Product Requirements Document. Ensina o Agente de IA qual é o funil, o ICP e as metas de conversão do ecossistema.
- ⚖️ **[`.agents/rules.md`](.agents/rules.md)**: Restrições Inquebráveis. Ordem expressa para evitar textos que foquem apenas "na dor" ou que percam a *vibe* premium/orgânica.
- 🧰 **[`.agents/skills/`](.agents/skills/)**: Habilidades Compartimentadas. A pasta `premium-design` obriga a IA a usar exatos tokens (`var(--accent)`), proibindo flex-align desalinhado e forçando o paradigma Mobile-first.
- 📄 **[`.agents/specs/`](.agents/specs/)**: Especificações isoladas que servem de bússola para páginas únicas (ex: `.opts` de deploy).

Essa estrutura forçou os agentes de IA a entregar **Zero Halucinações** em relação a cor e código. A IA trabalhou obedecendo ordens específicas e formatando corretamente todas as 48 variáveis CSS de design.

---

## 💻 Tech Stack & Performance (Nível Premium)

A base tecnológica foi montada pela IA focando em **100/100 Core Web Vitals**:

- **Core & Build LPs**: Vite + React
- **Estilização Global**: Tailwind CSS puramente guiado por CSS Variables (+40 `src/styles/tokens.css`).
- **Blog & Institucional**: Arquivos indexados e arquiteturas prontas para SSG (Static Site Generation), desenhados para atrair SEO Local e capturar leads no topo do funil. 
- **Animações (UX)**: Framer Motion isolado em `src/shared/animations.premium.js` para carregamento leve e padronizado nas páginas React.
- **Ecossistema Otimizado**: Scripts robustos via Node garantindo que artigos do Blog e conversões da Landing Page convivam sem quebrar as hierarquias. Todas as imagens processadas massivamente para WebP em alta velocidade.

---

## 🚀 Road to Level 5 (O Próximo Passo na Governança Agentic)

Embora o ecossistema atual possua uma base robusta sem utilizar CI/CD complexo (deploy nativo pelo GitHub Pages isolado dos Actions para evitar falhas passadas), um "Full Autonomy System" ainda precisaria de alguns toques no escopo aberto:

1. **Testes de Qualidade Finais Automatizados por Agentes (Lighthouse AI QA)**: Um step em que robôs rodam análise de DOM no deploy provisório antes do merge.
2. **Master Cursor Rules**: Uma regra base de `.cursorrules` no root da aplicação ativando e conectando todos os arquivos da pasta `.agents` globalmente, dispensando a necessidade de indicar ao bot de onde ler os dados no início do prompt.
3. **Design Tokens via Style Dictionary**: Em vez da alteração puramente em `.css`, um JSON Master ditando os tokens do projeto (podendo ser injetado facilmente por IA).

---

> © 2026 Conexão Terra Bambu · Todos os direitos reservados.  
> **CNPJ**: 54.340.235/0001-08
