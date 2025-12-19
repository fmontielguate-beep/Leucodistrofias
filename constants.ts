
import { LeukodystrophyType, DiseaseData, QuizQuestion } from './types';

export const DISEASES: Record<LeukodystrophyType, DiseaseData> = {
  [LeukodystrophyType.GENERAL]: {
    id: LeukodystrophyType.GENERAL,
    name: 'General',
    fullName: 'Clasificación de las Enfermedades de Sustancia Blanca',
    color: '#6366f1',
    genetics: "Trastornos monogénicos que afectan primariamente la mielina del SNC. Clasificación: Hipomielinizantes (defecto de formación) vs Desmielinizantes (destrucción).",
    molecularMechanism: "La homeostasis de la mielina depende de lípidos (colesterol, galactocerebrósido) y proteínas (PLP1, MBP). Los defectos pueden ser lisosomales, peroxisomales o mitocondriales.",
    riskFactors: "Herencia ligada al X (ALD/PMD) y Autosómica Recesiva (MLD/Krabbe). La incidencia global es de 1 en 7,600 nacidos vivos.",
    biomarkers: "Espectroscopia (reducción de NAA, elevación de lactato/colina), Enzimas lisosomales (ARSA, GALC), VLCFA.",
    historyBase: "Deterioro neurológico progresivo en un paciente con desarrollo previo normal o casi normal.",
    warningSigns: [
      "Regresión motora inexplicada.",
      "Nystagmus de inicio temprano.",
      "Disfunción bulbar.",
      "Falla adrenal (en varones)."
    ],
    complications: ["Inmovilidad catastrófica", "Disfagia", "Insuficiencia respiratoria central"],
    treatment: "Multidisciplinario: HSCT, Terapia Génica, Soporte Paliativo.",
    prognosis: "Variable según el tipo molecular.",
    differential: ["Parálisis cerebral", "Encefalomielitis Diseminada Aguda (ADEM)", "Leucoencefalopatía hipóxico-isquémica"],
    references: [
      { source: "GeneReviews", title: "Leukodystrophy Overview", url: "https://www.ncbi.nlm.nih.gov/books/NBK1116/" },
      { source: "Radiopaedia", title: "Leukodystrophies (Radiology Guide)", url: "https://radiopaedia.org/articles/leukodystrophies" }
    ],
    stages: [
      {
        timeLabel: "Introducción",
        symptoms: "Sospecha ante regresión de hitos del desarrollo.",
        physicalExam: "Evaluación de vía piramidal y signos cerebelosos.",
        mriDetails: "T1 vs T2 para diferenciar hipomielinización.",
        clinicalStatus: "Estado pre-diagnóstico.",
        pathophysiology: "Deterioro de la conducción saltatoria axonal.",
        neuroExamDetail: {
          mentalStatus: "Alerta, posible irritabilidad inicial.",
          cranialNerves: "Fondo de ojo normal inicialmente.",
          motorSystem: "Tono normal o leve hipotonía axial.",
          reflexes: "Normoreflexia."
        }
      },
      {
        timeLabel: "Desmielinización",
        symptoms: "Pérdida de habilidades adquiridas.",
        physicalExam: "Espasticidad y signos de neurona motora superior.",
        mriDetails: "Hiperintensidad T2 confluente progresiva.",
        clinicalStatus: "Fase degenerativa activa.",
        pathophysiology: "Inflamación mediada por macrófagos y citotoxicidad.",
        neuroExamDetail: {
          mentalStatus: "Deterioro cognitivo progresivo.",
          cranialNerves: "Posible atrofia óptica.",
          motorSystem: "Espasticidad, tijereteo al caminar.",
          reflexes: "Hiperreflexia, Babinski positivo."
        }
      },
      {
        timeLabel: "Hipomielinización",
        symptoms: "Déficit motor desde el nacimiento o lactancia.",
        physicalExam: "Nystagmus y debilidad axial severa.",
        mriDetails: "T2 isointenso a levemente hiperintenso persistente.",
        clinicalStatus: "Fase estática pero con complicaciones ortopédicas.",
        pathophysiology: "Falla en la diferenciación del oligodendrocito.",
        neuroExamDetail: {
          mentalStatus: "Desarrollo cognitivo lento.",
          cranialNerves: "Nystagmus pendular.",
          motorSystem: "Hipotonía axial marcada.",
          reflexes: "Variables, usualmente exaltados."
        }
      }
    ]
  },
  [LeukodystrophyType.XALD]: {
    id: LeukodystrophyType.XALD,
    name: 'X-ALD',
    fullName: 'Adrenoleucodistrofia Ligada al X',
    color: '#ef4444',
    genetics: "Mutación en el gen ABCD1 (Xq28). Defecto en la proteína ALDP (transportador peroxisomal).",
    molecularMechanism: "Falla en el transporte de VLCFA al interior del peroxisoma para su β-oxidación, resultando en su acumulación citotóxica en tejidos cerebrales y adrenales.",
    riskFactors: "Herencia ligada al cromosoma X. 1 de cada 20,000 varones.",
    biomarkers: "Niveles elevados de VLCFA (C26:0, C26:0/C22:0 ratio). ACTH elevada por falla adrenal.",
    historyBase: "Varón de 4-10 años con cambios de conducta, deterioro académico y signos de insuficiencia suprarrenal.",
    warningSigns: ["Hiperpigmentación de mucosas", "Deterioro escolar", "Agnosia auditiva", "Pérdida de visión periférica"],
    complications: ["Crisis suprarrenal aguda", "Estado vegetativo", "Ceguera cortical"],
    treatment: "Trasplante de Células Hematopoyéticas (HSCT) en estadios tempranos (Loes < 9). Terapia génica (Elivaldogene autotemcel).",
    prognosis: "Fase cerebral: Supervivencia media de 2-4 años tras inicio si no hay trasplante.",
    differential: ["TDAH", "Esclerosis Múltiple infantil", "Infecciones del SNC"],
    references: [
      { source: "GeneReviews", title: "X-Linked Adrenoleukodystrophy", url: "https://www.ncbi.nlm.nih.gov/books/NBK1315/" },
      { source: "Radiopaedia", title: "X-linked adrenoleukodystrophy (Imaging)", url: "https://radiopaedia.org/articles/x-linked-adrenoleukodystrophy" }
    ],
    stages: [
      {
        timeLabel: "Inicio Cerebral",
        symptoms: "Dificultad de aprendizaje, cambios de personalidad.",
        physicalExam: "Hiperpigmentación en encías, reflejos exaltados.",
        mriDetails: "Hiperintensidad T2 en esplenio y radiaciones ópticas.",
        clinicalStatus: "Ventana terapéutica crítica (Loes 1-4).",
        pathophysiology: "Desmielinización inflamatoria perivenular masiva.",
        neuroExamDetail: {
          mentalStatus: "Distraibilidad, labilidad emocional.",
          cranialNerves: "Visión normal, pero dificultad en procesamiento auditivo central.",
          motorSystem: "Coordinación fina levemente alterada.",
          reflexes: "Hiperreflexia patelar bilateral."
        }
      },
      {
        timeLabel: "Progresión Inflamatoria",
        symptoms: "Pérdida de visión, ataxia, convulsiones.",
        physicalExam: "Marcha atáxica-espástica, atrofia óptica inicial.",
        mriDetails: "Realce con contraste (gadolinio) en el frente de progresión.",
        clinicalStatus: "Fase inflamatoria aguda (Loes 5-10).",
        pathophysiology: "Ruptura de la barrera hematoencefálica mediada por VLCFA.",
        neuroExamDetail: {
          mentalStatus: "Desorientación, demencia progresiva.",
          cranialNerves: "Reducción de agudeza visual, palidez papilar.",
          motorSystem: "Hemiparesia o cuadriparesia espástica.",
          reflexes: "Babinski bilateral, clonus rotuliano."
        }
      },
      {
        timeLabel: "Estadio Terminal",
        symptoms: "Estado vegetativo, mutismo acinético.",
        physicalExam: "Cuadriplejía, rigidez de descerebración.",
        mriDetails: "Atrofia cerebral masiva y cavitación posterior.",
        clinicalStatus: "Loes > 15. Cuidados paliativos.",
        pathophysiology: "Muerte oligodendrocítica total y gliosis.",
        neuroExamDetail: {
          mentalStatus: "Sin respuesta a estímulos externos.",
          cranialNerves: "Ceguera total, ausencia de reflejo de amenaza.",
          motorSystem: "Rigidez intensa, contracturas fijas.",
          reflexes: "Hiperreflexia extrema o arreflexia terminal."
        }
      }
    ]
  },
  [LeukodystrophyType.KRABBE]: {
    id: LeukodystrophyType.KRABBE,
    name: 'Krabbe',
    fullName: 'Leucodistrofia de Células Globoides',
    color: '#3b82f6',
    genetics: "Deficiencia de la enzima Galactocerebrosidasa (GALC) en 14q31. Autosómica recesiva.",
    molecularMechanism: "La acumulación de galactosil-esfingosina (psicosina) es citotóxica para los oligodendrocitos. Los macrófagos ingieren mielina no degradada y se convierten en células globoides.",
    riskFactors: "Incidencia 1 en 100,000 nacimientos.",
    biomarkers: "Psicosina elevada (> 10 nmol/L). Actividad enzimática GALC baja en leucocitos.",
    historyBase: "Lactante previamente sano que inicia con irritabilidad extrema y estancamiento del desarrollo.",
    warningSigns: ["Irritabilidad extrema (llanto inconsolable)", "Hipersensibilidad sensorial", "Opistótonos", "Fiebres inexplicables"],
    complications: ["Disfagia severa", "Insuficiencia respiratoria", "Ceguera"],
    treatment: "HSCT solo si se realiza antes de los 30 días de vida (pre-sintomático).",
    prognosis: "Forma infantil: Muerte usualmente antes de los 2-3 años.",
    differential: ["Parálisis cerebral discinética", "Enfermedad de Canavan", "Aciduria glutárica tipo I"],
    references: [
      { source: "GeneReviews", title: "Krabbe Disease", url: "https://www.ncbi.nlm.nih.gov/books/NBK1238/" },
      { source: "PubMed", title: "Psychosine as a biomarker", url: "https://pubmed.ncbi.nlm.nih.gov/28595856/" }
    ],
    stages: [
      {
        timeLabel: "Estadio I (Agudo)",
        symptoms: "Hiperestesia, llanto al tacto, rigidez.",
        physicalExam: "Pulgares adducidos, hipotonía axial.",
        mriDetails: "Hiperintensidad en cápsula interna y tractos corticoespinales.",
        clinicalStatus: "Sospecha diagnóstica inicial.",
        pathophysiology: "Acumulación aguda de psicosina neurotóxica.",
        neuroExamDetail: {
          mentalStatus: "Irritabilidad extrema, hiperexcitabilidad.",
          cranialNerves: "Normales.",
          motorSystem: "Tono fluctuante, tendencia al arqueo.",
          reflexes: "Exaltados."
        }
      },
      {
        timeLabel: "Estadio II",
        symptoms: "Regresión motora franca, opistótonos frecuente.",
        physicalExam: "Rigidez marcada, nystagmus, atrofia óptica.",
        mriDetails: "Hipointensidad en tálamos en secuencias T2.",
        clinicalStatus: "Deterioro neurológico severo.",
        pathophysiology: "Infiltración masiva de células globoides multinucleadas.",
        neuroExamDetail: {
          mentalStatus: "Pérdida de contacto visual y sonrisa social.",
          cranialNerves: "Atrofia óptica, respuesta lenta a la luz.",
          motorSystem: "Hipertonía espástica severa.",
          reflexes: "Hiperreflexia, clonus agotable."
        }
      },
      {
        timeLabel: "Estadio III",
        symptoms: "Ausencia de movimientos voluntarios.",
        physicalExam: "Estado vegetativo, ceguera y sordera.",
        mriDetails: "Atrofia cortical y cerebelosa global.",
        clinicalStatus: "Soporte paliativo.",
        pathophysiology: "Desmielinización central y periférica total.",
        neuroExamDetail: {
          mentalStatus: "Sin conciencia de entorno.",
          cranialNerves: "Ausencia de reflejos bulbares.",
          motorSystem: "Flacidez terminal o rigidez fija.",
          reflexes: "Pérdida de reflejos tendinosos."
        }
      }
    ]
  },
  [LeukodystrophyType.MLD]: {
    id: LeukodystrophyType.MLD,
    name: 'MLD',
    fullName: 'Leucodistrofia Metacromática',
    color: '#10b981',
    genetics: "Deficiencia de Arilsulfatasa A (ARSA) en 22q13. Autosómica recesiva.",
    molecularMechanism: "Acumulación de sulfátidos en vainas de mielina (SNC y SNP), riñón y vesícula biliar. Los sulfátidos causan desestabilización de la membrana de mielina.",
    riskFactors: "1 en 40,000 - 160,000 nacimientos.",
    biomarkers: "Actividad de ARSA < 10%. Sulfátidos elevados en orina.",
    historyBase: "Niño de 12-24 meses que inicia con caídas frecuentes y marcha inestable.",
    warningSigns: ["Marcha de puntitas (equino)", "Colelitiasis pediátrica", "Regresión del lenguaje", "Arreflexia"],
    complications: ["Colecistitis no litiásica", "Cuadriplejía espástica", "Demencia"],
    treatment: "Terapia génica ex-vivo (Libmeldy) en pre-sintomáticos. HSCT en formas juveniles.",
    prognosis: "Fallecimiento 5-10 años tras inicio en forma infantil.",
    differential: ["S. Guillain-Barré crónico", "Ataxia de Friedreich", "Gangliosidosis GM1"],
    references: [
      { source: "GeneReviews", title: "Arylsulfatase A Deficiency", url: "https://www.ncbi.nlm.nih.gov/books/NBK1130/" },
      { source: "Radiopaedia", title: "Metachromatic leukodystrophy", url: "https://radiopaedia.org/articles/metachromatic-leukodystrophy" }
    ],
    stages: [
      {
        timeLabel: "Fase Neuropática",
        symptoms: "Debilidad de extremidades inferiores, tropiezos.",
        physicalExam: "Marcha equina, hipotonía distal.",
        mriDetails: "Hiperintensidad T2 periventricular posterior.",
        clinicalStatus: "Fase de diagnóstico diferencial con SNP.",
        pathophysiology: "Desmielinización periférica inicial.",
        neuroExamDetail: {
          mentalStatus: "Cognición preservada.",
          cranialNerves: "Normales.",
          motorSystem: "Debilidad distal (pies).",
          reflexes: "Arreflexia rotuliana y aquilea (clínica SNP)."
        }
      },
      {
        timeLabel: "Fase Cerebral",
        symptoms: "Incapacidad para pararse, ataxia truncal.",
        physicalExam: "Signo de Babinski presente, espasticidad.",
        mriDetails: "Patrón 'tigroide' (preservación perivascular de mielina).",
        clinicalStatus: "Progresión rápida motora.",
        pathophysiology: "Desmielinización central confluente.",
        neuroExamDetail: {
          mentalStatus: "Disartria, lentitud cognitiva.",
          cranialNerves: "Posible nystagmus.",
          motorSystem: "Hipertonía piramidal superpuesta a debilidad SNP.",
          reflexes: "Babinski presente a pesar de arreflexia (signo mixto)."
        }
      },
      {
        timeLabel: "Fase Avanzada",
        symptoms: "Disfagia severa, pérdida de contacto.",
        physicalExam: "Posturas fijas, atrofia óptica.",
        mriDetails: "Atrofia masiva 'cerebro en filo de cuchillo'.",
        clinicalStatus: "Paliativos.",
        pathophysiology: "Muerte axonal secundaria masiva.",
        neuroExamDetail: {
          mentalStatus: "Demencia profunda.",
          cranialNerves: "Pérdida de audición central.",
          motorSystem: "Parálisis total.",
          reflexes: "Ausentes."
        }
      }
    ]
  },
  [LeukodystrophyType.PMD]: {
    id: LeukodystrophyType.PMD,
    name: 'PMD',
    fullName: 'Enfermedad de Pelizaeus-Merzbacher',
    color: '#f59e0b',
    genetics: "Alteraciones en PLP1 (duplicación, deleción o mutación puntual). Xq22.",
    molecularMechanism: "La proteína proteolipídica (PLP1) es la proteína más abundante de la mielina. El exceso de PLP1 (duplicación) es tóxico para el retículo endoplásmico del oligodendrocito.",
    riskFactors: "Varones exclusivamente (Ligada al X).",
    biomarkers: "Pruebas genéticas de PLP1 (MLPA para duplicaciones).",
    historyBase: "Lactante varón con nystagmus ocular pendular desde las primeras semanas de vida.",
    warningSigns: ["Nystagmus pendular neonatal", "Estridor inspiratorio", "Ataxia de cabeza", "Hipotonía axial"],
    complications: ["Escoliosis severa", "Luxación de cadera", "Fallo respiratorio central"],
    treatment: "Soporte vital, manejo de espasticidad, cirugía ortopédica.",
    prognosis: "Supervivencia hasta 4ta-5ta década en formas clásicas.",
    differential: ["Nystagmus idiopático", "Hipomielinización con hipodoncia (HHDL)"],
    references: [
      { source: "GeneReviews", title: "Pelizaeus-Merzbacher Disease", url: "https://www.ncbi.nlm.nih.gov/books/NBK1182/" },
      { source: "NORD", title: "Pelizaeus-Merzbacher Disease", url: "https://rarediseases.org/rare-diseases/pelizaeus-merzbacher-disease/" }
    ],
    stages: [
      {
        timeLabel: "Etapa Neonatal",
        symptoms: "Movimientos oculares rápidos, estridor.",
        physicalExam: "Nystagmus rotatorio, pobre control cefálico.",
        mriDetails: "Ausencia de mielina: T1 no muestra señal brillante.",
        clinicalStatus: "Hipomielinización congénita.",
        pathophysiology: "Oligodendrocitos incapaces de sintetizar mielina madura.",
        neuroExamDetail: {
          mentalStatus: "Alerta.",
          cranialNerves: "Nystagmus pendular horizontal/rotatorio.",
          motorSystem: "Hipotonía axial 'bebé trapo'.",
          reflexes: "Aumentados."
        }
      },
      {
        timeLabel: "Etapa de Infancia",
        symptoms: "Retraso motor global, ataxia.",
        physicalExam: "Temblor de intención, lenguaje lento.",
        mriDetails: "Cerebro 'fetal' (sin mielinización progresiva).",
        clinicalStatus: "Desarrollo motor estancado.",
        pathophysiology: "Aislamiento axonal defectuoso.",
        neuroExamDetail: {
          mentalStatus: "Déficit intelectual leve-moderado.",
          cranialNerves: "Nystagmus disminuye con la edad.",
          motorSystem: "Ataxia de tronco y miembros.",
          reflexes: "Hiperreflexia espástica."
        }
      },
      {
        timeLabel: "Etapa Adulta",
        symptoms: "Espasticidad predominante, contracturas.",
        physicalExam: "Signos piramidales severos, escoliosis.",
        mriDetails: "Atrofia cortical e hiposeñal persistente.",
        clinicalStatus: "Dependencia funcional.",
        pathophysiology: "Degeneración retrógrada axonal.",
        neuroExamDetail: {
          mentalStatus: "Cognición relativamente estable.",
          cranialNerves: "Habla escandida (ataxia-espástica).",
          motorSystem: "Cuadriplejía espástica en tijeras.",
          reflexes: "Exaltados, Babinski bilateral."
        }
      }
    ]
  }
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cuál es el marcador bioquímico confirmatorio para X-ALD en plasma?",
    options: ["Ácidos grasos de cadena muy larga (VLCFA)", "Arilsulfatasa A", "Galactocerebrosidasa", "Psicosina"],
    correctAnswer: 0,
    explanation: "La elevación de VLCFA (especialmente C26:0) es el estándar de oro para el diagnóstico bioquímico de X-ALD."
  },
  {
    id: 2,
    question: "Un lactante de 4 meses con irritabilidad extrema, opistótonos y Psicosina elevada sugiere:",
    options: ["Leucodistrofia Metacromática", "Enfermedad de Krabbe", "Enfermedad de Pelizaeus-Merzbacher", "X-ALD"],
    correctAnswer: 1,
    explanation: "La irritabilidad extrema y la elevación de Psicosina son patognomónicas de la Enfermedad de Krabbe en su forma infantil temprana."
  }
];
