import * as actions from '../actions/actionTypes';

const initialState = {
    isLogged:false,
    orders: [],
    details: {
        User:{
            name:'admin'
        }
    },
}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case actions.FETCH_USER_DETAILS:
            return{
                ...state,
                details:action.payload,
            }
        case actions.USER_STATUS:
            return {
                ...state,
                isLogged:!state.isLogged
            }
        case actions.ADD_ORDER:
            return{
                ...state,
                orders: action.payload,
            }
        case actions.DELETE_ORDER:
            return{
                ...state,
                orders: state.orders.filter(item=>item._id!==action.payload),
            }
        default:
            return state;
    }
}

export default userReducer;