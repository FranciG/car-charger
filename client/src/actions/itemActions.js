import {
    GET_ITEMS,

    ITEMS_LOADING
    
  } from './types';
  import axios from "axios";

import { returnErrors } from './errorActions';

  export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('/api/items')
      .then(res =>
        dispatch({
          type: GET_ITEMS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      ); 
  
  };




export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
        
    };
};