import axios from "axios";

export const loginService = async (userDetails, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("auth/login", userDetails);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.responseData });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};
