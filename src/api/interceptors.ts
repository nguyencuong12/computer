import axios from "axios";

const instanceAxios = axios.create({
  baseURL: process.env.API_URL,
});
instanceAxios.interceptors.request.use(
  function (request) {
    return request;
  },
  function (err) {
    Promise.reject(err);
  }
);

instanceAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instanceAxios;
