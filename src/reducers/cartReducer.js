import * as actions from '../actions/actionTypes';

const initialState = {
    count:0,
    items:[], 
    quantity:[], 
    total:0,            
}

const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case actions.ADD_COUNT:
            return{
                ...state,
                count:action.payload
            }
        case actions.CART_LOCAL_STORAGE:
            return {
                ...state,
                items:action.payload
            }
        case actions.CART_TOTAL_ADD:
            return{
                ...state,
                total:action.payload
            }
        case actions.CART_ITEM_QUANTITY_DELETE:
            return{
                ...state,
                quantity: state.quantity.filter((item,index)=> item.id!==action.payload),
            }
        case actions.CART_ITEM_QUANTITY:
            return {
                ...state,
                quantity: [...state.quantity, action.payload]
            }
        case actions.CART_ITEM_ADD:
            return {
                ...state,
                items:[...state.items,action.payload],
                count:state.count+1,
            }
        case actions.CART_ITEM_DELETE:
            return {
                ...state,
                items: state.items.filter((item,index)=>item._id!==action.payload),
                count:state.count-1
            }
        default: 
            return state;
        
    }
}

export default cartReducer;