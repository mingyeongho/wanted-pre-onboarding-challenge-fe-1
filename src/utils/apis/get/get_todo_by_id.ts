import axios from "axios";
import { API_URLS } from "../../constant";
import { HeadersConfigtype } from "../../type";

const get_todo_by_id = async (HeadersConfig: HeadersConfigtype, id: string) => {
  try {
    const res = await axios.get(API_URLS.GET_TODO_BY_ID(id), HeadersConfig);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export default get_todo_by_id;
