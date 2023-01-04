import axios from "axios";
import { API_URLS } from "../../constant";
import { HeadersConfigtype } from "../../type";

const get_todos = async (HeadersConfig: HeadersConfigtype) => {
  try {
    const res = await axios.get(API_URLS.GET_TODOS, HeadersConfig);
    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
};

export default get_todos;
