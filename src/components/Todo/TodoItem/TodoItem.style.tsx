import styled from "styled-components";
import { Palette } from "../../../styles/Palette";

export const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin: 4px;
  transition: 0.3s all;

  &.focus {
    background-color: ${Palette.accent_color_2};
    color: white;
  }

  &:hover {
    cursor: pointer;
    background-color: ${Palette.accent_color_2};
    color: white;
  }
`;

export const Title = styled.span`
  width: 110px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
