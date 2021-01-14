import * as ActionTypes from '../actionTypes';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthedUser = (state = {
    isLoading: false,
    errMess: null,
    authedUser: {}
}, action) => {
        switch(action.type) {
            case ActionTypes.SIGN_IN_SUCCESS:
                AsyncStorage.removeItem('token');
                AsyncStorage.clear();
                var token = action.payload.token;
                AsyncStorage.setItem('token', token);
                return {...state, isLoading: false, errMess: null, authedUser: {user: action.payload.user, token}};

            // case ActionTypes.SIGNIN_LOADING:
            //     return {...state, isLoading: true, errMess: null, authedUser: {}};  
            
            // case ActionTypes.SIGN_IN_FAILURE:
            //     return {...state, isLoading: false, errMess: action.payload, authedUser: {}};
            case ActionTypes.SIGN_OUT_SUCCESS:
                AsyncStorage.removeItem('token');
                AsyncStorage.clear();
                return {...state, isLoading: false, errMess: null, authedUser: {}}

            case ActionTypes.SIGN_OUT_FAILURE:
                return {...state, isLoading: false, errMess: action.payload}

            case ActionTypes.SET_PROFILE_DATA:
                return {...state, authedUser: {...state.authedUser, user: action.payload.user}}

            default:
                return state;
        }
};