const BASE_URL = "https://a9cb-138-75-0-108.ap.ngrok.io/api/";
const getHTTPHeaders = (accessToken) => {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};
export { BASE_URL, getHTTPHeaders };
