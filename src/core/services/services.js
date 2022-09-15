import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1",
});
export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
};
