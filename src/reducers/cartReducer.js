import * as actions from '../actions/actionTypes';

const initialState = {
    count:0,
    items:[],              
}

const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case actions.CART_ITEM_REQUEST:
            return state;
        case actions.CART_ITEM_ADD:
            return {
                ...state,
                items:[...state.items,action.payload],
                count:state.count+1
            }
        case actions.CART_ITEM_DELETE:
            return state;
        default: 
            return state;
        
    }
}

export default cartReducer;