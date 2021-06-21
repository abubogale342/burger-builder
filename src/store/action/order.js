import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

export const purchaseBurgerSuccess = (id, orderData) => ({
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    data: orderData
})

export const purchaseBurgerFail = (error) => ({
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
})

export const purchaseBurgerStart = () => ({
    type: actionTypes.PURCHASE_BURGER_START
})

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error))
            });
    }
}

export const purchaseInit = () => ({
    type: actionTypes.PURCHASE_INIT
})

export const fetchOrdersSuccess = (orders) => ({
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
});

export const fetchOrdersStart = () => ({
    type: actionTypes.FETCH_ORDERS_START
});

export const fetchOrdersFail = (error) => ({
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
});

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        axios
            .get('/orders.json')
            .then((res) => {
                const fetchedOrders = [];
                const data = res.data;
                for (let key in data) {
                    fetchedOrders.push({ id: key, ...data[key] });
                }
                console.log(fetchedOrders);
                // this.setState({
                //     orders: fetchedOrders,
                //     loading: false,
                // });
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch((error) => {
                // this.setState({ loading: false });
                fetchOrdersFail(error);
            });
    }
}