import { useFetch } from "../useFetch";
import { AUTORIA_API_KEY } from "../../configVar";

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
    route = `auto/search?api_key=${AUTORIA_API_KEY}&marka_id[1]=${markID}&model_id[1]=${modelID}`;
  }

  const { response: carArticles, errors, loading } = useFetch(route);

  const formattedCarArticles = carArticles;

  return { carArticles, errors, loading };
}
