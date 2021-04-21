
import UserInfo from './UserInfo';
import UserPers from './UserPers';
import Results from './Results';
import Password from './Password';
import '../App.css';
import { useSelector } from 'react-redux';

const MainForm = () => {
  const step = useSelector(state => state.userInfoRed.step);
  
  const MAP = {
    1: <UserInfo />,
    2: <UserPers />,
    3: <Password />,
    4: <Results />

  }
    return (
      MAP[step]
    )
  }
export default MainForm;
