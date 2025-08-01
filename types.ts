
export enum AppScreen {
  Welcome,
  Question,
  Transition,
  Revelation,
}

export type PersonalityTrait = 'fighter' | 'creative' | 'healer' | 'adventurer' | 'community' | 'leader' | 'thinker';

export interface QuestionOption {
  text: string;
  image: string;
  trait: PersonalityTrait;
}

export interface Question {
  id: string;
  category: string;
  questionText: string;
  options: QuestionOption[];
}

export type Answers = Record<string, string>;
export type AnswerTraits = Record<string, PersonalityTrait>;
