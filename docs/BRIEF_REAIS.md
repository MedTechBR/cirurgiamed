# Brief — questões de prova real para o CirurgiaMed

Você recebe um lote de questões extraídas VERBATIM de cadernos oficiais públicos (ENARE pré-requisito em
Cirurgia Geral/EBSERH-FGV, USP/FUVEST Especialidades Cirúrgicas, Revalida/INEP). O gabarito (`gab`, índice
0-based) é o OFICIAL DEFINITIVO e já foi conferido contra o PDF. Seu trabalho: triar e escrever os campos
editoriais. O app é de estudo de CIRURGIA GERAL (título do CBC, R+ cirúrgico, concursos, residentes).

## 1. Triagem — INCLUIR ou DESCARTAR

Quase tudo entra: a prova é de cirurgia e o app aceita a prova inteira, inclusive as questões de clínica,
anestesia, pediatria cirúrgica, urologia, vascular, ginecologia cirúrgica e ética que a banca pôs nela.
DESCARTE (registre o motivo) só quando:
- o gabarito oficial contraria a diretriz VIGENTE hoje (outubro de 2026). Diga qual diretriz e o que mudou;
- o texto saiu truncado/embaralhado ou depende de figura que não está no texto;
- tem mais de uma resposta defensável.
Na dúvida razoável sobre o gabarito, MANTENHA (é o oficial) e explique a controvérsia no `coment`.

## 2. Campos de cada questão incluída

- `q` e `alts`: COPIE EXATAMENTE. Única exceção: artefato evidente de extração. Nunca reescreva.
- `gab`: mantenha. NUNCA altere.
- `tema`: um id de `taxonomia.js`: bases, periop, complic, infeccao, critico, trauma (atendimento inicial,
  TCE, TRM, face, pescoço, extremidades, populações especiais), tronco (tórax, abdome, pelve, vascular e
  geniturinário no trauma, controle de danos), queimados, abdome (abdome agudo), hernias, esofago (esôfago,
  estômago, duodeno, bariátrica), hemorragia, hepatobiliar (fígado, vias biliares, baço), pancreas,
  intestino (delgado, cólon, reto, ânus), endocrina (tireoide, paratireoide, adrenal, glândulas salivares,
  massas cervicais), onco (princípios oncológicos, pele, melanoma, sarcoma, plástica, mama), especialidades
  (tórax não traumático, vascular, urologia, pediátrica, transplantes, e o que for de outra especialidade),
  etica. Questão de clínica pura que a banca pôs na prova: o tema cirúrgico mais próximo (ex.:
  hidroeletrolítico → bases; sepse → critico; anticoagulação perioperatória → periop).
- `sub`: um subtema EXATO do `sub` da área em `taxonomia.js` (o mais próximo).
- `cenario`: amb, emg, cc (centro cirúrgico), enf (enfermaria/pós-operatório), uti.
- `comp`: dx (diagnóstico), tto (indicação e tática cirúrgica/conduta), urg (urgência e trauma),
  prev (complicações e seguimento), bas (bases, anatomia, fisiologia).
- `nivel`: r1, r2, r3, tit. Revalida costuma ser r1/r2; ENARE e USP cirúrgico, r2/r3/tit.
- `base`: diretriz/consenso/livro que sustenta a resposta, com NOME e ANO (4 dígitos), versão VIGENTE.
  Ex.: "Tokyo Guidelines 2018", "WSES Jerusalem guidelines (apendicite), 2020", "ATLS 11ª ed., 2025",
  "HerniaSurge International Guidelines, 2018", "ACG Guideline Acute Pancreatitis, 2024",
  "ATA 2025 (câncer diferenciado de tireoide)", "AJCC 8ª ed., 2017". Para anatomia, fisiologia e técnica
  sem diretriz: a bibliografia do edital COTECIG — "Sabiston Tratado de Cirurgia, 21ª ed., 2023",
  "Schwartz's Principles of Surgery, 11ª ed., 2019", "Tratado de Cirurgia do CBC, 3ª ed., 2023".
  Não invente sigla nem ano: em dúvida, confira (WebSearch/WebFetch).
- `coment`: 150 a 800 caracteres, português, explica POR QUE a oficial está certa e o raciocínio, citando
  o critério ou número decisivo e a fonte. Tom de manual, frases diretas.
- `porAlt`: uma frase por alternativa, na MESMA ordem de `alts`, cada uma com mais de 20 caracteres. A da
  correta começa com "Correta: ". As demais dizem por que estão erradas.
- `fonte`: copie o objeto recebido.

Escrita (coment e porAlt): **sem travessão (—, –)**; sem emoji; sem "é importante ressaltar"; sem markdown.
Rigor: número, dose, corte, classificação só conferidos (fonte + ano). Nada de memória.

## 3. Saída

Escreva DOIS arquivos (e só eles):
1. `lotes-questoes/leva<NNN>-reais-<sufixo>.json`: lista JSON das incluídas, cada uma com as chaves
   q, alts, gab, tema, sub, cenario, comp, nivel, base, coment, porAlt, fonte (nesta ordem).
2. `provas-reais/relatorios/<sufixo>.json`: `{"incluidas": N, "descartadas": [{"id":..., "motivo":...}]}`.

Antes de terminar rode:
`python3 -c "import json;d=json.load(open('<arquivo da leva>'));assert all(len(x['porAlt'])==len(x['alts']) and len(x['coment'])>=150 and any(c.isdigit() for c in x['base']) and '—' not in x['coment']+''.join(x['porAlt']) for x in d);print(len(d))"`
e corrija o que falhar. Não edite banco.js, leituras nem outros arquivos. Não rode monta_banco.py.
Cota: no máximo 8 WebSearch (prefira WebFetch direto em fonte conhecida). Resumo final: incluídas, descartadas por motivo, e todo gabarito oficial que
você achou discutível mas manteve (com o porquê).
