import axios from "axios";
import jwtDecode from "jwt-decode";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      process.env.REACT_APP_GENERAL_URI + "/api/auth/login",
      userCredential
    );
    const token = res.data.token;
    const user = jwtDecode(token);
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
