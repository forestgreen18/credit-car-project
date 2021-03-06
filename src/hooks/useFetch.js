import React from 'react';

const baseURL = 'https://developers.ria.com/';

const useFetch = (
	endpoint,
	{ data, token, headers: customHeaders, ...customConfig } = {},
	url = baseURL
) => {
	const [response, setResponse] = React.useState(null);
	const [error, setError] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(false);

	const config = {
		method: data ? 'POST' : 'GET',
		body: data ? JSON.stringify(data) : undefined,
		// headers: {
		//   Authorization: token ? `Bearer ${token}` : undefined,
		//   "Content-Type": data ? "application/json" : undefined,
		//   ...customHeaders,
		// },
		...customConfig,
	};

	React.useEffect(() => {
		if (endpoint) {
			const fetchData = async () => {
				setIsLoading(true);

				try {
					const res = await fetch(`${url}/${endpoint}`, config);
					const json = await res.json();

					setResponse(json);
				} catch (err) {
					setError(err);
				} finally {
					setIsLoading(false);
				}
			};

			fetchData();
		}
	}, [endpoint]);

	return { response, error, isLoading };
};

export { useFetch };
