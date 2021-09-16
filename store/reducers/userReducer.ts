import { getEmptyObject } from "../../helpers/custom.helper";
import { IUserActions, IUserReducer, IUserState, userTypes } from "../interfaces-reducers/userReducer.interface";

const initialState: IUserState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    id: '',
    questions: []
  },
  isAuthenticated: false,
  loading: false
};

export const userReducer = (state = initialState, action: IUserActions): IUserState => {
  switch (action.type) {
    case userTypes.FETCH_USER_BEGINING:
      return {...state, loading: true};
    case userTypes.FETCH_USER_SUCCESS:
      return {...state, user: action.payload, isAuthenticated: true, loading: false};
    case userTypes.USER_LOGOUT:
      return {...state, user: getEmptyObject<IUserReducer>(state.user), isAuthenticated: false};
    case userTypes.FETCH_USER_ERROR:
      return {...state, loading: false};
    default: return state;
  }
};