import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers, productDetailsReducers } from './reducers/productListReducers'
import { cartReducers } from './reducers/cartReducers'
import { userLoginReducers} from './reducers/userReducers'
 
const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducers,
    userLogin: userLoginReducers
})

const cartItemFromStorage= localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) : []
const userFromStorage= localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cart: { 'cartItems': cartItemFromStorage },
    userLogin:{'userInfo': userFromStorage}
}
const middleware=[thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store