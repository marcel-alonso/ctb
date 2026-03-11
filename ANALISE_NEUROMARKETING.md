# Análise de Neuromarketing e Jornada Psicológica: Forros de Bambu

## 1. O Ponto de Partida (Mindset do Cliente)
O cliente que chega nesta Landing Page **já tem o desejo**. Ele já olhou para a sua varanda, pergolado ou área gourmet e imaginou um forro de bambu. O trabalho desta LP **não é** convencer o cliente de que o bambu é bonito; é convencê-lo de que **nós somos a única escolha segura e premium para executar esse desejo.**

**Estado Atual:** Desejo alto + Nível de ansiedade/medo moderado a alto (medo de obra, dor de cabeça, cupim, atrasos).

## 2. A Estrutura da Narrativa (Jornada do Usuário)

### A. Validação e Conexão (O Hook)
* **Psicologia:** Efeito Halo e Validação. Confirmar o bom gosto do cliente e focar no resultado final, não no processo doloroso.
* **Mensagem Oculta:** "Seu ambiente merece o melhor acabamento. Você já sabe o que quer, e nós materializamos isso."
* **Componente LP:** `Hero.jsx` focado no visual de altíssimo padrão, com a promessa imediata de "Orçamento Express 12h". Reduz a ansiedade de "será que eles vão me responder?".

### B. Remoção do Atrito (Aliviando a Dor)
* **Psicologia:** Aversão à Perda (Loss Aversion). As pessoas têm mais medo de ter dor de cabeça com obra do que desejo pelo teto bonito.
* **Mensagem Oculta:** "Você não vai ter dor de cabeça. Nossa execução é clínica, rápida e limpa."
* **Foco:** Bater de frente com os fantasmas da construção civil (pedreiro que some, sujeira infinita, material que apodrece). Mostrar que entregamos paz de espírito.

### C. A Construção Inabalável de Autoridade (Heurística da Autoridade)
* **Psicologia:** Prova Social + Viés de Autoridade.
* **Mensagem Oculta:** "Não somos amadores que mexem com bambu. Somos especialistas premium."
* **Componente LP:** `ProvaVisual.jsx` (Números +200 projetos) e a seção de Diferenciais (`Autoridade`). Falar de engenharia, tratamento do material, medidas exatas, garantia.

### D. O Mapa Claro (Ilusão de Controle)
* **Psicologia:** Paradoxo da Escolha e Clareza Cognitiva. Quando o cliente sabe exatamente o que vai acontecer, a ansiedade cai a zero e a conversão dispara.
* **Mensagem Oculta:** "É muito mais fácil do que você imagina."
* **Componente LP:** Seção `ComoFunciona`. Step 1 (Foto) -> Step 2 (Orçamento) -> Step 3 (Instalação Limpa). Simples, 3 passos mágicos.

### E. O Overdelivery (Encantamento)
* **Psicologia:** Reciprocidade e Viés de Confirmação.
* **Mensagem Oculta:** "Nós entregamos mais do que apenas estética. Entregamos conforto térmico, acústico e durabilidade para a vida toda."
* **Componente LP:** Detalhes nos cards de benefício (redução de temperatura, vida útil prolongada).

## 3. Diretrizes Práticas de Design & Copy
1. **Foco EXCUSIVO em Forros:** Tudo na página grita "FORROS". Nenhuma menção a outros serviços que dispersem a atenção.
2. **Estética Premium (Efeito "UAU"):** Fotos em altíssima resolução, muito espaço em branco, tipografia limpa, gradientes sutis, animações suaves. A página tem que parecer cara para justificar o valor e anestesiar a sensibilidade a preço.
3. **CTAs de Baixa Fricção:** Em vez de "Compre Agora", usamos "Quero meu orçamento sem compromisso". O próximo passo seguro.

## 4. Próximos Passos na LP `terrabambu-lp`
* Refatorar/Refinar o `Hero` e `ProvaVisual` para refletir esse tom.
* Criar seção de `Dor x Resolução`.
* Criar seção de `Autoridade/Benefícios` com foco em "Execução Sem Dor de Cabeça".
