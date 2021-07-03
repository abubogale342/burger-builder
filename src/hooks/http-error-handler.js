import { useState, useEffect } from 'react';

export default httpClient => {
	const [error, setError] = useState(null);
	const [err, setErr] = useState(null);

	const reqInterceptor = httpClient.interceptors.request.use((req) => {
		setError(null);
		return req;
	});

	const resInterceptor = httpClient.interceptors.response.use(
		(res) => res,
		(err) => {
			setError(err.message);
			setErr(true);
		}
	);

	useEffect(() => {
		return () => {
			httpClient.interceptors.request.eject(reqInterceptor);
			httpClient.interceptors.response.eject(resInterceptor);
		}
	}, [reqInterceptor, resInterceptor]);

	const errorConfirmHandler = () => {
		setError(null);
	};

	return [err, error, errorConfirmHandler];
}
