import * as ActionTypes from '../actionTypes';

export const CartReducer = (state = {
    toggleCart:false,
    errMess: null,
    cart: [],
    Total:0
}, action) => {
        switch(action.type) {
            case ActionTypes.SET_CART_TO_INITIAL:
                return {
                    toggleCart:false,
                    errMess: null,
                    cart: [],
                    Total:0
                }
            case ActionTypes.GET_CART:
                let carts = action.payload.cartItems.map(item=>{
                    return {
                        ...item,
                        quantity: item.quantity,
                        product_id: item.product,
                        product: item.product
                    }
                })
                let cartsToBe = [...state.cart,...carts]
                let TotalToBe = 0;

                action.payload.allProducts.forEach(prod=>{
                    cartsToBe.forEach(item=>{
                        if(prod._id==item.product_id){
                            console.log("real matched",prod)
                            TotalToBe = TotalToBe + (Number(prod.price) * Number(item.quantity))
                        }
                    })
                })

                console.log("TotalTobe",TotalToBe)

                return {...state, errMess: null, cart: [...state.cart,...carts], Total: Number(Number(TotalToBe).toFixed(2))};

            case ActionTypes.EDIT_CART_SUCCESS:
                let cart = action.payload.map(item=>{
                    return {
                        ...item,
                        quantity: item.quantity,
                        product_id: item.product,
                        product: item.product
                    }
                })
                return {...state, cart}

            case ActionTypes.TOGGLE_CART:
                return {...state, toggleCart:!state.toggleCart};

            case ActionTypes.TOGGLE_CART_UNANOMOUSLY:
                let inCart = false;
                let amountAfterSubtracting = 0;
                state.cart.forEach(c=>{
                    if(action.payload.payload.product_id===c.product_id){
                        inCart = true
                        amountAfterSubtracting = Number(action.payload.price) * Number(c.quantity)
                    }
                })

                console.log("amountAfterSubtracting",amountAfterSubtracting)

                return inCart ? 
                    {...state,
                    cart: state.cart.filter(c=>action.payload.payload.product_id!==c.product_id),
                    Total: state.cart.length==1 ? 0 : state.Total - amountAfterSubtracting
                } : 
                {...state, cart:[...state.cart, action.payload.payload], Total : Number(state.Total)+Number(action.payload.price)}

            case ActionTypes.QUANTITY_CHANGE:
                // console.log("just above",Number(action.payload.chk)*Number(action.payload.price))
                const fnl = action.payload.opt=='inc'?
                                Number(state.Total)+(Number(action.payload.price)) : 
                                Number(action.payload.quantity)!==0?
                                Number(state.Total)-(Number(action.payload.price)) :
                                Number(state.Total)
                console.log("fnl",fnl)

                let quantity;
                const updatedCart = state.cart.map(c=>{
                    if(action.payload.id===c.product_id){
                        quantity = action.payload.quantity==0?'1':action.payload.quantity
                        return {
                            ...c,
                            quantity: quantity.toString(),
                        }
                    }
                    return c;
                })
                console.log("updatedCart",updatedCart)
                console.log("quantity to be",quantity)


                return action.payload.items ? {...state,cart:action.payload.items,Total:Number(Number(fnl).toFixed(2))}
                    : {...state,cart:updatedCart,Total:Number(Number(fnl).toFixed(2))}
            

            
                case ActionTypes.TOTAL_AMOUNT:
                    return {...state,Total:Number(Number(action.payload).toFixed(2))}

            default:
                return state;
        }
};