import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import classes from './Checkout.module.css';
import ContactData from './ContactData/ContactData';

class Checkout extends React.Component {
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div className={classes.Checkout}>
                <CheckoutSummary
                    ingredients={this.props.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ingredients: state.ingredients,
});

export default connect(mapStateToProps)(Checkout);
