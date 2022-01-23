import React from 'react';

import { useFetch } from '../useFetch';
import { AUTORIA_API_KEY } from '../../configVar';

const formattedAsOption = (data) =>
	(data || []).map(({ name, value }) => {
		return {
			label: name,
			value,
		};
	});

export function useCarMarks() {
	const {
		response: carMarks,
		errors,
		loading,
	} = useFetch(`auto/categories/1/marks?api_key=${AUTORIA_API_KEY}`);

	const formattedCarMarks = formattedAsOption(carMarks);

	return { formattedCarMarks, errors, loading };
}

export function useCarModels(markID) {
	let route = null;

	if (markID) {
		route = `auto/categories/1/marks/${markID}/models?api_key=${AUTORIA_API_KEY}`;
	}

	const { response: carModels, errors, loading } = useFetch(route);

	const formattedCarModels = formattedAsOption(carModels);

	return { formattedCarModels, errors, loading };
}

export function useCarArticles(markID, modelID) {
	let route = null;

	if (markID && modelID) {
		route = `auto/search?api_key=${AUTORIA_API_KEY}&s_yers[1]=2021&po_yers[1]=2022&marka_id[1]=${markID}&model_id[1]=${modelID}`;
	}

	const { response: carArticles, errors, loading } = useFetch(route);

	const formattedCarArticles = carArticles?.result.search_result.ids;
	const [cars, setCars] = React.useState();

	React.useEffect(() => {
		if (formattedCarArticles) {
			const formattedCarArticlesPromise = formattedCarArticles.map((id) =>
				fetch(
					`https://developers.ria.com/auto/info?api_key=AJExiG5NOgeHUD44enPoMytv92EbOBoOpXq9JF6o&auto_id=${id}`
				).then((r) => r.json())
			);
			Promise.all(formattedCarArticlesPromise)
				.then((responses) =>
					responses.map((r) => {
						return {
							price: r.UAH,
							year: r.autoData.year,
							gearbox: r.autoData.gearboxName,
							mark: r.markName,
							model: r.modelName,
							title: r.title,
							titlePhotoLink: r.photoData.seoLinkB,
							id: r.autoData.autoId,
							initialLink: `https://auto.ria.com/uk${r.linkToView}`,
						};
					})
				)
				.then((data) => {
					setCars(data);
				})
				.catch((err) => {
					throw new Error(err);
				});
		}
	}, [formattedCarArticles]);

	return { cars, errors, loading };
}
