import axios from "axios";
import { API_URLS } from "../../constant";
import { HeadersConfigtype } from "../../type";

const delete_todo = async (HeaderConfig: HeadersConfigtype, id: string) => {
  await axios
    .delete(API_URLS.DELETE_TODO(id), HeaderConfig)
    .then((res) => console.log(res))
    .catch((e) => console.error(e));
};

export default delete_todo;
