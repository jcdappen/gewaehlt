export type AgeGroup = 'under20' | '20-30' | 'over30';

export type AppState = 'welcome' | 'age-selection' | 'question-flow' | 'transition' | 'letter' | 'cta';

export interface Question {
  id: number;
  question: string;
}
