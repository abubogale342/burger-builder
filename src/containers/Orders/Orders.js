import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErroHandler';
import * as actions from '../../store/action'
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = (props) => {
    useEffect(() => {
        props.onFetchOrders(props.token, props.userId);
    }, []);

    let orders = <Spinner />;
    if (props.error) {
        orders = null;
    }
    if (!props.loading) {
        orders = props.orders.map((order) => (
            <Order
                key={order.id}
                ingredients={order.ingredients}
                price={order.price}
            />
        ))
    }

    return <div>{orders}</div>;
}

const mapStateToProps = state => ({
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
});

const mapDispatchToProps = dispatch => ({
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(Orders, axios));
