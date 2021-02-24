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

export const setCardName = (payload) => ({
  type: ActionTypes.SET_CARD_NAME,
  payload
})

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

export const getUpdatedUserRecordRequest = (next) => (dispatch) => {
  return api.getUserUpdatedRecord(next)
  .then(response => {
    if (response.success){
        response['token'] = next
        return dispatch(signInSuccess(response))
        
    }
    else{
        response['signUpFailed'] = true;
        return dispatch(signInFailed(response));
    }
  })
  .catch(error => console.log('fetching updated user failed', error.message))
}

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

export const allProductsFetchedWithSuccess = (payload) => {
  return {
    type:ActionTypes.ALL_PRODUCTS,
    payload,
  }
}
export const allProductsFetchedWithFailure = (payload) => {
  return {
    type:ActionTypes.ALL_PRODUCTS,
    payload
  }
}

export const toggleCart = (payload) => {
  return {
    type:ActionTypes.PRODUCT_TOGGLE_CART,
    payload
  }
}

export const fetchAllProducts = (next) => (dispatch) => {
  return api.getAllProducts()
  .then((res) => {
    if (res.success){
      console.log("inside---------",res)
      const updatedRes = res.products.map(prod=>{
        prod['inCart'] = false
        return prod
      })
      res['products'] = updatedRes
        return dispatch(allProductsFetchedWithSuccess(res.products));
    }
    else if(!res.success){
        res['productFetchingFailed'] = true;
        return dispatch(allProductsFetchedWithFailure(res));
    }
  })
  .catch(err => {
      err['productFetchingFailed'] = true;
      return dispatch(productsFetchedWithFailure(err))
  })  
}

export const fetchProductsByCategory = (next) => (dispatch) => {
  return api.getProductsByCategory(next)
  .then((res) => {
    if (res.success){
      const updatedRes = res.products.map(prod=>{
        prod['inCart'] = false
        return prod
      })
      res['products'] = updatedRes
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

//--------------------CART ACTIONS-------------

export const getCartWithSuccess = (payload) => {
  return {
    type:ActionTypes.GET_CART,
    payload
  }
}

export const getCartWithFailure = (payload) => {
  return {
    type:ActionTypes.GET_CART,
    payload
  }
}

export const editCartWithSuccess = (payload) => {
  return {
    type:ActionTypes.EDIT_CART_SUCCESS,
    payload
  }
}

export const editCartWithFailure = (payload) => {
  return {
    type:ActionTypes.EDIT_CART_FAILURE,
    payload
  }
}

export const handleToggleCart = (payload,category) => {
  return {
    type:ActionTypes.TOGGLE_CART_UNANOMOUSLY,
    payload,
    category
  }
}

export const quantityChange = (payload) => {
  console.log("abc----++",payload)
  const pay = payload.items ? {...payload,items:payload.items} : {...payload,items:false} 
  return {
    type: ActionTypes.QUANTITY_CHANGE,
    payload:pay,
  }
}

export const editCartRequestWhenQuantityChange = (next) => (dispatch) => {
  console.log("next.payload",next)

  
  let quantity;
  let updatedCart = next.currCart.map(c=>{
    console.log("<<<<<<------",next.id,c.product)
      if(next.id===c.product){
          quantity = next.quantity==0?'1':next.quantity
          return {
              ...c,
              quantity: quantity.toString(),
          }
      }
      return c;
  })

  console.log("updatedCart",updatedCart)

  if(updatedCart.length && !updatedCart[0].product_id){
    updatedCart = updatedCart.map(up=>{
      return {
        ...up,
        product_id: up.product
      }
    })
  }

  console.log("quantity to be",quantity)
  console.log("updatedCart after",updatedCart)


  return api.editCart({"lst":updatedCart},next.token)
    .then(response=>{
      console.log("editcart/ res ---",response)
      if(response.success){
        dispatch(quantityChange({...next,items:response.cart.items}))
      }
    })
    .catch(err=>{
      dispatch(editCartWithFailure(err))
    })
}



export const totalAmount = (payload) => {
  console.log("abc----",payload)
  return {
    type: ActionTypes.TOTAL_AMOUNT,
    payload,
  }
}

export const handleToggleCartWithAuthedUser = (payload) => {
  return {
    type:ActionTypes.TOGGLE_CART,
    payload,
  }
}

export const getCartRequest = (next) => (dispatch) => {
  return api.getCart(next.token)
    .then(response=>{
      if(response.success){
        console.log("getCartRequest from actioncreator",response.cart.items)
        dispatch(getCartWithSuccess({cartItems:response.cart.items,allProducts:next.allProducts}))
      }
    })
    .catch(err=>{
      console.log("from actioncreator err",err)
      dispatch(getCartWithFailure(err))
    })
}

export const editCartRequest = (next) => async (dispatch) => {
  console.log("next.payload----",next)
  return await api.editCart(next.payload,next.token)
    .then(response=>{
      console.log("next.payload",next.payload)
      console.log("editcart/ res ---",response)
      if(response.success){
        dispatch(editCartWithSuccess(response.cart.items))
      }
    })
    .catch(err=>{
      dispatch(editCartWithFailure(err))
    })
}

export const setCartToInitialState = () => ({
  type: ActionTypes.SET_CART_TO_INITIAL,
})


export const setOrderInPlace = (payload) => {
  return {
    type: ActionTypes.SET_IS_ORDER_IN_PLACE,
    payload
  }
}

export const setTimeStampAtWhichOrderPlaced = (payload) => {
  return {
    type: ActionTypes.SET_TIMESTAMP_AT_WHICH_ORDER_PLACED,
    payload
  }
}

export const setMinutesForReducer = (payload) => {
  return {
    type: 'SET_MINUTES',
    payload
  }
}

export const setSecondsForReducer = (payload) => {
  return {
    type: 'SET_SECONDS',
    payload
  }
}

export const setFooterColor = (payload) => {
  return {
    type: ActionTypes.SET_FOOTER_COLOR,
    payload
  }
}