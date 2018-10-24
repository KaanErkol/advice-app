import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as AdviceActions from '../../actions/AdviceActions';

export default function* getAdvice() {
  const response = yield call(axios.get, 'http://api.adviceslip.com/advice');
  yield put(AdviceActions.showAdvice(response.data));
}