
export interface Option {
  id: string;
  text: string;
  image: string;
}

export interface Question {
  id: string;
  question: string;
  options: Option[];
}

export interface Answer {
  questionId: string;
  answerId: string;
}
