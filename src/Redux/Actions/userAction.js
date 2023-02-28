import axios from "axios";
import { LOGIN_API } from "../../Api/baseUrl";

export const userLogin = (payload) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(LOGIN_API, payload);
      dispatch({
        type: "USER_LOGGED",
        payload: res.data.token,
      });
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
