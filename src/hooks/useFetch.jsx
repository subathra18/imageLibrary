import { useEffect, useReducer } from "react";
import { axiosInstance } from "../utils/axios";

const initialState = {
  data: "",
  loading: false,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return { ...state, data: action.payload };
    case "error":
      return { ...state, error: action.payload };
    case "loading":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export const useFetch = (url) => {
  const [resp, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchData = async (url) => {
      dispatch({ type: "loading" });
      try {
        const resp = await axiosInstance.get(url);
        dispatch({ type: "success", payload: resp.data });
      } catch (error) {
        dispatch({ type: "error", payload: error });
      }
    };
    fetchData(url);
  }, [url]);
  return resp;
};
