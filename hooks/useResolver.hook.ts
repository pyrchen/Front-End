import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { MyIsAlphanumeric, MyIsEmail, MyIsNotEmpty, MyIsString, MyMaxLength, MyMinLength } from '../constants/myValidator';

class User {
  @MyMaxLength(24)
  @MyMinLength(4)
  @MyIsAlphanumeric()
  @MyIsString()
  @MyIsNotEmpty()
  // @MyNotContains('A-Za-z')
  nickname: string;
  
  @MyIsEmail()
  @MyIsString()
  @MyIsNotEmpty()
  email: string;
  
  @MyMaxLength(20)
  @MyMinLength(4)
  @MyIsString()
  @MyIsNotEmpty()
  password: string;
  
  @MyMaxLength(20)
  @MyMinLength(4)
  @MyIsString()
  @MyIsNotEmpty()
  confirm: string;

  @MyMaxLength(20)
  @MyMinLength(4)
  @MyIsString()
  @MyIsNotEmpty()
  oldPassword: string;
  
  getValidatorFields = (): string[] => {
    return ['confirm', 'password', 'oldPassword', 'nickname', 'email'];
  };
}

class Quiz {
  @MyMaxLength(30)
  @MyMinLength(10)
  @MyIsString()
  @MyIsNotEmpty()
  // @MyNotContains('A-Za-z')
  title: string;
  
  @MyMaxLength(255)
  @MyMinLength(10)
  @MyIsString()
  @MyIsNotEmpty()
  question: string;
  
  @MyMaxLength(25)
  @MyMinLength(4)
  @MyIsString()
  @MyIsNotEmpty()
  answer: string;

  getValidatorFields = (): string[] => {
    return ['title', 'question', 'answer'];
  };
}

const validators = {
  User: {
    resolver: classValidatorResolver(User, { skipMissingProperties: true, skipUndefinedProperties: true }, {
      mode: 'sync'
    }),
    initial: User
  },
  Quiz: {
    resolver: classValidatorResolver(Quiz, {
      skipMissingProperties: true,
      skipUndefinedProperties: true
    }, {
      mode: 'sync'
    }),
    initial: Quiz
  },
  validators: [User, Quiz]
};

export const useResolver = (): any => {
  return validators;
};