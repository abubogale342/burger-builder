import React, { useState, useEffect } from 'react';
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

const BurgerBuilder = (props) => {
	const [purchasing, setPurchasing] = useState(false)

	useEffect(() => {
		props.onIngredientInitiated();
	}, [])

	const updatePurchaseState = (ingredient) => {
		const sum = Object.keys(ingredient)
			.map((igKey) => {
				return ingredient[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

		return sum > 0;
	};

	const purchaseHandler = () => {
		if (props.isAuthenticated) {
			setPurchasing(true);
		}
		else {
			props.onSetAuthRedirectPath('/checkout');
			props.history.push('/auth');
		}
	};

	const purchaseCancelHandler = () => {
		this.setState({
			purchasing: false,
		});
	};

	const purchaseContinueHandler = () => {
		props.onInitPurchased();
		props.history.push('/checkout');
	};

	const disabledInfo = {
		...props.ingredients,
	};

	for (let key in disabledInfo) {
		disabledInfo[key] = disabledInfo[key] <= 0;
	}

	let orderSummary = null;

	let burger = props.error ? (
		<p>Ingredients can't be loaded</p>
	) : (
		<Spinner />
	);
	if (props.ingredients) {
		burger = (
			<Aux>
				<Burger ingredients={props.ingredients} />
				<BuildControls
					ingredientAdded={props.onIngredientAdded}
					ingredientRemoved={props.onIngredientRemoved}
					disabled={disabledInfo}
					price={props.totalPrice}
					ordered={purchaseHandler}
					isAuth={props.isAuthenticated}
					purchasable={updatePurchaseState(props.ingredients)}
				/>
			</Aux>
		);
		orderSummary = (
			<OrderSummary
				ingredients={props.ingredients}
				purchaseCancel={purchaseCancelHandler}
				purchaseContinue={purchaseContinueHandler}
				price={props.totalPrice}
			/>
		);
	}

	return (
		<Aux>
			<Modal
				show={purchasing}
				modalClosed={purchaseCancelHandler}
			>
				{orderSummary}
			</Modal>
			{burger}
		</Aux>
	);
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
