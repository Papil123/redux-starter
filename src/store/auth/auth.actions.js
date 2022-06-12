import { axios } from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

export const loginAPI = (data) => {
  dispatchEvent({ type: LOGIN_LOADING });
  axios.post("https://reqres.in/api/login", data).then((r) => {
    dispatchEvent({ type: LOGIN_SUCCESS, payload: r.data }).catch(() => {
      dispatchEvent({ type: LOGIN_ERROR });
    });
  });
};
export const logout = () => {
  type: LOGOUT;
};
