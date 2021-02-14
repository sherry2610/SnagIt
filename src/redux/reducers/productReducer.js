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
    allProducts: []
    }
}, action) => {
        switch(action.type) {
            case ActionTypes.PRODUCT_FETCHING_SUCCESS:
                return {...state, products: {...state.products,[action.category]: action.payload.products}};

            case ActionTypes.PRODUCT_FETCHING_FAILURE:
                return { ...state, errMess: action.payload }

            case ActionTypes.ALL_PRODUCTS:
                console.log("+++",action)
                return {...state, allProducts:action.payload}
            default:
                return state;
        }
};