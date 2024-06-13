function jsonToQueryParams(jsonObj) {
  const params = new URLSearchParams();
  for (const key in jsonObj) {
    if (jsonObj.hasOwnProperty(key)) {
      params.append(key, jsonObj[key]);
    }
  }
  return params.toString();
}


// accepts searchParams state by react-router-dom
export const searchParamsToJson = (searchParams) => {
  const params = {};
  for (const [key, value] of searchParams) {
    params[key] = value;
  }
  return params;
};

export default jsonToQueryParams;