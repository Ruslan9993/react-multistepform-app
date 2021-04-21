import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeSurname, nextStep, prevStep, changeDate, changePatronymic } from '../store/reducers/userInfoRed';
import { changeEmail, changePassword, checkPasswordInput } from '../store/reducers/userPersRed';


export const useInput = () => {

  const dispatch = useDispatch();
  const name = useSelector(state => state.userInfoRed.name);
  const surname = useSelector(state => state.userInfoRed.surname);
  const date = useSelector(state => state.userInfoRed.date);
  const step = useSelector(state => state.userInfoRed.step);
  const patronymic = useSelector(state => state.userInfoRed.patronymic);
  const checkPassword = useSelector(state => state.userPersRed.checkPassword);
  const password = useSelector(state => state.userPersRed.password);
  const email = useSelector(state => state.userPersRed.email);
  
  const handlerChangeName = event => {
    dispatch(changeName(event.target.value));
  }
  const handlerChangeSurname = event => {
    dispatch(changeSurname(event.target.value))
  }
  const handlerNextStep = () => {
    dispatch(nextStep())
  }
  const handlerPrevStep = () => {
    dispatch(prevStep())
  }
  const handlerChangeEmail = event => {
    dispatch(changeEmail(event.target.value))
  }
  const handlerChangeDate = event => {
    dispatch(changeDate(event.target.value))
  }
  const handlerChangePassword = event => {
    dispatch(changePassword(event.target.value))
  }
  const handlerChangeCheckPassword = event => {
    dispatch(checkPasswordInput(event.target.value))
  }
  const handlerChangePatronymic = event => {
    dispatch(changePatronymic(event.target.value))
  }
  return {
      vars: {
        name,
        surname,
        patronymic,
        step,
        email,
        date,
        password,
        checkPassword
      },
      methods: {
        handlerChangeName,
        handlerChangeSurname,
        handlerNextStep,
        handlerPrevStep,
        handlerChangeEmail,
        handlerChangeDate,
        handlerChangePassword,
        handlerChangeCheckPassword,
        handlerChangePatronymic,

      }
    }
}