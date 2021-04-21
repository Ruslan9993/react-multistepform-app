import { NEXT_STEP, CHANGE_NAME, CHANGE_PATRONYMIC, CHANGE_SURNAME, CHANGE_DATE, PREV_STEP } from '../actions/userInfoActions';

const initialState = {
  step: 1,
  name: '',
  patronymic: '',
  surname: '',
  date: '',
}

export const userInfoRed = (state = initialState, action) => {
  switch(action.type) {
    case NEXT_STEP: 
      return { ...state, step: state.step + 1}
    case PREV_STEP: 
      return { ...state, step: state.step - 1}
    case CHANGE_NAME: 
      return  { ...state, name: action.payload}
    case CHANGE_PATRONYMIC:
        return { ...state, patronymic: action.payload}  
    case CHANGE_SURNAME:
        return { ...state, surname: action.payload}
    case CHANGE_DATE:
        return { ...state, date: action.payload}  
    default: 
      return state;
  }
}

export const nextStep = () => {
  return {
    type: NEXT_STEP,
  }
}
export const prevStep = () => {
  return {
    type: PREV_STEP,
  }
}

export const changeName = payload => {
  return {
    type: CHANGE_NAME,
    payload
  }
}
export const changePatronymic = payload => {
  return {
    type: CHANGE_PATRONYMIC,
    payload
  }
}
export const changeSurname = payload => {
  return {
    type: CHANGE_SURNAME,
    payload
  }
}
export const changeDate = payload => {
  return {
    type: CHANGE_DATE,
    payload
  }
}
