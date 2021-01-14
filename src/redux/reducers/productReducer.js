import * as ActionTypes from '../actionTypes';

export const ProductReducer = (state = {
    errMess: null,
    products: {
      Drink: [],
      Nicotine: [],
      Candy: [],
      Snacks: [],
      New: [],
      'TopSeller': [],
      Food: [],
    }
}, action) => {
        switch(action.type) {
            case ActionTypes.PRODUCT_FETCHING_SUCCESS:
                return {errMess: null, products: {...state.products,[action.category]: action.payload.products}};

            case ActionTypes.PRODUCT_FETCHING_FAILURE:
                return { ...state, errMess: action.payload }

            default:
                return state;
        }
};