import { all, takeEvery } from 'redux-saga/effects';
import * as Types from '../../actions/Types';
import adviceSaga from './AdviceSaga';

export default function* rootSaga() {
  yield all([
    takeEvery(Types.GET_ADVICE, adviceSaga)
  ]);
}