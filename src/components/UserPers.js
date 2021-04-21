import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useInput } from './useInput';
import '../UserInfo.css';

const UserPers = () => {
  const input = useInput();
  const flag = validateEmail(input.vars.email)

  const styles = {
    backgroundColor: flag ? 'green' : 'red',
    opacity: flag ? '1' : '.3',
    color: '#fff',
  }
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  return (
    <div className='UserInfo'>
      <p>E-mail</p>
      <Input 
      className='email'
      value={input.vars.email}
      onChange={input.methods.handlerChangeEmail}
      placeholder='E-mail...'
      />
      <div className='buttons'>
        <Button style={styles} onClick={() => flag ?  input.methods.handlerNextStep() : alert('Empty')} color='primary'>Next</Button>
        <Button style={{backgroundColor: 'green', color: '#fff'}} onClick={() => input.methods.handlerPrevStep()} color='primary'>Prev</Button>
      </div>
    </div>
  )
}

export default UserPers;
