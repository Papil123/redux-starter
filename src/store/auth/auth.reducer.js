import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./auth.types";

export const initialState = {
  loading: false,
  isAuth: false,
  error: false,
  token: "",
};

export const authreducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_ERROR: {
      return { ...state, loading: false, error: true, isAuth: false };
    }
    case LOGIN_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload.token,
      };
    }
    default: {
      return state;
    }
  }
};
