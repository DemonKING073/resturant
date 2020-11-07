import * as actions from '../actions/actionTypes';

const initialState = {
    isLogged:false,
}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case actions.USER_STATUS:
            return {
                ...state,
                isLogged:!state.isLogged
            }
        default:
            return state;
    }
}

export default userReducer;