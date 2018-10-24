import * as Types from '../../actions/Types';

const INITIAL_STATE = {
  advice: {
    value: '',
    slipId: ''
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    
    case Types.SHOW_ADVICE: 
      return {
        value: action.payload.advice,
        slipId: action.payload.slip_id
      }

    default: 
      return state;
  }

}