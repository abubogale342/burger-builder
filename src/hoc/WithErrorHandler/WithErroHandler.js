import Modal from '../../components/UI/Modal/Modal';
import React from 'react';
import useHttpErrorHandler from '../../hooks/http-error-handler';
import Aux from '../Aux/Aux';

const WithErrorHandler = (WrappedComponent, axios) => {
	const Wrapped = (props) => {
		const [err, error, clearError] = useHttpErrorHandler(axios)
		return (
			<Aux>
				<Modal
					show={error}
					modalClosed={clearError}
				>
					{error ? error : null}
				</Modal>
				<WrappedComponent {...props} error={err} />
			</Aux>
		);
	}
	return Wrapped;
};

export default WithErrorHandler;
