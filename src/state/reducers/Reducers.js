import { combineReducers } from 'redux';
import AdviceReducer from './AdviceReducer';

export default combineReducers({
  advice: AdviceReducer
});