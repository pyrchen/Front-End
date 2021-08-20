import React from 'react';
import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({ children, className, ...props }: CardProps): JSX.Element => {
  return (
    <div {...props}
      className={cn(styles.card, className)}
    >
      {children}
    </div>
  );
};