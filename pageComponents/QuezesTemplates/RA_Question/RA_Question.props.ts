import { DetailedHTMLProps, HTMLAttributes } from "react";
import { MainQuestionsProps } from "../../../interfaces/quizes.interface";
import { WithOnSave } from '../general.interface'

export interface RA_QuestionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, MainQuestionsProps, WithOnSave {
  quizAnswers?: [any];
}