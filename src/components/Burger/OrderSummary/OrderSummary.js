import React from 'react';
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux/Aux'

const OrderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>
					{igKey}: {props.ingredients[igKey]}
				</span>
			</li>
		);
	});
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients</p>
			<ul>{ingredientSummary}</ul>
			<p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
			<p>Continue to Checkout?</p>
			<Button btnType="Danger" clicked={props.purchaseCancel}>
				Cancel
			</Button>
			<Button btnType="Success" clicked={props.purchaseContinue}>
				Continue
			</Button>
		</Aux>
	);
};

export default OrderSummary;
