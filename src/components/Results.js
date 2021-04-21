import { useInput } from './useInput';
// import { Button } from '@material-ui/core';
import '../UserInfo.css';

const Results = () => {
  const input = useInput();
  return (
    <div className='UserInfo'>
      <p>Success!</p>
      <p>Your name: {input.vars.name}</p>
      <p>Your surname: {input.vars.surname}</p>
      <p>Your patronymic: {input.vars.patronymic}</p>
      <p>Your email: {input.vars.email}</p>
      <p>Your date: {input.vars.date}</p>

      {/* <Button style={{backgroundColor: 'green', color: '#fff'}} onClick={() => input.methods.handlerPrevStep()} color='primary'>Prev</Button> */}
    </div>
  )
}

export default Results;
