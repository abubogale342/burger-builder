import React, { useState, useEffect } from 'react'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { Redirect } from 'react-router-dom';
import classes from './Auth.module.css';
import * as actions from '../../store/action';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { checkValidity } from '../../shared/utility';

const Auth = (props) => {

	const [controls, setControls] = useState({
		email: {
			elementType: 'input',
			elementConfig: {
				type: 'email',
				placeholder: 'Mail Address'
			},
			value: '',
			validation: {
				required: true,
				isEmail: true
			},
			valid: false,
			touched: false
		},
		password: {
			elementType: 'input',
			elementConfig: {
				type: 'password',
				placeholder: 'password'
			},
			value: '',
			validation: {
				required: true,
				minLength: 6
			},
			valid: false,
			touched: false
		},
	})
	const [isSignUp, setIsSignUp] = useState(true);

	useEffect(() => {
		if (!props.building && props.authRedirectPath !== '/') {
			props.onSetAuthRedirectPath('/');
		}
	}, []);

	const inputChangedHandler = (event, controlName) => {
		const updateControls = {
			...controls,
			[controlName]: {
				...controls[controlName],
				value: event.target.value,
				valid: checkValidity(event.target.value, controls[controlName].validation),
				touched: true
			}
		}
		setControls(updateControls);
	}

	const submitHandler = (event) => {
		event.preventDefault();
		props.onAuth(controls.email.value, controls.password.value, isSignUp);
	}

	const switchAuthModeHandler = () => setIsSignUp(!isSignUp);

	const formElementsArray = [];
	for (let key in controls) {
		formElementsArray.push({
			id: key,
			config: controls[key]
		});
	}

	let form = formElementsArray.map(formElement => (
		<Input
			key={formElement.id}
			elementType={formElement.config.elementType}
			elementConfig={formElement.config.elementConfig}
			value={formElement.config.value}
			invalid={!formElement.config.valid}
			shouldValidate={formElement.config.validation}
			touched={formElement.config.touched}
			changed={(event) => inputChangedHandler(event, formElement.id)}
		/>
	));

	if (props.loading && (controls.email.valid && controls.password.valid)) {
		form = <Spinner />;
	}

	let errorMessage = null;
	if (props.error) {
		errorMessage = <p>{props.error.message}</p>;
	}

	let autoRedirect = null;
	if (props.isAuthenticated) {
		autoRedirect = <Redirect to={props.authRedirectPath} />
	}

	return (
		<div className={classes.Auth}>
			{autoRedirect}
			{errorMessage}
			<form onSubmit={submitHandler}>
				{form}
				<Button btnType="Success">Submit</Button>
			</form>
			<Button clicked={switchAuthModeHandler} btnType="Danger">SWITCH TO {isSignUp ? 'SIGNIN' : 'SIGNUP'}</Button>
		</div>
	);
}

const mapStateToProps = state => ({
	loading: state.auth.loading,
	error: state.auth.error,
	isAuthenticated: state.auth.token !== null,
	building: state.burgerBuilder.building,
	authRedirectPath: state.auth.authRedirectPath
});

const mapDispatchToProps = dispatch => ({
	onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
	onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
