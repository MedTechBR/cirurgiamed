/* Estações da 2ª fase do Título de Especialista em Cirurgia Geral (Edital COTECIG 2026, CBC/AMB).
   Prova Teórico-Prática em arguição ORAL, com questões distribuídas entre bancas examinadoras
   distintas, 25 minutos por banca, na forma de descrição de procedimentos, análise de casos,
   exames, imagens e/ou vídeos. A banca registra as respostas em formulário de checagem, a partir
   de um padrão de resposta baseado nas referências do edital. Há ainda a Prova de Procedimentos
   Simulados (critérios: técnica, precisão, firmeza, escolha dos materiais e tempo). Nota da
   2ª fase: arguição oral até 80 pontos + procedimentos simulados até 20; reprovado abaixo de 70.

   O app reproduz a banca oral com estações SEQUENCIAIS: o candidato diz (escreve) o que faria
   em cada etapa antes de receber os dados da seguinte. `espelho` é o padrão de resposta: cada
   item tem eixo (C conhecimento, H habilidade/técnica, A atitude/segurança) e peso; a soma dos
   pesos de cada estação é 5,0. Itens com número, dose ou classificação citam a fonte e o ano.
   O app mostra o espelho só DEPOIS que o candidato registra o que fez. */
window.PRATICA=[
 {
  "id": "est-trauma-instavel",
  "titulo": "Politraumatizado instável na sala de trauma",
  "area": "trauma",
  "cenario": "emg",
  "tempo": 25,
  "abertura": "Sala de trauma. Homem de 27 anos, motociclista, colisão contra carro há 35 minutos. Chega em prancha rígida, com colar cervical, gemendo. Há sangramento em jato na face medial da coxa direita, sobre fratura exposta. Pressão arterial 82/50 mmHg, frequência cardíaca 138 bpm, frequência respiratória 28 irpm, saturação 93% com máscara, Glasgow 13, extremidades frias e pegajosas. Conduza o atendimento inicial dizendo em voz alta cada ação.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Diga, na ordem, o que você faz nos primeiros minutos: sequência do exame primário, acessos, exames à beira do leito e o que você pede ao banco de sangue.",
    "entrega": "Torniquete aplicado, sangramento da coxa controlado. Via aérea pérvia, fala com frases curtas. Murmúrio vesicular presente e simétrico; radiografia de tórax sem pneumotórax ou hemotórax volumoso. Radiografia de pelve sem fratura. eFAST: líquido livre no espaço hepatorrenal e na pelve, sem derrame pericárdico. Após o primeiro concentrado de hemácias: PA 76/44 mmHg, FC 142 bpm."
   },
   {
    "n": 2,
    "tarefa": "Interprete o quadro, defina o destino imediato do paciente e prescreva a ressuscitação com as doses.",
    "entrega": "Paciente no centro cirúrgico. Na laparotomia: hemoperitônio volumoso, laceração hepática complexa nos segmentos VI e VII sangrando ativamente e lesão de jejuno com extravasamento de conteúdo entérico. Depois de 6 concentrados: temperatura 34,9 °C, pH 7,12, INR 1,9, cálcio iônico baixo."
   },
   {
    "n": 3,
    "tarefa": "Descreva, passo a passo, a conduta operatória a partir deste momento e como você termina a operação.",
    "entrega": "Paciente admitido na UTI com o abdome fechado temporariamente. A equipe pergunta quais são as metas e quando ele volta ao centro cirúrgico."
   },
   {
    "n": 4,
    "tarefa": "Defina as metas da reanimação na UTI e o momento da reoperação.",
    "entrega": "Encerramento da estação."
   }
  ],
  "espelho": [
   {
    "eixo": "H",
    "item": "Controla primeiro a hemorragia externa exsanguinante com torniquete proximal à lesão, antes da via aérea: o x do xABCDE (ATLS 11ª ed., 2025)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Segue A (via aérea com restrição de movimento da coluna cervical), B, C, D e E na ordem, reavaliando após cada intervenção",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Dois acessos venosos calibrosos ou intraósseo, tipagem, gasometria com lactato, eFAST e radiografias de tórax e pelve na própria sala",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Aciona o protocolo de transfusão maciça e ressuscita com hemocomponentes 1:1:1 ou sangue total, limitando o cristaloide (ATLS 11ª ed., 2025)",
    "peso": 0.6
   },
   {
    "eixo": "C",
    "item": "Ácido tranexâmico dentro de 3 horas do trauma: 1 g em bolo e 1 g em infusão (ATLS 11ª ed., 2025)",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Cálcio 1 g IV durante ou logo após a primeira unidade de hemocomponente e a cada 4 unidades (ATLS 11ª ed., 2025)",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Reconhece choque hemorrágico que não responde, com eFAST positivo, como indicação de laparotomia imediata, sem passar pela tomografia",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Descreve o controle de danos: laparotomia mediana ampla, empacotamento dos quatro quadrantes, controle do sangramento hepático por empacotamento peri-hepático (manobra de Pringle se preciso), controle da contaminação do jejuno por grampeamento ou ligadura sem anastomose e fechamento temporário do abdome",
    "peso": 0.7
   },
   {
    "eixo": "C",
    "item": "Abrevia a operação diante de hipotermia, acidose e coagulopatia, sabendo que a hipocalcemia agrava o sangramento",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Na UTI: aquecimento, correção da coagulopatia guiada por exames, reposição de cálcio e reoperação planejada só depois da recuperação fisiológica, em geral em 24 a 48 horas",
    "peso": 0.3
   },
   {
    "eixo": "A",
    "item": "Assume a liderança, usa comunicação em alça fechada e avisa cedo o centro cirúrgico e o banco de sangue",
    "peso": 0.3
   }
  ]
 },
 {
  "id": "est-obstrucao-bridas",
  "titulo": "Abdome agudo obstrutivo por bridas",
  "area": "abdome",
  "cenario": "emg",
  "tempo": 25,
  "abertura": "Pronto-socorro. Mulher de 71 anos, histerectomia abdominal aberta há 15 anos, com dor abdominal em cólica há 2 dias, vômitos repetidos e parada de eliminação de gases há 24 horas. PA 112/70 mmHg, FC 104 bpm, temperatura 37,4 °C. Abdome distendido, timpânico, ruídos hidroaéreos aumentados, doloroso difusamente, sem descompressão brusca dolorosa. Conduza.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Diga o que você examina, quais exames solicita e quais medidas iniciais toma.",
    "entrega": "Regiões inguinais e femorais sem abaulamento. Leucócitos 11.800/mm³, lactato 1,4 mmol/L, potássio 3,1 mEq/L, creatinina 1,4 mg/dL. Tomografia com contraste venoso: alças de delgado dilatadas até 4,2 cm, ponto de transição único no íleo distal, sem alça fechada, realce da parede preservado, sem líquido livre nem pneumatose."
   },
   {
    "n": 2,
    "tarefa": "Defina a conduta e como você vai acompanhar a resposta.",
    "entrega": "Radiografia de abdome 24 horas após o contraste hidrossolúvel: contraste parado no delgado, sem chegar ao cólon. A sonda drenou 1.600 mL em 24 horas e a dor persiste."
   },
   {
    "n": 3,
    "tarefa": "Qual é a sua decisão agora? Escolha a via de acesso e descreva a operação passo a passo.",
    "entrega": "Na cavidade: brida única entre o íleo distal e a pelve. Depois da secção da brida, um segmento de 15 cm de íleo está violáceo."
   },
   {
    "n": 4,
    "tarefa": "Como você avalia a viabilidade desse segmento e o que faz com ele?",
    "entrega": "Encerramento da estação."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Examina hérnias da parede e regiões inguinocrurais e pergunta por operações e radioterapia prévias",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Jejum, sonda nasogástrica para descompressão, hidratação venosa, reposição de potássio e controle da diurese",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Pede hemograma, lactato, eletrólitos, ureia e creatinina (WSES, Bologna 2017)",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Tomografia como exame de escolha e procura sinais de sofrimento: alça fechada, redução do realce da parede, líquido livre, edema de mesentério (WSES, Bologna 2017)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Sem peritonite, estrangulamento ou isquemia, indica tratamento não operatório com contraste hidrossolúvel e radiografia em 24 horas (WSES, Bologna 2017)",
    "peso": 0.6
   },
   {
    "eixo": "C",
    "item": "Contraste sem chegar ao cólon em 24 horas indica falha do tratamento não operatório, que não deve passar de 72 horas (WSES, Bologna 2017)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Escolhe a via: laparoscopia em casos selecionados (brida única, poucas laparotomias prévias) ou laparotomia, convertendo sem hesitar",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Descreve a operação: entrada em área livre de aderências, identificação do ceco e percurso retrógrado do íleo até o ponto de transição, secção da brida, adesiólise apenas do necessário e manipulação delicada das alças dilatadas",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Avalia a viabilidade por cor, peristalse, pulso arterial no mesentério e sangramento da borda, reavaliando depois de alguns minutos com compressas mornas",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Segmento inviável: ressecção com anastomose primária; viabilidade duvidosa: considera reabordagem programada (second look)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Repara e registra enterotomias inadvertidas e explica à paciente e à família o achado e o plano",
    "peso": 0.3
   }
  ]
 },
 {
  "id": "est-colecistite-dificil",
  "titulo": "Colecistite aguda grau II e colecistectomia difícil",
  "area": "hepatobiliar",
  "cenario": "cc",
  "tempo": 25,
  "abertura": "Mulher de 56 anos, hipertensa controlada, sem outras doenças (índice de comorbidade de Charlson 1, ASA II), com dor em hipocôndrio direito há 4 dias e febre de 38,4 °C. Massa dolorosa palpável em hipocôndrio direito, sinal de Murphy positivo. Leucócitos 19.600/mm³; bilirrubinas, creatinina, plaquetas e INR normais; sem disfunção orgânica. Ultrassonografia: vesícula distendida, parede de 7 mm, cálculo impactado no infundíbulo, líquido perivesicular, colédoco de 5 mm.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Dê o diagnóstico com o grau de gravidade, justificando pelos critérios, e defina a conduta.",
    "entrega": "A paciente vai à colecistectomia videolaparoscópica no dia seguinte, com cirurgião experiente. Vesícula tensa, edemaciada, bloqueada pelo omento e aderida ao duodeno."
   },
   {
    "n": 2,
    "tarefa": "Descreva, passo a passo, a colecistectomia até o momento de clipar o ducto e a artéria císticos.",
    "entrega": "Depois de 40 minutos, o triângulo hepatocístico está endurecido, com fibrose densa; não se obtém a visão crítica de segurança e há sangramento difuso no infundíbulo."
   },
   {
    "n": 3,
    "tarefa": "O que você faz agora? Diga as alternativas, escolha uma e descreva como a executa.",
    "entrega": "Encerramento da estação."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Colecistite aguda grau II (moderada): leucócitos acima de 18.000/mm³, massa palpável e mais de 72 horas de evolução, sem disfunção orgânica (Tokyo 2018)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Com Charlson até 5 e ASA até II, indica colecistectomia laparoscópica precoce por cirurgião experiente, com antibiótico e suporte desde a admissão (Tokyo 2018)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Sabe a alternativa para quem não tolera a operação: tratamento clínico e drenagem da vesícula, com colecistectomia depois (Tokyo 2018)",
    "peso": 0.2
   },
   {
    "eixo": "H",
    "item": "Punciona e esvazia a vesícula distendida para conseguir apreendê-la; traciona o fundo no sentido cefálico e o infundíbulo lateral e caudalmente",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Começa a dissecção acima do sulco de Rouvière, junto à vesícula, abrindo o peritônio anterior e posterior do infundíbulo",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Enuncia os três critérios da visão crítica de segurança: triângulo hepatocístico limpo de gordura e tecido fibroso, terço inferior da vesícula separado do leito hepático (placa cística exposta) e duas, e somente duas, estruturas entrando na vesícula (Tokyo 2018)",
    "peso": 0.8
   },
   {
    "eixo": "A",
    "item": "Faz pausa de confirmação antes de clipar e cortar e documenta a visão crítica com foto ou vídeo",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Sem visão crítica, não clipa nada e escolhe um procedimento de resgate (bail-out): colecistectomia subtotal, dissecção a partir do fundo ou conversão (Tokyo 2018)",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Descreve a colecistectomia subtotal: abre a vesícula, retira os cálculos, resseca a parede livre, deixa a parede posterior no leito e fecha o remanescente (reconstituinte) ou o deixa aberto com o óstio cístico suturado por dentro (fenestrante), com dreno sub-hepático",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Antibiótico suspenso em até 24 horas após a colecistectomia nos graus I e II, salvo perfuração, gangrena ou forma enfisematosa (Tokyo 2018)",
    "peso": 0.2
   },
   {
    "eixo": "A",
    "item": "Pede ajuda a um segundo cirurgião experiente antes de insistir na dissecção, registra a decisão e explica à paciente o risco de fístula biliar",
    "peso": 0.5
   }
  ]
 },
 {
  "id": "est-hernia-encarcerada",
  "titulo": "Hérnia inguinal encarcerada com sinais de estrangulamento",
  "area": "hernias",
  "cenario": "emg",
  "tempo": 25,
  "abertura": "Pronto-socorro. Homem de 68 anos, com hérnia inguinal direita conhecida há anos, chega com abaulamento inguinoescrotal direito doloroso e irredutível há 10 horas, vômitos e parada de eliminação de gases. PA 128/80 mmHg, FC 112 bpm, temperatura 37,9 °C. Abaulamento tenso, muito doloroso, com pele hiperemiada.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "O que você avalia e quais exames pede? Você tenta reduzir a hérnia?",
    "entrega": "Leucócitos 16.200/mm³, lactato 3,2 mmol/L. Radiografia de abdome com níveis hidroaéreos em delgado."
   },
   {
    "n": 2,
    "tarefa": "Defina a conduta e a via de acesso e descreva a operação até a avaliação do conteúdo herniário.",
    "entrega": "Aberto o saco: alça de íleo escurecida, que não recupera cor nem peristalse após a liberação do anel e compressas mornas. Não há perfuração nem extravasamento."
   },
   {
    "n": 3,
    "tarefa": "O que você faz com a alça e como repara a hérnia? Descreva a técnica.",
    "entrega": "Encerramento da estação."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Reconhece sinais de estrangulamento (dor intensa, hiperemia, resposta inflamatória sistêmica, lactato alto); lactato, CPK, dímero D e tomografia ajudam a prever (WSES 2017)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Não tenta redução manual (taxe) diante de suspeita de estrangulamento",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Preparo: jejum, sonda nasogástrica, hidratação venosa, antibiótico profilático e operação de urgência",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Via aberta anterior ou pré-peritoneal; reparo laparoscópico só sem estrangulamento e sem previsão de ressecção (WSES 2017)",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Descreve: inguinotomia, abertura da aponeurose do oblíquo externo, isolamento do cordão e abertura do saco segurando a alça ANTES que ela se reduza, para poder inspecioná-la",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Secciona o anel constritor no sentido que poupa os vasos epigástricos inferiores (lateralmente no anel interno da hérnia indireta) e examina alça e mesentério",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Se o conteúdo se reduzir antes da inspeção, avalia a alça por laparoscopia diagnóstica ou hernioscopia (WSES 2017)",
    "peso": 0.3
   },
   {
    "eixo": "H",
    "item": "Alça inviável: ressecção com anastomose, pela própria incisão ou por laparotomia",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Escolhe o reparo pela contaminação: tela sintética no campo limpo e também no limpo-contaminado (ressecção sem extravasamento grosseiro); campo contaminado ou sujo: reparo primário se defeito pequeno ou tela biológica (WSES 2017)",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Descreve o Lichtenstein: tela de polipropileno ancorada no tecido sobre o tubérculo púbico (sem pegar periósteo) e ultrapassando-o, borda inferior em sutura contínua ao ligamento inguinal, borda superior à aponeurose do oblíquo interno, fenda para o cordão com cruzamento das caudas formando novo anel interno",
    "peso": 0.6
   },
   {
    "eixo": "A",
    "item": "Identifica e preserva os nervos ilioinguinal, ílio-hipogástrico e ramo genital do genitofemoral (HerniaSurge 2018)",
    "peso": 0.2
   },
   {
    "eixo": "C",
    "item": "Antibiótico profilático curto no campo limpo; por 48 horas quando houver estrangulamento ou ressecção (WSES 2017)",
    "peso": 0.2
   }
  ]
 },
 {
  "id": "est-fistula-anastomotica",
  "titulo": "Febre e taquicardia no 5º dia após colectomia",
  "area": "complic",
  "cenario": "enf",
  "tempo": 25,
  "abertura": "Enfermaria. Homem de 66 anos, 5º dia de pós-operatório de sigmoidectomia videolaparoscópica com anastomose colorretal primária por adenocarcinoma. Vinha aceitando dieta. Hoje: temperatura 38,6 °C, FC 122 bpm, PA 96/58 mmHg, FR 24 irpm, dor abdominal difusa e diurese de 20 mL/h nas últimas 4 horas. Você é chamado.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Qual é a sua hipótese principal e o que você faz na primeira hora?",
    "entrega": "Lactato 4,1 mmol/L, leucócitos 21.000/mm³, proteína C reativa 280 mg/L, creatinina 1,9 mg/dL. Depois da expansão, PA 84/50 mmHg; iniciada noradrenalina. Tomografia: pneumoperitônio, líquido livre difuso e extravasamento do contraste retal na anastomose."
   },
   {
    "n": 2,
    "tarefa": "Interprete o quadro e defina a conduta e o prazo para executá-la.",
    "entrega": "Relaparotomia: peritonite fecal difusa e deiscência de metade da circunferência da anastomose."
   },
   {
    "n": 3,
    "tarefa": "Descreva o que você faz na cavidade e como termina a operação.",
    "entrega": "Paciente na UTI. A equipe pergunta qual antibiótico manter e por quanto tempo."
   },
   {
    "n": 4,
    "tarefa": "Defina o esquema e a duração do antibiótico e diga como você conversa com o paciente e a família.",
    "entrega": "Encerramento da estação."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Fístula anastomótica até prova em contrário diante de febre, taquicardia e dor no 5º dia após anastomose colônica",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Antibiótico de amplo espectro imediato, idealmente na primeira hora, colhendo hemoculturas sem atrasar a dose (Surviving Sepsis 2026)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Cristaloide de ao menos 30 mL/kg nas primeiras 3 horas, de preferência balanceado, com lactato seriado (Surviving Sepsis 2026)",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Noradrenalina como primeiro vasopressor, meta de PAM de 65 mmHg (Surviving Sepsis 2026)",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Tomografia com contraste venoso e retal para confirmar e separar coleção localizada de peritonite difusa",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Peritonite difusa com choque exige controle cirúrgico do foco sem demora (WSES 2017), idealmente em até 6 horas (Surviving Sepsis 2026); drenagem percutânea fica para abscesso localizado sem peritonite",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Descreve a relaparotomia: aspiração e lavagem da cavidade, desfaz a anastomose, fecha o coto retal e faz colostomia terminal (operação de Hartmann), com drenagem da pelve",
    "peso": 0.7
   },
   {
    "eixo": "C",
    "item": "Sabe a alternativa no paciente estável, com defeito pequeno e pouca contaminação: sutura do defeito, ileostomia em alça de proteção e drenagem",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Considera peritoniostomia (abdome aberto) se instabilidade persistente ou edema importante; reabordagem sob demanda, não programada de rotina (WSES 2017)",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Infecção adquirida no hospital: esquema de amplo espectro, como piperacilina-tazobactam 4,5 g de 6/6 h ou meropeném 1 g de 8/8 h, ajustado pela cultura (WSES 2017)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Curso curto depois do controle adequado do foco: 3 a 5 dias (WSES 2017; 4 dias no STOP-IT, 2015); investiga de novo se a infecção persistir além de 5 a 7 dias",
    "peso": 0.3
   },
   {
    "eixo": "A",
    "item": "Comunica a complicação com transparência ao paciente e à família, explica o estoma e registra tudo em prontuário",
    "peso": 0.4
   }
  ]
 },
 {
  "id": "est-grande-queimado",
  "titulo": "Grande queimado com lesão inalatória",
  "area": "queimados",
  "cenario": "emg",
  "tempo": 25,
  "abertura": "Pronto-socorro. Homem de 35 anos, 80 kg, retirado de um incêndio em ambiente fechado há 2 horas. Recebeu 500 mL de Ringer lactato no transporte. Queimaduras de 2º grau profundo e 3º grau em toda a face anterior do tronco, nos dois membros superiores de forma circunferencial e na face anterior do membro inferior direito. Face apenas com eritema, mas vibrissas nasais chamuscadas, escarro com fuligem e voz rouca. Saturação 97% em máscara com oxigênio, FC 118 bpm, PA 132/80 mmHg.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Qual é a sua primeira prioridade e por quê? Descreva o manejo da via aérea e da ventilação.",
    "entrega": "Paciente intubado sem intercorrências. Carboxi-hemoglobina de 18%."
   },
   {
    "n": 2,
    "tarefa": "Calcule a superfície corporal queimada e o volume de reposição das primeiras 24 horas, dizendo a vazão a partir de agora e como vai monitorizar.",
    "entrega": "Quatro horas depois: diurese de 15 mL/h. Mãos frias, enchimento capilar lento nos dedos, membros superiores tensos."
   },
   {
    "n": 3,
    "tarefa": "Interprete os achados e ajuste a conduta. Diga também o destino do paciente.",
    "entrega": "Encerramento da estação."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Reconhece lesão inalatória (incêndio fechado, fuligem, vibrissas chamuscadas, rouquidão) e o risco de obstrução progressiva por edema",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Intubação precoce, por quem tem mais experiência, com tubo de grosso calibre, antes que o edema feche a via aérea; oxigênio a 100% pela intoxicação por monóxido de carbono, sem confiar na oximetria",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Interrompe a queimadura (retira roupas e adornos), previne hipotermia, dois acessos calibrosos e sonda vesical para medir diurese",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Calcula pela regra dos nove só as queimaduras de 2º e 3º graus: tronco anterior 18% + membros superiores 18% + face anterior do membro inferior direito 9% = 45%; o eritema da face não entra",
    "peso": 0.6
   },
   {
    "eixo": "C",
    "item": "Volume inicial de 2 mL/kg/%SCQ de Ringer lactato: 2 × 80 × 45 = 7.200 mL em 24 horas, metade nas primeiras 8 horas contadas a partir da queimadura (ABA 2023; ATLS 11ª ed., 2025)",
    "peso": 0.7
   },
   {
    "eixo": "H",
    "item": "Desconta tempo e volume já recebidos: 3.100 mL nas 6 horas que faltam (cerca de 520 mL/h) e depois 3.600 mL em 16 horas (225 mL/h)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Titula pela diurese, meta de 0,5 mL/kg/h (40 mL/h) no adulto, e não por monitorização invasiva (ABA 2023)",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Diurese baixa: aumenta a vazão e reavalia de hora em hora; considera albumina nas primeiras 24 horas no grande queimado (ABA 2023); evita a hiper-reposição",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Indica escarotomia nos membros superiores com queimadura circunferencial e perfusão comprometida, com incisões medial e lateral através da escara",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Encaminha a centro de queimados (critérios da ABA) depois de estabilizar, com passagem de caso estruturada e registro dos volumes",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Profilaxia do tétano, analgesia venosa titulada e vigilância de hipertensão intra-abdominal com grandes volumes",
    "peso": 0.2
   }
  ]
 },
 {
  "id": "est-hda-ulcera",
  "titulo": "Hemorragia digestiva alta por úlcera duodenal",
  "area": "hemorragia",
  "cenario": "emg",
  "tempo": 25,
  "abertura": "Pronto-socorro. Homem de 63 anos, usando diclofenaco há 3 semanas por lombalgia. Hematêmese e melena desde a madrugada, com um episódio de síncope em casa. PA 86/54 mmHg, FC 126 bpm, pálido e sudoreico. Hemoglobina 7,8 g/dL, ureia 98 mg/dL. Sem estigmas de hepatopatia.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Diga sua conduta inicial, com metas e doses, e quando você pede a endoscopia.",
    "entrega": "Após a ressuscitação, endoscopia: úlcera de 2 cm na parede posterior do bulbo duodenal com sangramento em jato (Forrest Ia)."
   },
   {
    "n": 2,
    "tarefa": "Qual é o tratamento endoscópico adequado e o que você prescreve depois?",
    "entrega": "Hemostasia obtida. No 2º dia: nova hematêmese volumosa, PA 78/40 mmHg. Segunda endoscopia sem sucesso na hemostasia. O hospital não tem radiologia intervencionista disponível."
   },
   {
    "n": 3,
    "tarefa": "Defina a conduta e descreva o procedimento cirúrgico passo a passo.",
    "entrega": "Operação concluída, paciente estável no pós-operatório."
   },
   {
    "n": 4,
    "tarefa": "O que você prescreve e orienta antes da alta?",
    "entrega": "Encerramento da estação."
   }
  ],
  "espelho": [
   {
    "eixo": "H",
    "item": "Dois acessos calibrosos, ressuscitação volêmica, tipagem e reserva de sangue, monitorização contínua",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Estratifica pelo escore de Glasgow-Blatchford; só escore até 1 permitiria manejo ambulatorial (ESGE 2021)",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Transfusão restritiva: hemácias com hemoglobina até 7 g/dL e meta de 7 a 9 g/dL, com limiar mais alto se doença cardiovascular (ESGE 2021)",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Inibidor de bomba de prótons venoso antes da endoscopia sem atrasá-la e eritromicina 250 mg IV de 30 a 120 minutos antes, para limpar o estômago (ESGE 2021)",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Endoscopia em até 24 horas depois da ressuscitação; a endoscopia em até 12 horas não melhora desfechos de rotina (ESGE 2021)",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Forrest Ia: terapia combinada, injeção de adrenalina mais um segundo método, térmico de contato ou mecânico; adrenalina isolada não basta (ESGE 2021)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Após a hemostasia: inibidor de bomba de prótons em dose alta por 72 horas, como 80 mg em bolo e 8 mg/h (ESGE 2021)",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Ressangramento: segunda endoscopia (considerar clipe montado em capuz); se falhar, embolização arterial; cirurgia se a embolização não estiver disponível ou falhar (ESGE 2021)",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Descreve a operação: laparotomia mediana supraumbilical, manobra de Kocher, piloroduodenotomia longitudinal, compressão digital do vaso e ligadura da artéria gastroduodenal em três pontos (cranial, caudal e ponto em U medial para o ramo pancreático transverso)",
    "peso": 0.8
   },
   {
    "eixo": "A",
    "item": "Protege o colédoco ao suturar a parede posterior: pontos sem profundidade excessiva e localização da papila se houver dúvida",
    "peso": 0.3
   },
   {
    "eixo": "H",
    "item": "Fecha a piloroduodenotomia transversalmente, como piloroplastia de Heineke-Mikulicz",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Pesquisa e trata Helicobacter pylori, suspende o anti-inflamatório e mantém o inibidor de bomba de prótons",
    "peso": 0.3
   },
   {
    "eixo": "A",
    "item": "Avisa anestesia e banco de sangue antes de ir ao centro cirúrgico e explica a indicação ao paciente e à família",
    "peso": 0.2
   }
  ]
 },
 {
  "id": "est-tireoidectomia",
  "titulo": "Nódulo de tireoide Bethesda VI e tireoidectomia total",
  "area": "endocrina",
  "cenario": "amb",
  "tempo": 25,
  "abertura": "Ambulatório de cirurgia. Mulher de 44 anos, eutireoidiana, com nódulo de 4,6 cm no lobo direito: sólido, hipoecoico, de margens irregulares e com microcalcificações. Punção aspirativa por agulha fina: Bethesda VI, carcinoma papilífero. Sem rouquidão e sem cirurgia cervical prévia. Ultrassonografia cervical sem linfonodos suspeitos nos compartimentos central e lateral; lobo esquerdo sem nódulos.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Interprete o laudo da punção e diga o que mais precisa avaliar antes da operação.",
    "entrega": "Avaliação completa, voz normal ao exame. A paciente pergunta se dá para tirar só metade da tireoide."
   },
   {
    "n": 2,
    "tarefa": "Responda à paciente, defina a extensão da operação e diga o que deve constar no consentimento.",
    "entrega": "Operação agendada."
   },
   {
    "n": 3,
    "tarefa": "Descreva a tireoidectomia passo a passo, destacando o nervo laríngeo recorrente, o ramo externo do laríngeo superior e as paratireoides.",
    "entrega": "Ao terminar o lado direito, o neuromonitor perde o sinal do recorrente direito, e o sinal não volta."
   },
   {
    "n": 4,
    "tarefa": "O que você faz com o lado esquerdo e como conduz o pós-operatório?",
    "entrega": "Encerramento da estação."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Bethesda VI é maligno, com risco de malignidade em torno de 97% (Bethesda, 3ª ed., 2023)",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Antes de operar: ultrassonografia dos linfonodos centrais e laterais e avaliação da voz em todos; laringoscopia se houver disfonia, cirurgia cervical prévia ou extensão posterior ou doença linfonodal extensa (ATA 2025)",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Tumor acima de 4 cm (cT3a): tireoidectomia total; a lobectomia é a escolha só até 4 cm, sem extensão extratireoidiana grosseira e sem metástases (ATA 2025)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Esvaziamento central profilático pode ser considerado em T3 ou T4 cN0, pesando o risco de hipoparatireoidismo (ATA 2025)",
    "peso": 0.2
   },
   {
    "eixo": "A",
    "item": "Consentimento com risco de lesão nervosa (voz, deglutição, aspiração, traqueostomia) e de hipoparatireoidismo, informado pelas taxas do próprio cirurgião (ATA 2025)",
    "peso": 0.3
   },
   {
    "eixo": "H",
    "item": "Acesso: extensão cervical, incisão transversa em prega cutânea, retalhos subplatismais, abertura da rafe mediana e afastamento dos músculos pré-tireoidianos",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Polo superior: ligadura dos ramos da artéria tireoidiana superior rente à cápsula, um a um, preservando o ramo externo do laríngeo superior, que pode ser identificado e monitorizado (ATA 2025)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Identifica visualmente o recorrente no sulco traqueoesofágico (relação com a artéria tireoidiana inferior e o tubérculo de Zuckerkandl) e o segue até a entrada na laringe junto ao ligamento de Berry; neuromonitorização pode ser usada (ATA 2025)",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Preserva as paratireoides com sua vascularização, dissecando rente à cápsula e ligando ramos da tireoidiana inferior junto à glândula; inspeciona a peça; autotransplanta no músculo a paratireoide desvascularizada após congelação (ATA 2025)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Estimula o vago ou o recorrente depois do primeiro lobo; com perda de sinal, não opera o lado contralateral no mesmo tempo (tireoidectomia estagiada), para evitar lesão bilateral (ATA 2025)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "No pós-operatório avalia a voz, faz laringoscopia se estiver alterada e encaminha à fonoterapia se houver lesão (ATA 2025)",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Cálcio e vitamina D orientados pelo PTH depois da tireoidectomia total (ATA 2025)",
    "peso": 0.3
   },
   {
    "eixo": "A",
    "item": "Trata hematoma cervical com desconforto respiratório como emergência, abrindo a ferida à beira do leito",
    "peso": 0.2
   }
  ]
 }
];
