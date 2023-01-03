import axios from "axios";
import { API_URLS } from "../../constant";
import { HeadersConfigtype, TodoPayloadType } from "../../type";

const post_create_todo = async (
  HeadersConfig: HeadersConfigtype,
  payload: TodoPayloadType
) => {
  await axios
    .post(API_URLS.POST_CREATE_TODO, payload, HeadersConfig)
    .then((res) => console.log(res))
    .catch((e) => console.error(e));
};

export default post_create_todo;
