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

const fetchProfileInfo = async (accessToken) => {
  if (accessToken !== "") {
    let response = await axios.get(
      BASE_URL + "users/profile",
      getHTTPHeaders(accessToken)
    );
    return response;
  }
};

export { BASE_URL, getHTTPHeaders, fetchAllProducts, fetchProfileInfo };
