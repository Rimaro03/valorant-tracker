import axios from "axios";

export const publicRequest = async (endpoint) => {
  const req = await axios
    .get(`https://valorant-api.com/v1/${endpoint}`)
    .then((res) => res.data);
  return req;
};
