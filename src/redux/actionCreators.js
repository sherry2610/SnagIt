import * as ActionTypes from './actionTypes'
import api from '../utils/apiUtils/api'

//------DRWAER ACTIONS
export const drawerActions = {
  toggleRightDrawer: () => ({
    type: ActionTypes.TOGGLE_DRAWER,
  }),
  resetRightDrawer: () => ({
    type: ActionTypes.RESET_RIGHT_DRAWER,
  }),
  openRightDrawer: () => ({
    type: ActionTypes.OPEN_RIGHT_DRAWER,
  }),
};


//------------------USER ACTIONS----------------


export const signInSuccess = (res) => ({
  type: ActionTypes.SIGN_IN_SUCCESS,
  payload: res
});

export const signInFailed = (res) => {
  return {
    type: ActionTypes.SIGN_IN_FAILURE,
    payload: res
  }
};

export const signOut = () => ({
  type: ActionTypes.SIGN_OUT_SUCCESS
});

export const SignUpRequest = (next) => (dispatch) => {
  return api.signUpApi(next)
    .then(response => {
      if (response.success){
          return dispatch(signInSuccess(response))
          
      }
      else{
          response['signUpFailed'] = true;
          return dispatch(signInFailed(response));
      }
    })
    .catch(error => console.log('Signin User Failed', error.message))
}

export const SignInRequest = (next) => (dispatch) => {
  return api.signInApi(next)
    .then((res) => {
      if (res.success){
          return dispatch(signInSuccess(res));
      }
      else if(!res.success){
          res['signInFailed'] = true;
          return dispatch(signInFailed(res));
      }
    })
    .catch(err => {
        err['signInFailed'] = true;
        return dispatch(signInFailed(err))
    })
}

//------------------//


//------------------PRODUCTS ACTIONS----------------

export const productsFetchedWithSuccess = (payload, category) => {
  return {
    type:ActionTypes.PRODUCT_FETCHING_SUCCESS,
    payload,
    category
  }
}
export const productsFetchedWithFailure = (payload) => {
  return {
    type:ActionTypes.PRODUCT_FETCHING_FAILURE,
    payload
  }
}

export const fetchProductsByCategory = (next) => (dispatch) => {
  return api.getProductsByCategory(next)
  .then((res) => {
    if (res.success){
        return dispatch(productsFetchedWithSuccess(res,next));
    }
    else if(!res.success){
        res['productFetchingFailed'] = true;
        return dispatch(productsFetchedWithFailure(res));
    }
  })
  .catch(err => {
      err['productFetchingFailed'] = true;
      return dispatch(productsFetchedWithFailure(err))
  })  
}

//------------------//


