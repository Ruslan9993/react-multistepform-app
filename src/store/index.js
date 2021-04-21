import { createStore, combineReducers } from 'redux';
import { userInfoRed } from './reducers/userInfoRed';
import { userPersRed } from './reducers/userPersRed';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  userInfoRed,
  userPersRed,

})
export const store = createStore(rootReducer, composeWithDevTools());