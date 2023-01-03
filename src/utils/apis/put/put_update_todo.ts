import axios from "axios";
import { API_URLS } from "../../constant";
import { HeadersConfigtype, TodoPayloadType } from "../../type";

const put_update_todo = async (
  HeadersConfig: HeadersConfigtype,
  payload: TodoPayloadType,
  id: string
) => {
  await axios
    .put(API_URLS.PUT_UPDATE_TODO(id), payload, HeadersConfig)
    .then((res) => console.log(res))
    .catch((e) => console.error(e));
};

export default put_update_todo;
