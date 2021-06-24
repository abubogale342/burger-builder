import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { Redirect } from 'react-router-dom';
import classes from './Auth.module.css';
import * as actions from '../../store/action';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { checkValidity } from '../../shared/utility';

class Auth extends Component {
    state = {
        controls: {
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
        },
        isSignUp: true,
    }

    componentDidMount() {
        if (!this.props.building && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath('/');
        }
    }

    inputChangedHandler = (event, controlName) => {
        const updateControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }
        this.setState({ controls: updateControls })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => (
            { isSignUp: !prevState.isSignUp }
        ));
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
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
                changed={(event) => this.inputChangedHandler(event, formElement.id)}
            />
        ));

        if (this.props.loading && (this.state.controls.email.valid && this.state.controls.password.valid)) {
            form = <Spinner />;
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <p>{this.props.error.message}</p>;
        }

        let autoRedirect = null;
        if (this.props.isAuthenticated) {
            autoRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <div className={classes.Auth}>
                {autoRedirect}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">Submit</Button>
                </form>
                <Button clicked={this.switchAuthModeHandler} btnType="Danger">SWITCH TO {this.state.isSignUp ? 'SIGNIN' : 'SIGNUP'}</Button>
            </div>
        );
    }
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
