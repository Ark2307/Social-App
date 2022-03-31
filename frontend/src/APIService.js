import axios from "axios";

export const loginService = async (userDetails, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      "http://localhost:8080/api/auth/login",
      userDetails
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.responseData });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};
