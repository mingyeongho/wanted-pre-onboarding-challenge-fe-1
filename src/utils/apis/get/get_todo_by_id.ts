import axios from "axios";
import { API_URLS } from "../../constant";
import { HeadersConfigtype } from "../../type";

const get_todo_by_id = async (HeadersConfig: HeadersConfigtype, id: string) => {
  await axios
    .get(API_URLS.GET_TODO_BY_ID(id), HeadersConfig)
    .then((res) => console.log(res))
    .catch((e) => console.error(e));
};

export default get_todo_by_id;
