import { combineReducers } from 'redux';

import dataReducer from './dataReducer';
import cartReducer from './cartReducer'
import userReducer from './UserReducer';

const allReducer = combineReducers({
    data: dataReducer,
    cart: cartReducer,
    user: userReducer,
})

export default allReducer;