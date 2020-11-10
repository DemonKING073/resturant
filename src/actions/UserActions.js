import  * as actions from './actionTypes';

export const userStatus = () =>{
    return {
        type:actions.USER_STATUS,
    }
}

export const addOrder = (datas) =>{
    return{
        type: actions.ADD_ORDER,
        payload: datas,
    }
}
export const delOrder = (id)=>{
    return{
        type: actions.DELETE_ORDER,
        payload: id,
    }
}

export const fetchUserDetails = (data) =>{
    return {
        type: actions.FETCH_USER_DETAILS,
        payload:data
    }
}