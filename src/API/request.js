import axios from "axios";

export const publicRequest = async (endpoint) => {
  let req = "";
  await axios
    .get(`https://valorant-api.com/v1/${endpoint}`)
    .then((res) => (req = res.data))
    .catch((err) => (req = false));
  return req;
};

export const playerRequest = async (endpoint) => {
  let req = "";
  await axios
    .get(`https://api.henrikdev.xyz/valorant/${endpoint}`)
    .then((res) => (req = res.data))
    .catch((err) => (req = false));
  return req;
};
