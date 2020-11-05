import * as actions from './actionTypes';

export const cartItemRequest = () =>{
    return{
        type: actions.CART_ITEM_REQUEST
    }
}

export const cartItemAdd = (data) =>{

    return{
        type: actions.CART_ITEM_ADD,
        payload: data,
    }
}

export const cartItemDelete = () =>{
    return {
        type: actions.CART_ITEM_DELETE,
    }
}