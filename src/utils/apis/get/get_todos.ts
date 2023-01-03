import axios from "axios";
import { API_URLS } from "../../constant";
import { HeadersConfigtype } from "../../type";

const get_todos = async (HeadersConfig: HeadersConfigtype) => {
  await axios
    .get(API_URLS.GET_TODOS, HeadersConfig)
    .then((res) => console.log(res))
    .catch((e) => console.error(e));
};

export default get_todos;
