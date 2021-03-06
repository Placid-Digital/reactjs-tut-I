import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import burgerReducer from './burger/burgerReducer'


const rootReducer = combineReducers({
     cake: cakeReducer,
     iceCream: iceCreamReducer,
     burger: burgerReducer
})


export default rootReducer