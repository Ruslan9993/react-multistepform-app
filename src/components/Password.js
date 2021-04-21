import { useInput } from './useInput';
import { TextField, Button } from '@material-ui/core';
import './UserInfo';

const Password = () => {
  const input = useInput();
  const flag = input.vars.password === input.vars.checkPassword && input.vars.password && input.vars.checkPassword && input.vars.password.length > 5;
  const styles = {
    backgroundColor: flag ? 'green' : 'red',
    opacity: flag ? '1' : '.3',
    color: '#fff',
  }

  return (
    <div className='UserInfo'>
      <TextField 
      className='input'
      type='password'
      value={input.vars.password}
      onChange={input.methods.handlerChangePassword}
      />
      <TextField 
      className='input'
      type='password'
      value={input.vars.checkPassword}
      onChange={input.methods.handlerChangeCheckPassword}
      />

      <div className='buttons'>
        <Button style={styles} onClick={() => flag ?  input.methods.handlerNextStep() : alert('Not equal')} color='primary'>Next</Button>
        <Button style={{backgroundColor: 'green', color: '#fff'}} onClick={() => input.methods.handlerPrevStep()} color='primary'>Prev</Button>
      </div>
    </div>

  )

}

export default Password;