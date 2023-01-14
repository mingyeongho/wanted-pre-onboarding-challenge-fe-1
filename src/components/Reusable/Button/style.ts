import styled from "styled-components";
import { Palette } from "../../../styles/Palette";

export const Button = styled.button`
  padding: 8px;
  background-color: ${Palette.accent_color_1};
  color: white;
  outline: none;
  border: none;
  border-radius: 8px;
  transition: 0.3s all;
  font-weight: bolder;

  &:hover {
    background-color: ${Palette.accent_color_2};
    cursor: pointer;
  }

  &:disabled {
    background-color: #ddd;
    cursor: no-drop;
  }
`;
