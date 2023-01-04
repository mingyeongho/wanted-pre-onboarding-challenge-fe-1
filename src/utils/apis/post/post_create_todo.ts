import axios from "axios";
import { API_URLS } from "../../constant";
import { HeadersConfigtype, TodoPayloadType } from "../../type";

const post_create_todo = async (
  HeadersConfig: HeadersConfigtype,
  payload: TodoPayloadType
) => {
  const { title, content } = payload;
  if (title.length >= 0 && content.length >= 0) {
    try {
      const res = await axios.post(
        API_URLS.POST_CREATE_TODO,
        payload,
        HeadersConfig
      );
      if (res.status === 200) {
        alert("Todo가 등록되었습니다.");
      }
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  } else {
    alert("Title이나 Content를 한 글자 이상씩 써주세요.");
    return false;
  }
};

export default post_create_todo;
