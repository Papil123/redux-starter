import { GET_FEEDS_ERROR, GET_FEEDS_SUCCESS } from "./feed.types";





export const getFeedsAPI = (dispatch) => {
    dispatchEvent({ type: GET_FEEDS_LOADING });
    axios.get("https://localhost:8080/feeds", data).then((r) => {
      dispatchEvent({ type: GET_FEEDS_SUCCESS, payload: r.data }).catch(() => {
       
        dispatchEvent({ type: GET_FEEDS_ERROR });
     
      });
    });
  };
  