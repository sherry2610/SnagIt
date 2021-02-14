import * as ActionTypes from '../actionTypes';

export const OrderStatusReducer = (state = {
  isOrderInPlace: false,
  timeStampAtWhichOrderPlaced: '',
  secondsInReducer: 59,
  minutesInReducer: 9
}, action) => {
        switch(action.type) {

          case ActionTypes.SET_IS_ORDER_IN_PLACE:
            return {...state, isOrderInPlace: action.payload}
          
            case ActionTypes.SET_TIMESTAMP_AT_WHICH_ORDER_PLACED:
              return {...state, timeStampAtWhichOrderPlaced: action.payload}

            case 'SET_MINUTES':
              return {...state, minutesInReducer:action.payload}

              case 'SET_SECONDS':
                return {...state, secondsInReducer:action.payload}

            default:
                return state;
        }
};