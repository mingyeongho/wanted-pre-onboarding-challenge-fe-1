import axios from "axios";
import { API_URLS } from "../../constant";
import { AuthPayloadType } from "../../type";

const post_signup = async (payload: AuthPayloadType) => {
  try {
    const res = await axios.post(API_URLS.POST_SIGNUP, payload);
    if (res.status === 200) {
      alert(res.data.message);
    }
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export default post_signup;
