# Brief para escrever uma monografia do CirurgiaMed (versão 07/10/2026)

CirurgiaMed é a plataforma de estudo de **Cirurgia Geral** do MedTech (`~/Documents/Claude/cirurgiamed/`,
no ar em medtechbr.com.br/cirurgiamed/). É irmã do ClínicaMed e herda dele a arquitetura e o formato das
leituras. Público: candidato ao **título de especialista em Cirurgia Geral (COTECIG/CBC 2026)**, ao
**ENARE pré-requisito em Cirurgia Geral** (R+ para aparelho digestivo, coloproctologia, oncológica,
torácica, vascular, plástica, pediátrica, cabeça e pescoço, urologia, trauma...), a concursos de
cirurgião geral, e o residente de cirurgia estudando. O dono é o Matheus, médico; ele exige textos de
**nível monografia**, comparáveis à diretriz, não resumo de cursinho.

## Modelos (só leitura, NÃO edite nada lá)

Leia antes de escrever, em `~/Documents/Claude/clinicamed/leituras/`:
- `choque.html` (monografia de diretriz)
- `parada-cardiaca.html` (monografia com 4 fluxogramas)
- `dor-toracica.html` (abordagem sindrômica)

Copie a estrutura e o cabeçalho deles. O CSS/JS das leituras já existe aqui em `leituras/_leitura.css`
e `leituras/_leitura.js` (idênticos). Cabeçalho: as 4 primeiras linhas de `choque.html`
(meta charset, viewport, title, `<link rel="stylesheet" href="_leitura.css?v=1"><script src="_leitura.js?v=1"></script>`).

## Bibliografia oficial (Edital COTECIG 2026, item 16) e diretrizes

A prova do CBC é "baseada nas referências bibliográficas": Sabiston 21ª ed. (2023), Schwartz 11ª ed.
(2019), Current Surgery 16ª ed. (2025), Tratado de Cirurgia do CBC 3ª ed. (2023), Manual do Residente
do CBC (2022), Mattox Trauma 9ª ed. (2020), Blumgart 7ª ed. (2022), Hérnias da parede abdominal (UFG
2025), ACERTO 4ª ed. (2020), Tratado Brasileiro de Cirurgia Oncológica (2022), PROACI ciclos 10–22.
Você não tem esses livros; use **diretrizes e consensos primários vigentes em outubro de 2026**,
conferidos na web (fonte + ano), por exemplo: ATLS 11ª ed. (2025), Tokyo Guidelines 2018, ASGE 2019
coledocolitíase, Atlanta revisada 2012 + ACG 2024 / IAP-APA pancreatite, WSES (apendicite 2020,
diverticulite 2020, obstrução por bridas 2017, isquemia mesentérica 2022, trauma abdominal/pélvico,
controle de danos), HerniaSurge 2018 + atualização 2023, EHS, ERAS Society, CDC/OMS 2017 infecção de
sítio cirúrgico, ASHP/IDSA 2013 profilaxia, ATA 2025 tireoide, NCCN/AJCC 8ª ed. estadiamento, ABA/ISBI
queimados, Baveno VII/VIII, ESGE/ACG hemorragia. **Nunca escreva número, dose, corte ou classificação
de memória.** Se não confirmou, não escreva o número; anote "a conferir" no relatório.

## Regras de conteúdo

1. **Tamanho:** 4.500–6.000 palavras (monografia); 3.500–5.000 (abordagem sindrômica ou tema amplo).
   Conte com `sed 's/<[^>]*>/ /g' arquivo.html | wc -w`.
2. **Cirurgia de verdade:** além de diagnóstico e conduta, cubra **indicação cirúrgica, via de acesso,
   tática e técnica nos passos que caem em prova** (ex.: Lichtenstein × TEP × TAPP; colecistectomia
   e visão crítica de segurança de Strasberg; Hartmann × anastomose primária), **anatomia aplicada**
   (nervos da região inguinal, triângulo de Calot, espaços de risco) e **complicações** com manejo.
3. Classe/nível ou força da recomendação **transcritos da fonte** em `table.rec`
   (`span.cls c1/c2a/c2b/c3` + `span.niv`; para GRADE, use os rótulos forte/fraca/boa prática).
   Nunca invente classe.
4. Português do Brasil, prosa de médico para médico, dizendo o que muda a conduta e por quê.
5. **Escrita (o Matheus reprova "cara de IA"):** sem travessão (— ou –) em prosa, título e legenda (só
   em célula vazia de tabela e rótulo de mermaid); sem emoji; sem "é importante ressaltar/vale destacar/
   neste contexto/não é X, é Y"; sem frase-aforismo de fechamento; títulos e h2 são **substantivos**
   ("Hérnia femoral", não "Hérnia femoral: a que estrangula"); dek diz o que o texto cobre e por qual
   fonte. Negrito com parcimônia.

## Estrutura do HTML

```html
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Título</title>
<link rel="stylesheet" href="_leitura.css?v=1"><script src="_leitura.js?v=1"></script>
<div class="wrap">
<p class="kicker">Área · NN min · Fonte ANO · monografia</p>
<h1>Título</h1>
<p class="dek">O que o texto cobre e por qual fonte.</p>
<nav class="toc"><b>Sumário</b><ol><li><a href="#id">Seção</a></li>…</ol></nav>
<h2 id="id">Seção</h2>
…
<h2 id="armadilhas">Erros frequentes</h2>
<h2 id="autoteste">Perguntas de revisão</h2>
<a class="vaiQuestoes" href="../index.html?area=AREA#questoes">Treinar questões de …</a>
<footer><b>Fontes primárias</b><ol><li>Citação completa com ano (e doi quando houver).</li></ol></footer>
</div>
```
h2 **sem numeração**, todo h2 com id e presente no sumário na mesma ordem e texto.

Componentes (em `_leitura.css`): `table.rec`, `table.criterio`, `div.rolagem>table`, `div.cx chave|armadilha|fonte|nota`,
`div.ancora` (Questão-âncora com `<details>`), `div.sind` (3 blocos: O que perguntar / O que examinar / O que pedir),
`div.compara`, `div.dose`, `ol.passos`, `<details><summary>` no autoteste.

**Fluxogramas (mínimo 2):**
```html
<div class="fluxo"><div class="leg"><b>Fluxograma 1</b>Legenda curta</div>
<pre class="mermaid">
flowchart TD
  A["Rótulo entre aspas"] --> B{"Pergunta?"}
  B -->|"sim"| C["Ação"]
</pre></div>
```
Rótulos entre aspas, `<br/>` para quebra, sem parênteses ou vírgula fora das aspas, `flowchart TD`, no
máximo 3 nós lado a lado (largura ≤ ~720 px).

**Figuras:** não copie imagem de livro, PDF, diretriz ou web (direito autoral; app público e pago).
Esquemas existentes em `leituras/fig/`: `rx-pneumoperitonio`, `rx-pneumotorax`, `rx-pneumotorax-deitado`,
`rx-derrame`, `rx-derrame-volume`, `rx-tubos`, `us-modo-m`, `us-linhas-b` (uso:
`<figure class="fig"><div class="zoom"><img src="fig/NOME.svg" alt="…"></div><figcaption><b>Figura N.</b> …</figcaption></figure>`).
Esquema anatômico ou tático simples (ex.: orifício miopectíneo, triângulos da região inguinal, zonas
do pescoço, zonas do retroperitônio, regra dos 9) pode ser **SVG inline** desenhado por você:
fonte `-apple-system,system-ui,sans-serif`, cores `var(--ink)`, `var(--ink2)`, `var(--brand)`,
`var(--linha)`, `var(--ok)`, `var(--err)`; texto de SVG não quebra linha, quebre à mão e confira que
nada vaza do viewBox.

## Operação

- **Escreva por seções:** crie o arquivo com cabeçalho + primeira seção e acrescente uma seção por vez
  (≤ ~900 palavras por acréscimo). Nunca um Write gigante.
- **Cota: no máximo 12 WebSearch** por monografia (teto da sessão). Prefira WebFetch direto em PubMed/PMC,
  site da sociedade (wses.org.uk, facs.org, tg18 no JHBPS etc.).
- Rascunhos só em `/private/tmp/claude-501/-Users-matheusparente/bb6ce523-865e-4d81-9c8d-cd1fea0d6a74/scratchpad/mono-<slug>/`.
- Escreva SÓ `leituras/<slug>.html` e `leituras/_entradas_<slug>.json`:
  ```json
  [{"f":"<slug>.html","tipo":"WSES 2020 · monografia","area":"abdome","min":60,
    "t":"Título","s":"Resumo de duas a quatro linhas, igual ao dek."}]
  ```
  `min` = palavras ÷ 80. `area` é um id de `taxonomia.js`.
- Ao fim: `python3 valida_leituras.py` (0 erros no seu arquivo).
- **Não toque** em `leituras.js`, `index.html`, `CLAUDE.md`, `sw.js`, `banco.js`, nem em nada do ClínicaMed.
  Não rode `bump.py`, não faça commit nem push.
- Relatório final curto: arquivo, palavras, fluxogramas, figuras, fontes usadas com ano, e tudo que
  ficou "a conferir".
