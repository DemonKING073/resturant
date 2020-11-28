import axios from 'axios';
import * as actions from './actionTypes';

export const fetchDataRequest = () =>{
    return {
        type: actions.FETCH_DATA_REQUEST,
    }
}

const fetchDataSuccess = data =>{
    return {
        type: actions.FETCH_DATA_SUCCESS,
        payload: data,
    }
}

const fetchDataFailure = error =>{
    return{
        type: actions.FETCH_DATA_FAILURE,
        payload: error,
    }
}

export const fetchData = () =>{
    return (dispatch) =>{
        dispatch(fetchDataRequest);
        axios.get('https://my-first-resturant.herokuapp.com/products')
            .then(res=>{
                const data = res.data;
                dispatch(fetchDataSuccess(data));
            })
            .catch(err=>{
                const error = err.message;
                dispatch(fetchDataFailure(error));
            });
    }
}