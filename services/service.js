import { getQueryString } from "@/utils/helper";

const { URL_HOST, API_KEY } = process.env;

const url = {
  businesses: "businesses",
  searchBusiness: "businesses/search",
};

const callApi = async ({ url, method = "GET", data, query }) => {
  let endpoint = `${URL_HOST}/${url}`;
  if (query) {
    endpoint += `?${query}`;
  }

  console.log({ endpoint });

  const response = await fetch(endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const searchBusiness = async (query) => {
  const data = await callApi({
    url: url.searchBusiness,
    query: getQueryString(query),
  });

  return data;
};

const getBusinessById = async (id) => {
  const data = await callApi({
    url: `${url.businesses}/${id}`,
  });

  return data;
};

const getBusinessReview = async (id, queries) => {
  const data = await callApi({
    url: `${url.businesses}/${id}/reviews?limit=${queries.limit}`,
  });

  return data;
};

export { searchBusiness, getBusinessById, getBusinessReview };
