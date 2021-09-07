export enum QuestionTypes {
  SA = 'SA', TA = 'TA', RA ='RA', AB ='AB'
};

export type QuestionParamsTypes = {
  qType: QuestionTypes;
};

export interface IQuizData {
  title: string;
  src: string;
  description: string;
  type: QuestionTypes;
}