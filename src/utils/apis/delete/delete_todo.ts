import axios from "axios";
import { API_URLS } from "../../constant";
import { HeadersConfigtype } from "../../type";

const delete_todo = async (HeaderConfig: HeadersConfigtype, id: string) => {
  try {
    const res = await axios.delete(API_URLS.DELETE_TODO(id), HeaderConfig);
    if (res.status === 200) {
      return res;
    }
  } catch (e) {
    console.error(e);
  }
};

export default delete_todo;
