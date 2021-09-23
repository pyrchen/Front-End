import React, { FC } from 'react';
import { TA_QuestionProps } from './TA_Question.props';
import styles from './TA_Question.module.css';
import { HTag, Editor, Card, Button, HR } from '../../../components/index'; 
import { useState } from 'react';
import parse from 'html-react-parser';

export const TA_Question: FC<TA_QuestionProps> = ({question, usersAnswers, creator, title, ...props}) => {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <Card className={styles.questionWrapper} {...props}>
      <HTag size="m" className={styles.questionTitle}>{title}</HTag>
      <div className={styles.question}>{parse(question)}</div>
      {
        hidden && <Button color="ghost" className={styles.toAnswer} onClick={() => setHidden(false)}>Click to leave your answer</Button>
      }
      {
        !hidden && <Editor />
      }
      <HR color="gray" className={styles.hr}/>
      <div className={styles.info}>
        <HTag size="s">Answers:&nbsp;{usersAnswers.length}</HTag>
        <Button color="primary">Save answer</Button>
      </div>
    </Card>
  );
};