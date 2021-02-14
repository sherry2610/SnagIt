import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { drawerReducer } from './reducers/drawer';
import { AuthedUser } from './reducers/userAuthed';
import { ProductReducer } from './reducers/productReducer';
import { CartReducer } from './reducers/cartReducer'
import { OrderStatusReducer } from './reducers/orderStatusReducer'

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
            drawerReducer,
            authedUser: AuthedUser,
            productReducer: ProductReducer,
            cartReducer: CartReducer,
            orderStatusReducer: OrderStatusReducer,
        }), applyMiddleware(thunk));
    return store;
}