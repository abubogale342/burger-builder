import React from 'react';
import { connect } from 'react-redux'
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErroHandler';
import * as actions from '../../store/action'
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends React.Component {
    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render() {
        let orders = <Spinner />;
        if (this.props.error) {
            orders = null;
        }
        if (!this.props.loading) {
            orders = this.props.orders.map((order) => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}
                />
            ))
        }

        return <div>{orders}</div>;
    }
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
