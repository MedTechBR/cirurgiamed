# CirurgiaMed — plataforma de estudo de Cirurgia Geral

Criado em 07/10/2026 a pedido do Matheus: "expandir nossa plataforma de estudos para outras áreas;
agora cirurgia, voltada para prova de subespecialidade cirúrgica, concursos da área, processos
seletivos". É um **fork do ClínicaMed** (`~/Documents/Claude/clinicamed/`): mesma arquitetura, mesmo
layout (camada viva), mesmo motor de conta e sincronização, mesmas defesas. **Leia o CLAUDE.md do
ClínicaMed** para tudo o que é comum (armadilhas de chave por conteúdo, Fisher-Yates, viés de tamanho,
service worker e `bump.py`, `.nojekyll`, servir com charset, regras de escrita "sem cara de IA",
formato monografia das leituras). Este arquivo registra só o que é PRÓPRIO daqui.

Repo `MedTechBR/cirurgiamed` (público, como o ClínicaMed), no ar em medtechbr.com.br/cirurgiamed/.

## Públicos e provas
- **Título de especialista em Cirurgia Geral (COTECIG/CBC 2026)** — edital em `docs/edital-cotecig-2026.pdf`
  (+ `.txt`). 1ª fase ON-LINE: 100 questões de **4 alternativas**, 4 h, **sem voltar à questão anterior**;
  habilita quem tem ≥50 pontos E ≥70% da maior nota. 2ª fase presencial (28/11/2026): arguição oral em
  bancas de 25 min (até 80 pontos) + procedimentos simulados (até 20), aprovação com 70.
  O CBC NÃO publica caderno: questão de título é autoral.
- **ENARE pré-requisito em Cirurgia Geral** (FGV/EBSERH): 80 questões, 5 alternativas, 5 h. É UMA prova só
  para todos os programas cirúrgicos com pré-requisito (aparelho digestivo, coloproctologia, oncológica,
  torácica, vascular, plástica, pediátrica, cabeça e pescoço, mão, urologia, mastologia, área de atuação
  em trauma). Cadernos públicos → questões reais com `fonte`.
- Concursos de cirurgião geral e residentes de cirurgia: mesmo banco.

## Taxonomia (`taxonomia.js`)
19 áreas que agrupam os 63 itens do conteúdo programático do COTECIG (3 partes), mais "especialidades"
(tórax, vascular, urologia, pediátrica, transplantes), que o ENARE cobra e o edital do CBC não lista.
ids curtos, sem hífen (o `valida_leituras.py` casa área com `\w+`): bases, periop, complic, infeccao,
critico, trauma, tronco, queimados, abdome, hernias, esofago, hemorragia, hepatobiliar, pancreas,
intestino, endocrina, onco, especialidades, etica. Pesos somam 100 e são ESTIMATIVA: recalibrar pela
classificação das provas reais. Cenários: amb, emg, cc (centro cirúrgico), enf, uti. Competências: dx,
tto (indicação e tática), urg, prev (complicações e seguimento), bas (bases e anatomia).

## O que mudou em relação ao ClínicaMed
- Identidade: azul **#33479E** (escuro #9AAAF0), ícone de bisturi (`gera_icones.py`). Prefixo de dados
  `cg_`, caches `cg-vN`/`cg-fontes-v1`/`cg-livros-v1`, IndexedDB `cg-db`, app id `cirurgiamed` no mtsync e
  no mtsinal, porta local 8712.
- Simulado: formatos `cotecig` (100 q, 4 h, sem voltar nem pular: a próxima só libera com resposta) e
  `enare` (80 q, 5 h, 1,25/questão) e treino curto. Corte exibido: 50 no COTECIG (com o aviso da regra dos
  70% da maior nota), referência 70 no ENARE (classificatório).
- Prática = arguição oral da 2ª fase (estações de 25 min, eixos Conhecimento / Técnica e habilidade /
  Atitude e segurança, soma 5,0 por estação).
- **Turma**: o código existe, mas a função de backend `cirurgiamed` NÃO existe; a aba fica escondida.
  Se o Matheus quiser coordenação de residentes aqui, clonar `MedTech/backend/functions/clinicamed.js`.
- **Sinalizar questão**: o backend (`MedTech/backend/functions/sinal.js`, lista `APPS`) precisa conhecer
  `cirurgiamed`; sem deploy da função, a sinalização fica na fila local.

## Pendências do lançamento (07/10/2026)
- O banco autoral nasce com uma AMOSTRA para o Matheus aprovar o padrão antes de escalar (regra do
  template de app de estudo: "não gere 500 antes de eu ver 10").
- Figuras: nenhuma imagem de terceiros. Esquemas em SVG inline nas leituras.
