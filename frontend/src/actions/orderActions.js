import { CHECKOUT, GET_ORDERS, ORDERS_LOADING } from "./actionTypes";
import axios from 'axios';

export const getOrders = (id) => dispatch => {
    dispatch(setOrdersLoading());
    axios.get(`/api/order/${id}`)
        .then(res => dispatch({
            type: GET_ORDERS,
            payload: res.data
        }))
        .catch(err => dispatch(err.response.data, err.response.status));
}

export const checkout = (id, source) => dispatch => {
    axios.post(`/api/order/${id}`, {source})
        .then(res => dispatch({
            type: CHECKOUT,
            payload: res.data
        }))
        .catch(err => dispatch(err.response.data, err.response.status));
}

export const setOrdersLoading = () => {
    return{
        type: ORDERS_LOADING
    }
}