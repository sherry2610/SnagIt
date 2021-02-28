import * as ActionTypes from '../actionTypes';

export const AuthedUser = (state = {
    isLoading: false,
    errMess: null,
    authedUser: {},
    card_name:'',
    cardsOnSignup:[],
    comingForCheckout:false
}, action) => {
        switch(action.type) {
            case ActionTypes.SIGN_IN_SUCCESS:
                var token = action.payload.token;
                return {...state, isLoading: false, errMess: null, authedUser: {user: action.payload.user, token}} 

            // case ActionTypes.SIGNIN_LOADING:
            //     return {...state, isLoading: true, errMess: null, authedUser: {}};  
            
            // case ActionTypes.SIGN_IN_FAILURE:
            //     return {...state, isLoading: false, errMess: action.payload, authedUser: {}};
            case ActionTypes.SIGN_OUT_SUCCESS:
                return {
                    isLoading: false,
                    errMess: null,
                    authedUser: {},
                    card_name:'',
                    cardsOnSignup:[],
                    comingForCheckout:false
                }

            case ActionTypes.SIGN_OUT_FAILURE:
                return {...state, isLoading: false, errMess: action.payload}

            case ActionTypes.SET_PROFILE_DATA:
                console.log("reached++__")
                return {...state, authedUser: {...state.authedUser, user: action.payload.user}}


            case ActionTypes.SET_CARD_NAME:
                return {...state, card_name: action.payload}

            case ActionTypes.ADD_CARD_ON_SIGNUP:
                return {...state, cardsOnSignup: [action.payload]}

            case "COMING_FOR_CHECKOUT":
                return {...state, comingForCheckout: action.payload}
    

            default:
                return state;
        }
};