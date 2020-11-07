import * as actions from './actionTypes';

export const addCount = (number) =>{
    return {
        type: actions.ADD_COUNT,
        payload: number
    }
}

export const cartLocalStorage = (items) =>{
    return {
        type: actions.CART_LOCAL_STORAGE,
        payload: items
    }
}

export const cartItemQuantity = (quantity) =>{
    return{
        type: actions.CART_ITEM_QUANTITY,
        payload:quantity
    }
}
export const cartItemQuantityDelete = (id) =>{
    return{
        type: actions.CART_ITEM_QUANTITY_DELETE,
        payload: id,
    }
}

export const cartItemAdd = (data) =>{

    return{
        type: actions.CART_ITEM_ADD,
        payload: data,
    }
}

export const cartItemDelete = (id) =>{
    return {
        type: actions.CART_ITEM_DELETE,
        payload: id,
    }
}

export const cartTotalAdd = (total) => {
    return {
        type: actions.CART_TOTAL_ADD,
        payload: total,
    }
}

