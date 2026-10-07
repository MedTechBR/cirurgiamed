# Provas reais — de onde saíram (07/10/2026)

Saída: `provas-reais/cand_cir.json` com **378 questões** no formato `{id, q, alts, gab, fonte}`.
`gab` é o índice 0-based do gabarito OFICIAL DEFINITIVO (ou retificado). Os PDFs ficam em
`provas-reais/` (fora do git). Os campos editoriais ainda não existem: a triagem e a escrita vêm depois.

## Tabela

| Prova (id) | Caderno | Gabarito | Extraídas | Descartadas |
|---|---|---|---|---|
| ENARE 2025/2026, pré-requisito em Cirurgia Geral (`en25-cg-NN`) | storage.googleapis.com/website-enare-2025/assets/provas/res-med/pre-req/p3e078-pre-requisito-cirurgia-do-aparelho-digestivo-p3e078-tipo-1.pdf (Tipo 1) | storage.googleapis.com/website-enare-2025/assets/provas/gabaritos/enare2025-medicos-gabarito-definitivo-pre-requisito.pdf, p. 5, "Residência Médica - Pré-requisito - Cirurgia do Aparelho Digestivo - 1 - Turno Tarde" | 80 de 80 | 0 (nenhuma anulada) |
| ENARE 2024/2025, pré-requisito em Cirurgia Geral (`en24-cg-NN`) | mapa-vagas-enare-ebserh.conhecimento.fgv.br/provas-gabaritos/medica/pre-requisito/PRE-REQUISITO - CIRURGIA DO APARELHO DIGESTIVO (PRCIAPDIT01).pdf (Tipo 1) | mapa-vagas-enare-ebserh.conhecimento.fgv.br/provas-gabaritos/medica/ENARE 2024 Gabarito Definitivo - Medica.pdf, p. 35, "Pré-Requisito - Cirurgia do Aparelho Digestivo - TIPO 1" | 78 de 80 | 2 anuladas (58, 78) |
| USP 2025, Especialidades Cirúrgicas, parte comum 1–100 (`usp25-cir-NN`) | fuvest.br/wp-content/uploads/2024-12-01_rm2025_prova-especialidadescirurgicas_area-064-cirurgiadoaparelhodigestivo_grupo-c1.pdf | fuvest.br/wp-content/uploads/2024-12-01_rm2025_gabarito-especialidadescirurgicas_retificacao.pdf (PROVA C1) | 66 de 100 | 31 figura, 3 anuladas (16, 98, 99) |
| USP 2025, parte específica 101–120 do C1 (`usp25-cad-NNN`) | idem (C1 = Aparelho Digestivo; o C6 Coloproctologia tem as mesmas 20) | idem | 6 de 20 | 14 figura |
| USP 2026, Especialidades Cirúrgicas, parte comum 1–100 (`usp26-cir-NN`) | fuvest.br/wp-content/uploads/rm2026-prova-EC1-especialidadescirurgicas-aparelhodigestivo.pdf | fuvest.br/wp-content/uploads/rm2026-gabarito-EC-especialidades-cirurgicas-retificado.pdf (PROVA EC1, retificado em 15/12/2025) | 70 de 100 | 29 figura, 1 anulada (84) |
| USP 2026, parte específica 101–120 do EC1 (`usp26-cad-NNN`) | idem (EC6 Coloproctologia = EC1) | idem | 4 de 20 | 16 figura |
| Revalida (INEP) descartadas pelo ClínicaMed (`cm-<id original>`) | os mesmos cadernos de `clinicamed/docs/PROVAS_REAIS.md` | idem | 74 | ver abaixo |

`fonte`: ENARE `{"banca":"ENARE (EBSERH/FGV)","ano":2025|2024,"prova":"Pré-requisito em Cirurgia Geral 2025/2026|2024/2025"}`;
USP `{"banca":"USP (FUVEST)","ano":2024|2025,"prova":"Especialidades Cirúrgicas 2025|2026"}` (ano = ano da APLICAÇÃO:
a edição 2025 foi aplicada em 01/12/2024, a 2026 no fim de 2025; o ClínicaMed tinha usado o ano da edição);
Revalida `{"banca":"Revalida (INEP/MEC)","ano":N,"prova":"Revalida 2023.1"}` etc. O app mostra
`banca sem parênteses + prova`, ex. "ENARE Pré-requisito em Cirurgia Geral 2025/2026".

## Peculiaridades dos servidores e dos cadernos

- **ENARE 2025/26**: todos os pré-requisitos cirúrgicos (Aparelho Digestivo, Oncológica, Pediátrica, Plástica,
  Torácica, Vascular, Coloproctologia, Urologia) fazem a MESMA prova de 80 questões: os cadernos p3e078, p3e083
  (vascular) e p3e096 (urologia) foram comparados questão a questão (80/80 iguais) e as oito linhas do
  gabarito são idênticas. Exceções: Cirurgia da Mão (prova própria) e Cabeça e Pescoço (só 1–40 comuns).
  O cabeçalho do gabarito diz "prova aplicada no dia 19/10/2024", erro de digitação da FGV (a edição
  2025/2026 foi aplicada em 19/10/2025; a 2024/2025, em 20/10/2024).
  `trauma.pdf` (área de atuação Cirurgia do Trauma) NÃO é a mesma prova (67/80 iguais) e não foi usado.
- **ENARE 2024/25**: cadernos de Aparelho Digestivo, Vascular e Urologia comparados (80/80 iguais) e gabarito
  idêntico em Aparelho Digestivo, Oncológica, Pediátrica, Plástica, Torácica, Vascular e Urologia.
  Coloproctologia, Endoscopia e Mastologia têm OUTRO gabarito em 2024 (não usado). Tipo do caderno
  (rodapé "Tipo 1 – PRCiApDiT01") confere com a linha "TIPO 1" do gabarito.
- **Gabarito ENARE por geometria**: palavras do PyMuPDF agrupadas por Y; linha de 20 números seguida de linha
  de 20 letras; número e letra casados pelo centro X (tolerância 8 pt). Conferido por um segundo método
  (pdftotext -layout): zero divergências.
- **USP**: cada especialidade cirúrgica tem caderno próprio (C1–C7 em 2025, EC1–EC7 em 2026) com 120 questões
  de 4 alternativas: 1–100 são comuns a todas (conferido C1×C5 e EC1×EC5, 100/100 iguais) e 101–120 são da
  especialidade. O gabarito tem uma página por caderno; as colunas 1–100 são iguais nas sete.
  Os nomes de 2025 não seguem o padrão do ClínicaMed (`..._grupo-c1.pdf` com `area-064-...`); a lista está
  em fuvest.br/acervo-residencia-coreme-sp-2025/ e -2026/. Os PDFs de 2025 têm 15–20 MB (imagens).
- **Retificação USP 2025**: a letra antiga aparece riscada em vermelho ao lado da nova (desenho vetorial).
  O leitor detecta o traço vermelho sobre a letra: 9 D→C, 10 C→D, 54 A→D; 16, 98 e 99 viraram anuladas.
  Nenhuma questão com duas respostas aceitas em 2025 ou 2026.
- **Figuras USP**: imagens do caderno viram a marca `[[IMAGEM]]` na posição de leitura; toda questão que a
  contém foi descartada (46 de 120 em 2025, 45 em 2026). Nenhuma questão sem a marca cita imagem/figura.

## Correções e armadilhas da extração

- `docs/colunas_pdf.py` manda as linhas de largura cheia para o topo da página; o USP mistura uma e duas
  colunas na mesma página. Usada uma variante que lê em faixas verticais (esquerda, direita, linha cheia).
- **Bug do `extrai_prova.py`**: os padrões `^\d{1,2}$`, `^\(?\d+\)?$` e `^\d{4}$` do LIXO apagam qualquer linha
  só com número. Em texto justificado e em tabelas isso some com dados: "de [6] cm", "em [48] horas",
  "de [55] anos", "PTH 125", "Vitamina D 35". Aqui os padrões foram retirados (não há número de página
  solto nesses cadernos). **No ClínicaMed o mesmo bug tirou números de candidatas**: rev2021_pv#31 (16),
  rev2021_pv#86 (27 anos), rev2023_1_pv#27 (6 meses), rev2023_1_pv#77 (120 bpm), rev2025_1_pv#75 (35 anos),
  rev2026_1_pv#9 (8 anos), rev2026_1_pv#40 (10 mg/dia), rev2026_1_pv#20 (tabela). Vale conferir as que
  entraram no banco de lá.
- **Hífen de fim de linha**: o original apaga o hífen ("anti-hipertensivos" → "antihipertensivos"). Nos
  cadernos FGV e USP não há hifenização silábica (todas as junções eram compostas: pronto-socorro,
  pós-operatório, beta-hCG, imuno-histoquímica), então o hífen foi mantido. Nas `cm-` restauradas no PDF:
  pós-operatório, “dedo-de-luva”, propedêutico-terapêutica, ântero-superior, pré-hospitalar, Encontra-se,
  Pós-Operatória.
- Glifos SymbolMT da FGV: `` → °, `` (enfeite do rodapé) removido. "oC" → "°C" e "3.o" → "3.º" nas
  `cm-`; m2/mm3 → m²/mm³ em todas.
- Duas tabelas das `cm-` saíram com células trocadas e foram refeitas pela leitura do PDF:
  rev2025_1_pv#2 ("Temperatura axilar 36,5 °C") e rev2025_2_pv#24 (Urina / Hemácias / Beta-hCG).
- Mantidos por serem do caderno: "decorado 4x/4" e "INR: 1, P" (USP 2026 Q1, de toda forma descartada por
  figura), "aspartatoaminotransferase" e "cortocontuso" (Revalida).

## Questões que o ClínicaMed descartou (`cm-`)

Das 869 candidatas, 377 não estão no banco do ClínicaMed (texto normalizado). Pelo motivo registrado em
`clinicamed/provas-reais/relatorios/*.json` e leitura do texto, 74 entraram: Revalida 2021 (14), 2023.1 (11),
2023.2 (11), 2025.1 (14), 2025.2 (12), 2026.1 (12) — trauma/ATLS, queimados, abdome agudo, vias biliares,
hérnia, proctologia, urologia, perioperatório/ERAS, pequenos procedimentos e cirurgia pediátrica (piloro,
tireoglosso, invaginação, atresias, megacólon, fimose). Ficaram de fora 11 que casaram pelo tema: 2 oftalmo
(rev2023_2_pv#47, rev2025_1_pv#22), 1 ORL/infecção cervical (en25_pr_cardio#62), 3 com figura (rev2023_2_pv#78,
usp25_ecm#13, usp26_aa#38), 1 texto embaralhado (rev2023_1_pv#97), 2 com mais de uma resposta defensável
(rev2026_1_pv#22, #98), 1 clínica (en25_pr_cardio#35, pneumonia) e 1 pediatria/violência (rev2023_1_pv#88).
Nenhuma candidata USP/ENARE de clínica era cirúrgica e utilizável.

## Conferência

- **Texto (todas as 378)**: cada alternativa e cada trecho de 6 palavras do enunciado procurado no texto do
  caderno extraído por outro programa (pdftotext -raw); a alternativa também com a sua letra na frente.
  0 divergências reais (6 alertas eram enunciado comum a duas questões da USP impresso antes do número).
- **Gabarito (todas)**: segundo leitor independente (pdftotext -layout) para ENARE 2025, ENARE 2024, USP 2025
  e USP 2026: 0 divergências.
- **Amostra à vista**: 10 por prova (12 das `cm-`) com a letra oficial lida contra o enunciado (todas
  coerentes, numeração alinhada), mais recortes renderizados do PDF (ENARE 2025 Q69, USP 2026 Q56, USP 2025
  Q54 e Q92, Revalida 2025.1 Q2 e 2025.2 Q24).

## Dúvidas de gabarito (mantidas como estão; para a triagem decidir)

- **usp25-cir-54** (hematúria macroscópica indolor, 85 anos, ex-tabagista): a retificação trocou A (TC com
  contraste) por D (antibiótico empírico e dismorfismo eritrocitário). D contraria a investigação padrão de
  hematúria macroscópica (AUA/SUFU Microhematuria 2025, EAU) — forte candidata a descarte editorial.
- **cm-rev2025_1_pv-92** (HPB refratária, RTU): o ClínicaMed apontou que PSA 3,1 ng/mL em uso de finasterida
  equivale a ~6,2 ng/mL, o que tornaria a biópsia defensável.
- **en25-cg-47** (artéria hepática média "ramo da hepática esquerda"): a origem é variável na literatura
  (direita ou esquerda em proporções próximas).
