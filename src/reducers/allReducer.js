import { combineReducers } from 'redux';

import dataReducer from './dataReducer';
import cartReducer from './cartReducer'

const allReducer = combineReducers({
    data: dataReducer,
    cart: cartReducer,
})

export default allReducer;