import React from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErroHandler';

class Orders extends React.Component {
    state = {
        loading: true,
        orders: [],
    };

    componentDidMount() {
        axios
            .get('/orders.json')
            .then((res) => {
                const fetchedOrders = [];
                const data = res.data;
                for (let key in data) {
                    fetchedOrders.push({ id: key, ...data[key] });
                }
                console.log(fetchedOrders);
                this.setState({
                    orders: fetchedOrders,
                    loading: false,
                });
            })
            .catch(() => {
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <div>
                {this.state.orders.map((order) => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                ))}
            </div>
        );
    }
}

export default WithErrorHandler(Orders, axios);
