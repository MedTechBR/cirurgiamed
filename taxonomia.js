/* CirurgiaMed — taxonomia do conteúdo.

   Fonte primária: Edital COTECIG 2026 (CBC/AMB, Título de Especialista em Cirurgia Geral),
   item 15 "Conteúdo programático", em três partes (bases, trauma, clínica cirúrgica). O PDF
   está em docs/edital-cotecig-2026.pdf. As áreas abaixo agrupam os 63 itens do edital; os
   `sub` usam os nomes do edital sempre que possível.

   A mesma taxonomia serve ao ENARE pré-requisito em Cirurgia Geral (FGV/EBSERH, 80 questões,
   a MESMA prova para todos os programas cirúrgicos com pré-requisito: aparelho digestivo,
   coloproctologia, oncológica, torácica, vascular, plástica, pediátrica, cabeça e pescoço,
   mão, urologia, mastologia, trauma) e aos concursos de cirurgião geral. Por isso existe a
   área "especialidades": o ENARE cobra cirurgia pediátrica, urologia e vascular que o edital
   do CBC não lista.

   `peso` = incidência esperada numa prova de 100 questões (soma 100). ESTIMATIVA pelo tamanho
   da parte no edital e pela distribuição do ENARE 2025/26; recalibrar quando as provas reais
   estiverem classificadas. */

window.TAXONOMIA=[
{"id":"bases","nome":"Bases da cirurgia","matriz":"Primeira parte","peso":6,"sub":[
 "Correlações anatômicas e técnico-cirúrgicas","Resposta endócrino-metabólica ao trauma",
 "Equilíbrio hidroeletrolítico e ácido-base","Nutrição em cirurgia",
 "Cicatrização e cuidados com a ferida"]},

{"id":"periop","nome":"Perioperatório e anestesia","matriz":"Primeira parte","peso":6,"sub":[
 "Avaliação do risco cirúrgico","Cuidados pré, trans e pós-operatórios","ACERTO e ERAS",
 "Anestesia local e locorregional","Bases da anestesia geral","Instrumentais e materiais",
 "Segurança do paciente","Cirurgia ambulatorial","Cirurgia minimamente invasiva e robótica"]},

{"id":"complic","nome":"Complicações cirúrgicas","matriz":"Terceira parte","peso":5,"sub":[
 "Febre no pós-operatório","Deiscência e evisceração","Fístulas digestivas",
 "Tromboembolismo venoso","Íleo e obstrução pós-operatória","Retenção urinária",
 "Complicações respiratórias","Síndrome compartimental abdominal"]},

{"id":"infeccao","nome":"Infecção e antibióticos em cirurgia","matriz":"Primeira parte","peso":5,"sub":[
 "Infecção de sítio cirúrgico","Antibioticoprofilaxia","Infecção intra-abdominal",
 "Infecção necrotizante de partes moles","Abscessos e drenagem","Tétano e mordeduras"]},

{"id":"critico","nome":"Choque, terapia intensiva e transfusão","matriz":"Primeira parte","peso":5,"sub":[
 "Choque circulatório","Falência de múltiplos órgãos","Medicina intensiva em cirurgia",
 "Hemostasia e coagulopatia","Terapia transfusional","Reversão de anticoagulantes"]},

{"id":"trauma","nome":"Trauma: atendimento inicial, TCE e TRM","matriz":"Segunda parte","peso":8,"sub":[
 "Atendimento inicial (ATLS)","Via aérea e ventilação no trauma","Triagem e regulação",
 "Métodos diagnósticos no trauma","Trauma cranioencefálico","Trauma raquimedular",
 "Trauma de face","Trauma cervical","Trauma musculoesquelético",
 "Trauma na criança, na gestante e no idoso","Índices de gravidade e qualidade"]},

{"id":"tronco","nome":"Trauma de tórax, abdome e pelve","matriz":"Segunda parte","peso":8,"sub":[
 "Trauma torácico","Trauma abdominal","Trauma pelve-perineal","Trauma vascular",
 "Trauma de rim e vias urinárias","Trauma gênito-urinário",
 "Controle de danos e manobras críticas","Hemorragia e transfusão maciça"]},

{"id":"queimados","nome":"Queimaduras","matriz":"Segunda parte","peso":3,"sub":[
 "Avaliação da extensão e profundidade","Reposição volêmica","Lesão inalatória",
 "Queimadura elétrica e química","Cuidados com a ferida e enxertia"]},

{"id":"abdome","nome":"Abdome agudo","matriz":"Terceira parte","peso":8,"sub":[
 "Apendicite aguda","Abdome agudo obstrutivo","Abdome agudo perfurativo",
 "Isquemia mesentérica","Abdome agudo hemorrágico","Diverticulite aguda",
 "Volvo","Dor abdominal na mulher e na gestante"]},

{"id":"hernias","nome":"Hérnias e parede abdominal","matriz":"Terceira parte","peso":5,"sub":[
 "Hérnia inguinal e femoral","Hérnia umbilical e epigástrica","Hérnia incisional",
 "Síntese da parede abdominal","Hérnias raras","Tumores da parede abdominal"]},

{"id":"esofago","nome":"Esôfago, estômago e bariátrica","matriz":"Terceira parte","peso":7,"sub":[
 "DRGE e hérnia de hiato","Acalasia e distúrbios motores","Divertículos do esôfago",
 "Câncer de esôfago","Doença ulcerosa e complicações","Câncer gástrico",
 "GIST e linfoma gástrico","Cirurgia bariátrica e metabólica","Perfuração esofágica"]},

{"id":"hemorragia","nome":"Hemorragia digestiva e hipertensão porta","matriz":"Terceira parte","peso":3,"sub":[
 "Hemorragia digestiva alta não varicosa","Hemorragia varicosa","TIPS e derivações",
 "Hemorragia digestiva baixa","Sangramento obscuro"]},

{"id":"hepatobiliar","nome":"Fígado, vias biliares e baço","matriz":"Terceira parte","peso":7,"sub":[
 "Colelitíase e colecistite","Coledocolitíase e colangite","Lesão iatrogênica da via biliar",
 "Tumores benignos do fígado","Tumores malignos do fígado","Abscesso hepático e cistos",
 "Câncer de vesícula e colangiocarcinoma","Cistos de colédoco","Cirurgia do baço"]},

{"id":"pancreas","nome":"Pâncreas","matriz":"Terceira parte","peso":4,"sub":[
 "Pancreatite aguda","Coleções e necrose pancreática","Pancreatite crônica",
 "Adenocarcinoma de pâncreas","Neoplasias císticas","Tumores neuroendócrinos"]},

{"id":"intestino","nome":"Intestino delgado, cólon, reto e ânus","matriz":"Terceira parte","peso":7,"sub":[
 "Obstrução do intestino delgado","Doença de Crohn e retocolite cirúrgicas",
 "Doença diverticular","Câncer colorretal","Câncer de reto","Estomas",
 "Doenças orificiais","Síndrome do intestino curto","Tumores do delgado"]},

{"id":"endocrina","nome":"Tireoide, paratireoide, adrenal e pescoço","matriz":"Terceira parte","peso":4,"sub":[
 "Nódulo de tireoide","Câncer de tireoide","Hiperparatireoidismo","Incidentaloma adrenal",
 "Feocromocitoma e hiperaldosteronismo","Glândulas salivares","Massas cervicais"]},

{"id":"onco","nome":"Oncologia cirúrgica, pele e plástica","matriz":"Primeira e terceira partes","peso":3,"sub":[
 "Princípios de cancerologia cirúrgica","Estadiamento e margens","Tumores de pele e melanoma",
 "Sarcomas de partes moles","Bases da cirurgia plástica","Mama"]},

{"id":"especialidades","nome":"Tórax, vascular, urologia e pediátrica","matriz":"Terceira parte","peso":4,"sub":[
 "Bases da cirurgia torácica","Derrame pleural e empiema","Doença arterial periférica",
 "Aneurisma de aorta","Doença venosa","Urologia cirúrgica","Cirurgia pediátrica",
 "Transplantes: aspectos gerais"]},

{"id":"etica","nome":"Ética, bioética e medicina legal","matriz":"Primeira parte","peso":2,"sub":[
 "Ética e profissionalismo em cirurgia","Consentimento e documentação","Medicina legal",
 "Legislação e resoluções do CFM"]}
];

/* Cenário — onde o paciente está muda a conduta certa. */
window.CENARIOS=[
 {"id":"amb","nome":"Ambulatório"},
 {"id":"emg","nome":"Pronto-socorro"},
 {"id":"cc","nome":"Centro cirúrgico"},
 {"id":"enf","nome":"Enfermaria e pós-operatório"},
 {"id":"uti","nome":"UTI"}
];

/* Competência — o que a questão cobra de você. */
window.COMPETENCIAS=[
 {"id":"dx","nome":"Diagnóstico"},
 {"id":"tto","nome":"Indicação e tática cirúrgica"},
 {"id":"urg","nome":"Urgência e trauma"},
 {"id":"prev","nome":"Complicações e seguimento"},
 {"id":"bas","nome":"Bases e anatomia"}
];

/* Nível de profundidade. Os `id` seguem os do ClínicaMed (o código do app os referencia). */
window.NIVEIS=[
 {"id":"r1","nome":"Essencial","desc":"O que o cirurgião geral não pode errar no plantão e na enfermaria."},
 {"id":"r2","nome":"Intermediário","desc":"Indicação, tática e diagnóstico diferencial mais fino."},
 {"id":"r3","nome":"Avançado","desc":"Nuance de diretriz e de técnica; profundidade de subespecialidade cirúrgica."},
 {"id":"tit","nome":"Nível prova de título","desc":"Caso completo com decisão, no formato do COTECIG e do ENARE."}
];
