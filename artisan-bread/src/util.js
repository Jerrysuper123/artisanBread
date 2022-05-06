const BASE_URL = "https://artisanbread.herokuapp.com/api/";
const getHTTPHeaders = (accessToken) => {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};
export { BASE_URL, getHTTPHeaders };
