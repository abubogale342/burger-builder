import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case 'input':
            inputElement = (
                <input
                    className={classes.InputElement}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case 'textarea':
            <input
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case 'select':
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            <input
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
            />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;
