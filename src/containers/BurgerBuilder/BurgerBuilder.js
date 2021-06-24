import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
import * as actions from '../../store/action'
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErroHandler';

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
    };

    componentDidMount() {
        this.props.onIngredientInitiated();
    }

    updatePurchaseState = (ingredient) => {
        const sum = Object.keys(ingredient)
            .map((igKey) => {
                return ingredient[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        return sum > 0;
    };

    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({
                purchasing: true,
            });
        }
        else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    };

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false,
        });
    };

    purchaseContinueHandler = () => {
        this.props.onInitPurchased();
        this.props.history.push('/checkout');
    };

    render() {
        const disabledInfo = {
            ...this.props.ingredients,
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;

        let burger = this.props.error ? (
            <p>Ingredients can't be loaded</p>
        ) : (
            <Spinner />
        );
        if (this.props.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price={this.props.totalPrice}
                        ordered={this.purchaseHandler}
                        isAuth={this.props.isAuthenticated}
                        purchasable={this.updatePurchaseState(this.props.ingredients)}
                    />
                </Aux>
            );
            orderSummary = (
                <OrderSummary
                    ingredients={this.props.ingredients}
                    purchaseCancel={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                    price={this.props.totalPrice}
                />
            );
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                >
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName) => dispatch(actions.addIngredient(ingredientName)),
        onIngredientRemoved: (ingredientName) => dispatch(actions.removeIngredient(ingredientName)),
        onIngredientInitiated: () => dispatch(actions.initIngredients()),
        onInitPurchased: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));
