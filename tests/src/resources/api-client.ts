import axios from "axios";
import { BASE_URL, GET_URL, DELETE_URL, POST_URL, PUT_URL } from "./api_data";

const instance = axios.create({
  baseURL: BASE_URL,
});
export const getAPI = async (route: string) => {
  return await instance.get(route);
};
export const postAPI = async (route: string, body: object) => {
  return await instance.post(route, body);
};
export const deleteAPI = async (route: string) => {
  return await instance.delete(route);
};
export const putAPI = async (route: string, body: object) => {
  return await instance.put(route, body);
};
