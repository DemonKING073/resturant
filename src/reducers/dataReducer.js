import * as actions from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: '',
    data:[],
}

const dataReducer = (state = initialState, action) =>{
    switch(action.type){
        case actions.FETCH_DATA_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case actions.FETCH_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: '',
            }
        case actions.FETCH_DATA_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default: 
            return state;
    }
}

export default dataReducer;