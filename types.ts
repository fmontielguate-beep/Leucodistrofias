
export enum LeukodystrophyType {
  GENERAL = 'General',
  XALD = 'X-ALD',
  KRABBE = 'Krabbe',
  MLD = 'MLD',
  PMD = 'PMD'
}

export interface ProgressionStage {
  timeLabel: string;
  symptoms: string;
  physicalExam: string;
  mriDetails: string;
  clinicalStatus: string;
  pathophysiology: string;
  neuroExamDetail: {
    mentalStatus: string;
    cranialNerves: string;
    motorSystem: string;
    reflexes: string;
  };
}

export interface Reference {
  source: string;
  title: string;
  url: string;
}

export interface DiseaseData {
  id: LeukodystrophyType;
  name: string;
  fullName: string;
  color: string;
  genetics: string;
  molecularMechanism: string;
  riskFactors: string;
  biomarkers: string;
  historyBase: string;
  warningSigns: string[];
  complications: string[];
  treatment: string;
  prognosis: string;
  differential: string[];
  stages: ProgressionStage[];
  references: Reference[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
