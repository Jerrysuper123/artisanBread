import axios from "axios";
const BASE_URL = "https://artisanbread.herokuapp.com/api/";
const getHTTPHeaders = (accessToken) => {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

const fetchAllProducts = async () => {
  let response = await axios.get(BASE_URL + "products");
  // console.log(response.data);

  return response.data;
};

export { BASE_URL, getHTTPHeaders, fetchAllProducts };
