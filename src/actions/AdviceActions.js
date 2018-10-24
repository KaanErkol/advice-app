import * as Type from './Types';

export const showAdvice = (advice) => {
  return {
    type: Type.SHOW_ADVICE,
    loading: false,
    payload: advice.slip
  }
}

export const getAdvice = () => {
  return {
    type: Type.GET_ADVICE,
    loading: true
  }
}