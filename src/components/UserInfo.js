import { Input, Button, TextField } from '@material-ui/core';
import '../UserInfo.css';
import { useInput } from './useInput';
import '../UserInfo.css';

const UserInfo = () => {

  const input = useInput();
  const flag = input.vars.name && input.vars.surname && input.vars.date;

  const styles = {
    backgroundColor: flag ? 'green' : 'red',
    opacity: flag ? '1' : '.3',
    color: '#fff',
    padding: '10px',
    marginTop: '2rem',
    
  }
  const submit = () => {
    flag ?  input.methods.handlerNextStep() : alert('Empty')
  }
  return (
    <div className='UserInfo'>
      <p>Name</p>
      <Input 
        className='input'
        onChange={input.methods.handlerChangeName}
        value={input.vars.name}
        placeholder='name...'
      />
      <p>Surname</p>
      <Input 
        className='input second'
        onChange={input.methods.handlerChangeSurname}
        value={input.vars.surname}
        placeholder='surname...'
      />
      <p>Patronymic</p>
      <Input 
        className='input second'
        onChange={input.methods.handlerChangePatronymic}
        value={input.vars.patronymic}
        placeholder='patronymic...'
      />
      <TextField 
      className='input'
      type='date'
      value={input.vars.date}
      onChange={input.methods.handlerChangeDate}
      />
        <Button style={styles} onClick={submit}>Next</Button>
    </div>
  )
}

export default UserInfo;