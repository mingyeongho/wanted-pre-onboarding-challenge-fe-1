import styled from "styled-components";

export const TodoList = styled.div`
  width: 200px;

  .todo_header {
    height: 50px;
    padding: 10px;
  }

  .separate_x {
    height: 1px;
    background-color: #ddd;
  }

  .todo_item_wrapper {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`;
