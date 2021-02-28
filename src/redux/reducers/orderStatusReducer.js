import * as ActionTypes from '../actionTypes';

export const OrderStatusReducer = (state = {
  isOrderInPlace: false,
  timeStampAtWhichOrderPlaced: '',
  secondsInReducer: 59,
  minutesInReducer: 9,
  footerColor: 'white',
  payloadForOrder:{}
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

          case 'SET_FOOTER_COLOR':
            return {...state, footerColor:action.payload}

          case 'SET_PAYLOAD_FOR_ORDER':
            return {...state, payloadForOrder:action.payload}

            default:
                return state;
        }
};