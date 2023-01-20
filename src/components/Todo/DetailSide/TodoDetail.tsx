import { useLocation } from "react-router-dom";
import { TodoDetailProps } from "../../../utils/interface";
import CreateSection from "./CreateSection/CreateSection";
import DefaultSection from "./DefaultSection/DefaultSection";
import DetailSection from "./DetailSection/DetailSection";
import * as TodoDetailStyle from "./style";
import UpdateSection from "./UpdateSection/UpdateSection";

const TodoDetail = ({ currTodo, setRefresh }: TodoDetailProps) => {
  const state = new URLSearchParams(useLocation().search).get("state");

  const conditional = () => {
    switch (state) {
      case "detail":
        return currTodo && <DetailSection {...currTodo} />;
      case "update":
        return currTodo && <UpdateSection {...currTodo} />;
      case "create":
        return <CreateSection setRefresh={setRefresh} />;
      default:
        return <DefaultSection />;
    }
  };

  return (
    <TodoDetailStyle.TodoDetail>{conditional()}</TodoDetailStyle.TodoDetail>
  );
};

export default TodoDetail;
