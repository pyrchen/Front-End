export interface IUserReducer {
  nickname: string;
  email: string;
  id: string;
  quizes: any[];
}

export interface IUserState {
  user: IUserReducer;
  loading: boolean;
  isAuthenticated: boolean;
}

export interface IUserActionDefault {
  type: userTypes.DEFAULT;
}

export interface IUserActionFetchUserBegining {
  type: userTypes.FETCH_USER_BEGINING;
}

export interface IUserActionFetchUserSuccess {
  type: userTypes.FETCH_USER_SUCCESS;
  payload: IUserReducer;
}

export interface IUserActionFetchUserError {
  type: userTypes.FETCH_USER_ERROR;
}

export interface IUserActionClearError {
  type: userTypes.CLEAR_ERROR;
}

export interface IUserActionLogOut {
  type: userTypes.USER_LOGOUT;
}

export interface IUserRegister {
  type: userTypes.REGISTER_USER;
  payload: any;
}

export interface IUserLogin {
  type: userTypes.LOGIN_USER;
  payload: any;
}

export interface IUserReset {
  type: userTypes.RESET_USER;
  payload: any;
}

export enum userTypes {
  DEFAULT = 'DEFAULT',
  REGISTER_USER='REGISTER_USER',
  LOGIN_USER='LOGIN_USER',
  RESET_USER='RESET_USER',
  FETCH_USER_BEGINING = 'FETCH_USER_BEGINING',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
  USER_LOGOUT = 'USER_LOGOUT'
}

export type IUserActions = IUserActionFetchUserBegining | IUserActionFetchUserSuccess | IUserActionFetchUserError | IUserActionDefault | IUserActionClearError | IUserActionLogOut;
