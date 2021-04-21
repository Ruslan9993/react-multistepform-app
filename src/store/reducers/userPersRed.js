import { CHANGE_EMAIL, CHANGE_PASSWORD, CHECK_PASSWORD} from '../actions/userPersActions';

const initialState = {
  email: '',
  password: '',
  checkPassword: '',

}


export const userPersRed = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_EMAIL:
        return { ...state, email: action.payload}
    case CHANGE_PASSWORD:
        return { ...state, password: action.payload}
    case CHECK_PASSWORD: 
        return { ...state, checkPassword: action.payload}
    default: 
      return state;
  }

}

export const changePassword = payload => {
  return {
    type: CHANGE_PASSWORD,
    payload
  }
}
export const checkPasswordInput = payload => {
  return {
    type: CHECK_PASSWORD,
    payload
  }
}
export const changeEmail = payload => {
  return {
    type: CHANGE_EMAIL,
    payload
  }
}