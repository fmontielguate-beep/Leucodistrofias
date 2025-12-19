
import { LeukodystrophyType, DiseaseData, QuizQuestion } from './types';

export const DISEASES: Record<LeukodystrophyType, DiseaseData> = {
  [LeukodystrophyType.GENERAL]: {
    id: LeukodystrophyType.GENERAL,
    name: 'General',
    fullName: 'Definición de Leucodistrofias',
    color: '#6366f1',
    genetics: "Trastornos genéticos heterogéneos (más de 50 tipos identificados) que afectan principalmente la formación, mantenimiento o integridad de la mielina en el SNC.",
    riskFactors: "Principalmente herencia autosómica recesiva, ligada al X o mutaciones de novo. La consanguinidad es un factor de riesgo en formas recesivas.",
    biomarkers: "Dependen del tipo: Enzimas lisosomales, ácidos grasos, análisis de ADN y espectroscopia por RMN.",
    historyBase: "Grupo de enfermedades raras caracterizadas por un declive motor y cognitivo progresivo en pacientes previamente sanos, debido a la degeneración de la sustancia blanca.",
    warningSigns: [
      "Regresión de hitos del desarrollo motor.",
      "Cambios inexplicables en el tono muscular (hipotonía/espasticidad).",
      "Disfunción visual o auditiva de origen central.",
      "Convulsiones o deterioro cognitivo progresivo."
    ],
    complications: [
      "Inmovilidad total y contracturas.",
      "Pérdida de funciones bulbares (deglución).",
      "Fallo multiorgánico o respiratorio.",
      "Afectación del sistema nervioso periférico en tipos específicos."
    ],
    treatment: "Multidisciplinario. Varía desde el manejo de soporte hasta intervenciones curativas como el trasplante de células madre (HSCT) o terapia génica en fases tempranas.",
    prognosis: "Generalmente progresivo y fatal, aunque la velocidad de declive varía ampliamente según el defecto genético y la edad de inicio.",
    differential: ["Parálisis cerebral atípica", "Secuelas de hipoxia-isquemia", "Infecciones TORCH", "Errores innatos del metabolismo"],
    stages: [
      {
        timeLabel: "Clasificación I",
        symptoms: "Leucodistrofias Desmielinizantes: La mielina se forma pero se destruye (Ej. X-ALD, MLD, Krabbe).",
        physicalExam: "Suelen presentar una fase inicial de desarrollo normal seguida de regresión rápida.",
        mriDetails: "Pérdida de señal de mielina en secuencias T1 y T2 de forma confluente.",
        clinicalStatus: "Enfoque en diagnóstico diferencial bioquímico.",
        pathophysiology: "Acumulación de metabolitos tóxicos que inducen apoptosis de oligodendrocitos."
      },
      {
        timeLabel: "Clasificación II",
        symptoms: "Leucodistrofias Hipomielinizantes: El cerebro nunca logra fabricar suficiente mielina (Ej. PMD).",
        physicalExam: "Suelen presentarse desde el nacimiento o lactancia temprana con nystagmus y retraso.",
        mriDetails: "Déficit persistente de mielinización en estudios seriados (T1 isointenso).",
        clinicalStatus: "Enfoque en soporte vital y rehabilitación.",
        pathophysiology: "Defectos estructurales en proteínas de membrana de la mielina."
      },
      {
        timeLabel: "Diagnóstico",
        symptoms: "Algoritmo Diagnóstico: RMN de alta resolución -> Pruebas Bioquímicas -> Secuenciación Genética.",
        physicalExam: "Evaluación exhaustiva de reflejos, fondo de ojo y función cognitiva.",
        mriDetails: "La distribución de la lesión (anterior vs posterior) orienta al tipo específico.",
        clinicalStatus: "Importancia del Tamiz Neonatal para intervención pre-sintomática.",
        pathophysiology: "Deterioro de la conducción nerviosa por pérdida de aislamiento axonal."
      }
    ]
  },
  [LeukodystrophyType.XALD]: {
    id: LeukodystrophyType.XALD,
    name: 'X-ALD',
    fullName: 'Adrenoleucodistrofia Ligada al X',
    color: '#ef4444',
    genetics: "Mutación en el gen ABCD1 (Xq28). Defecto en la proteína ALDP del peroxisoma.",
    riskFactors: "Herencia ligada al X. Antecedentes de insuficiencia suprarrenal en varones.",
    biomarkers: "VLCFA elevados en plasma. ACTH elevada.",
    historyBase: "Varón (4-10 años) con cambios de conducta, TDAH de inicio nuevo e hiperpigmentación cutánea.",
    warningSigns: [
      "Hiperpigmentación en encías/cicatrices.",
      "Deterioro escolar abrupto.",
      "Agnosia auditiva.",
      "Crisis Addisoniana."
    ],
    complications: [
      "Ceguera cortical.",
      "Disfagia severa.",
      "Estado vegetativo.",
      "Neumonías recurrentes."
    ],
    treatment: "HSCT (Trasplante) en fase temprana (Loes < 4). Terapia génica. Reemplazo de corticoides.",
    prognosis: "Fase cerebral: Fatal en 2-5 años sin tratamiento. Pronóstico excelente con trasplante pre-sintomático.",
    differential: ["TDAH", "Esclerosis Múltiple", "Addison idiopático"],
    stages: [
      {
        timeLabel: "Fase Inicial",
        symptoms: "Dificultades de atención, errores en procesamiento auditivo.",
        physicalExam: "Hiperpigmentación cutánea marcada, reflejos exaltados.",
        mriDetails: "Hiperintensidad T2 en esplenio y radiaciones ópticas.",
        clinicalStatus: "Ventana ideal para trasplante curativo.",
        pathophysiology: "Neuroinflamación desmielinizante masiva mediada por microglía."
      },
      {
        timeLabel: "Fase Moderada",
        symptoms: "Pérdida de visión, ataxia, convulsiones.",
        physicalExam: "Tetraparesia espástica, signo de Babinski bilateral.",
        mriDetails: "Realce con gadolinio periférico (ruptura de BHE).",
        clinicalStatus: "Progresión activa, alto riesgo terapéutico.",
        pathophysiology: "Cascada inflamatoria que destruye la barrera hematoencefálica."
      },
      {
        timeLabel: "Fase Avanzada",
        symptoms: "Mutismo, cuadriplejía, incapacidad de comunicación.",
        physicalExam: "Rigidez de descerebración, atrofia óptica.",
        mriDetails: "Atrofia masiva y cavitación posterior.",
        clinicalStatus: "Cuidados paliativos.",
        pathophysiology: "Pérdida axonal total y gliosis cicatricial."
      }
    ]
  },
  [LeukodystrophyType.KRABBE]: {
    id: LeukodystrophyType.KRABBE,
    name: 'Krabbe',
    fullName: 'Leucodistrofia de Células Globoides',
    color: '#3b82f6',
    genetics: "Deficiencia de Galactocerebrosidasa (GALC) en 14q31. Autosómica recesiva.",
    riskFactors: "Consanguinidad. Muertes infantiles tempranas previas en la familia.",
    biomarkers: "Psicosina elevada en sangre. Actividad de GALC < 5%.",
    historyBase: "Lactante (3-6 meses) con llanto inconsolable, irritabilidad extrema y arqueo tónico.",
    warningSigns: [
      "Hipersensibilidad sensorial.",
      "Opistótonos (arqueo del tronco).",
      "Pérdida de hitos motores.",
      "Fiebres inexplicables."
    ],
    complications: [
      "Disfunción bulbar.",
      "Desnutrición severa.",
      "Estatus epiléptico.",
      "Insuficiencia respiratoria."
    ],
    treatment: "HSCT solo en recién nacidos pre-sintomáticos (< 30 días). Paliativo tras inicio de síntomas.",
    prognosis: "Forma infantil: Muerte antes de los 2 años. Formas tardías: Progresión motora lenta.",
    differential: ["Parálisis cerebral", "Enfermedad de Canavan", "Reflujo severo"],
    stages: [
      {
        timeLabel: "Estadio I",
        symptoms: "Irritabilidad severa, dificultades de alimentación.",
        physicalExam: "Hipotonía axial con hipertonía distal.",
        mriDetails: "Afectación de cápsula interna y tractos descendentes.",
        clinicalStatus: "Fase de sospecha clínica crucial.",
        pathophysiology: "Acumulación de Psicosina neurotóxica."
      },
      {
        timeLabel: "Estadio II",
        symptoms: "Regresión total, ceguera, sordera.",
        physicalExam: "Rigidez intensa, atrofia óptica, nystagmus.",
        mriDetails: "Señal hipointensa en tálamos en T2.",
        clinicalStatus: "Deterioro neurológico profundo.",
        pathophysiology: "Infiltración de macrófagos (Células Globoides)."
      },
      {
        timeLabel: "Estadio III",
        symptoms: "Estado vegetativo, ausencia de respuesta.",
        physicalExam: "Posturas fijas, ausencia de reflejos bulbares.",
        mriDetails: "Atrofia cerebral y cerebelosa global.",
        clinicalStatus: "Soporte paliativo terminal.",
        pathophysiology: "Gliosis total y destrucción de la arquitectura blanca."
      }
    ]
  },
  [LeukodystrophyType.MLD]: {
    id: LeukodystrophyType.MLD,
    name: 'MLD',
    fullName: 'Leucodistrofia Metacromática',
    color: '#10b981',
    genetics: "Deficiencia de Arilsulfatasa A (ARSA) en 22q13. Depósito de sulfátidos.",
    riskFactors: "Marcha equina en la familia o neuropatía motora inexplicable.",
    biomarkers: "Sulfátidos elevados en orina. ARSA baja en leucocitos.",
    historyBase: "Niño (12-24 meses) que tras caminar inicia con caídas frecuentes y marcha inestable.",
    warningSigns: [
      "Marcha equina (de puntillas).",
      "Colelitiasis pediátrica.",
      "Arreflexia (pérdida de reflejos).",
      "Regresión del lenguaje."
    ],
    complications: [
      "Colecistitis no litiásica.",
      "Cuadriplejía espástica.",
      "Demencia infantil.",
      "Úlceras de decúbito."
    ],
    treatment: "Terapia génica (Libmeldy) en pre-sintomáticos. HSCT en formas juveniles seleccionadas.",
    prognosis: "Forma infantil: Fallecimiento entre 5 y 10 años tras diagnóstico.",
    differential: ["Guillain-Barré crónico", "Ataxia de Friedreich"],
    stages: [
      {
        timeLabel: "Fase Inicial",
        symptoms: "Debilidad distal en pies, inestabilidad truncal.",
        physicalExam: "Pérdida de reflejos rotulianos (neuropatía SNP).",
        mriDetails: "Hiperintensidad T2 periventricular posterior.",
        clinicalStatus: "Afectación mixta SNC/SNP.",
        pathophysiology: "Sulfátidos destruyen mielina central y periférica."
      },
      {
        timeLabel: "Fase Intermedia",
        symptoms: "Incapacidad de bipedestación, disartria progresiva.",
        physicalExam: "Aparición de signos piramidales (Babinski +).",
        mriDetails: "Patrón tigroide o de leopardo característico.",
        clinicalStatus: "Declive cognitivo-motor acelerado.",
        pathophysiology: "Desmielinización central confluente."
      },
      {
        timeLabel: "Fase Avanzada",
        symptoms: "Mutismo, disfagia, pérdida visual.",
        physicalExam: "Contracturas fijas, ceguera cortical.",
        mriDetails: "Atrofia masiva, pérdida de diferenciación tisular.",
        clinicalStatus: "Dependencia total paliativa.",
        pathophysiology: "Pérdida masiva de soporte axonal."
      }
    ]
  },
  [LeukodystrophyType.PMD]: {
    id: LeukodystrophyType.PMD,
    name: 'PMD',
    fullName: 'Enfermedad de Pelizaeus-Merzbacher',
    color: '#f59e0b',
    genetics: "Alteraciones en el gen PLP1 (Xq22). Hipomielinización ligada al X.",
    riskFactors: "Varones con nystagmus neonatal persistente.",
    biomarkers: "Estudio genético confirmatorio de PLP1.",
    historyBase: "Lactante varón con nystagmus pendular desde el mes de vida y debilidad axial severa.",
    warningSigns: [
      "Nystagmus pendular neonatal.",
      "Estridor inspiratorio.",
      "Ataxia de cabeza y manos.",
      "Hipotonía axial marcada."
    ],
    complications: [
      "Escoliosis severa.",
      "Disfunción del habla.",
      "Luxación de cadera.",
      "Fallo respiratorio restrictivo."
    ],
    treatment: "Manejo de soporte multidisciplinario. Toxina botulínica. Cirugía ortopédica.",
    prognosis: "Forma clásica: Supervivencia hasta 4ta-5ta década. Forma connatal: Grave.",
    differential: ["Síndrome de nystagmus idiopático", "Parálisis cerebral"],
    stages: [
      {
        timeLabel: "Lactancia",
        symptoms: "Movimientos oculares rápidos, debilidad de cuello.",
        physicalExam: "Hipotonía 'bebé trapo', nystagmus rotatorio.",
        mriDetails: "Ausencia de señal de mielina en T1 (se ve gris).",
        clinicalStatus: "Diagnóstico diferencial con causas oculares.",
        pathophysiology: "Oligodendrocitos incapaces de madurar mielina."
      },
      {
        timeLabel: "Niñez",
        symptoms: "Desarrollo motor muy lento, ataxia, temblor.",
        physicalExam: "Temblor intencional, retraso del lenguaje.",
        mriDetails: "Señal T2 hiperintensa homogénea estable.",
        clinicalStatus: "Fase de rehabilitación física máxima.",
        pathophysiology: "Déficit crónico de aislamiento axonal."
      },
      {
        timeLabel: "Adolescencia",
        symptoms: "Espasticidad predominante, pérdida de funciones.",
        physicalExam: "Escoliosis, contracturas en tijera.",
        mriDetails: "Atrofia cortical y del tronco encefálico.",
        clinicalStatus: "Manejo ortopédico.",
        pathophysiology: "Degeneración axonal por falta de soporte trófico."
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
  },
  {
    id: 3,
    question: "El patrón 'tigroide' o de 'piel de leopardo' en la RMN es una clave diagnóstica para:",
    options: ["Adrenoleucodistrofia", "Enfermedad de Krabbe", "Leucodistrofia Metacromática", "Enfermedad de Pelizaeus-Merzbacher"],
    correctAnswer: 2,
    explanation: "Se debe a la preservación relativa de mielina en los espacios perivasculares (venas medulares), dando ese aspecto estriado."
  },
  {
    id: 4,
    question: "El nystagmus pendular neonatal y el estridor laríngeo son signos característicos de:",
    options: ["Enfermedad de Pelizaeus-Merzbacher", "MLD Juvenil", "X-ALD Cerebral", "Enfermedad de Canavan"],
    correctAnswer: 0,
    explanation: "El nystagmus pendular en las primeras semanas de vida es casi universal en pacientes con mutaciones en PLP1 (PMD)."
  },
  {
    id: 5,
    question: "Un varón de 7 años con diagnóstico reciente de TDAH que presenta hiperpigmentación cutánea debe evaluarse para:",
    options: ["Síndrome de Cushing", "Adrenoleucodistrofia Ligada al X", "Enfermedad de Addison idiopática", "Leucodistrofia Metacromática"],
    correctAnswer: 1,
    explanation: "La coexistencia de síntomas neurocognitivos y evidencia clínica de insuficiencia suprarrenal (hiperpigmentación) es altamente sugestiva de X-ALD."
  },
  {
    id: 6,
    question: "¿En qué cromosoma se localiza el gen ARSA, cuya deficiencia causa la Leucodistrofia Metacromática?",
    options: ["Xq28", "14q31", "22q13", "Xq22"],
    correctAnswer: 2,
    explanation: "El gen ARSA se localiza en el cromosoma 22q13.31. Es un dato crítico para la asesoría genética y diagnóstico molecular."
  },
  {
    id: 7,
    question: "La 'ventana terapéutica' para el trasplante de células madre (HSCT) en la enfermedad de Krabbe infantil se cierra generalmente a los:",
    options: ["10 días de vida", "30 días de vida", "6 meses de vida", "12 meses de vida"],
    correctAnswer: 1,
    explanation: "Para ser efectivo, el HSCT en Krabbe infantil debe realizarse en pacientes pre-sintomáticos, idealmente antes de los 30 días de vida."
  },
  {
    id: 8,
    question: "¿Cuál es la fisiopatología molecular primaria de la Adrenoleucodistrofia Ligada al X?",
    options: ["Acumulación de sulfátidos en vainas de mielina", "Falla en el transporte de VLCFA al peroxisoma", "Deficiencia de mielinización por defecto de PLP1", "Acumulación de macrófagos globoides"],
    correctAnswer: 1,
    explanation: "La mutación en ABCD1 impide que la proteína ALDP transporte VLCFA al peroxisoma para su beta-oxidación."
  },
  {
    id: 9,
    question: "La afectación del sistema nervioso periférico (SNP) con arreflexia y aumento de proteínas en LCR es típico de:",
    options: ["PMD", "MLD", "X-ALD", "Esclerosis Múltiple"],
    correctAnswer: 1,
    explanation: "MLD afecta tanto la mielina central como la periférica, resultando en una neuropatía desmielinizante con arreflexia."
  },
  {
    id: 10,
    question: "En la RMN de un paciente con X-ALD cerebral, el realce con gadolinio en la periferia de la lesión indica:",
    options: ["Cavitación inactiva", "Ruptura activa de la barrera hematoencefálica e inflamación", "Calcificación distrófica", "Proceso de remielinización"],
    correctAnswer: 1,
    explanation: "El realce indica el frente de desmielinización activa e inflamación mediada por microglía/macrófagos."
  },
  {
    id: 11,
    question: "¿Qué escala se utiliza universalmente para cuantificar la severidad de la afectación por RMN en X-ALD?",
    options: ["Escala de Glasgow", "Escala de Loes", "Escala de Kurtzke (EDSS)", "Escala de Apgar"],
    correctAnswer: 1,
    explanation: "La escala de Loes (0-34 puntos) evalúa la extensión y localización de las lesiones de sustancia blanca en X-ALD."
  },
  {
    id: 12,
    question: "Un hallazgo radiológico de hipointensidad en los tálamos en secuencias T2 es sugestivo de:",
    options: ["X-ALD", "Enfermedad de Krabbe", "Enfermedad de Pelizaeus-Merzbacher", "MLD"],
    correctAnswer: 1,
    explanation: "En la enfermedad de Krabbe infantil temprana, se observa frecuentemente hipointensidad talámica en T2."
  },
  {
    id: 13,
    question: "La colecistitis no litiásica (inflamación de vesícula sin piedras) es una complicación sistémica descrita en:",
    options: ["Krabbe", "PMD", "Leucodistrofia Metacromática", "X-ALD"],
    correctAnswer: 2,
    explanation: "La acumulación de sulfátidos en el epitelio de la vesícula biliar en MLD puede causar engrosamiento y colecistitis."
  },
  {
    id: 14,
    question: "La distinción principal entre Leucodistrofias Desmielinizantes e Hipomielinizantes en RMN se basa en:",
    options: ["La presencia de nystagmus", "La estabilidad del déficit de mielina en estudios seriados (T1 y T2)", "La edad de inicio únicamente", "La respuesta al trasplante"],
    correctAnswer: 1,
    explanation: "Las hipomielinizantes (como PMD) muestran un déficit persistente y estable de mielina, mientras que las desmielinizantes muestran progresión rápida."
  },
  {
    id: 15,
    question: "¿Cuál es el compuesto neurotóxico que causa la muerte de oligodendrocitos en la Enfermedad de Krabbe?",
    options: ["Ácido fitánico", "Psicosina", "Sulfátido", "Ácido docosanoico"],
    correctAnswer: 1,
    explanation: "La psicosina (galactosil-esfingosina) se acumula masivamente ante la falta de GALC y es letal para las células productoras de mielina."
  },
  {
    id: 16,
    question: "El estridor laríngeo o inspiratorio en PMD se debe a:",
    options: ["Obstrucción mecánica por moco", "Disfunción de los nervios craneales/tronco cerebral", "Infecciones recurrentes", "Afectación de la placa neuromuscular"],
    correctAnswer: 1,
    explanation: "Es un signo de disfunción del tronco encefálico (vías motoras centrales) común en formas connatal o severas de PMD."
  },
  {
    id: 17,
    question: "En MLD, la deficiencia de qué cofactor puede simular la deficiencia de ARSA?",
    options: ["Vitamina B12", "Sapocina B", "Vitamina B1", "Biotina"],
    correctAnswer: 1,
    explanation: "La proteína activadora de la arilsulfatasa A (Sapocina B) es necesaria para la función enzimática; su defecto causa MLD con ARSA normal."
  },
  {
    id: 18,
    question: "¿Cuál es la herencia de la Enfermedad de Pelizaeus-Merzbacher?",
    options: ["Autosómica Recesiva", "Autosómica Dominante", "Ligada al X", "Mitocondrial"],
    correctAnswer: 2,
    explanation: "PMD es causada por mutaciones en PLP1, ubicado en el cromosoma Xq22, por lo que afecta principalmente a varones."
  },
  {
    id: 19,
    question: "Un Loes Score de 15 en un paciente con X-ALD cerebral indica:",
    options: ["Afectación leve, candidato ideal para trasplante", "Afectación moderada-avanzada, alto riesgo para trasplante", "Cerebro normal", "Recuperación espontánea"],
    correctAnswer: 1,
    explanation: "Generalmente, un Loes Score > 9 indica una afectación cerebral avanzada donde el éxito del trasplante disminuye drásticamente."
  },
  {
    id: 20,
    question: "La terapia génica ex-vivo con células hematopoyéticas (Libmeldy) está aprobada actualmente para:",
    options: ["X-ALD en adultos", "MLD pre-sintomática o sintomática temprana", "Krabbe terminal", "Todos los tipos de leucodistrofia"],
    correctAnswer: 1,
    explanation: "Atidarsagene autotemcel (Libmeldy) ha demostrado alta eficacia en MLD infantil/juvenil antes de que ocurra un daño motor irreversible."
  }
];
