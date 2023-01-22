import styled from "styled-components";
import { Palette } from "../../../styles/Palette";

export const TetxareaContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: bolder;
  color: ${Palette.accent_color_1};
`;

export const Textarea = styled.textarea`
  flex: 1;
  padding: 14px;
  border: 2px solid #ddd;
  outline: none;
  letter-spacing: 1px;
  transition: 0.3s all;
  font-size: 1.1rem;
  resize: none;
  &:focus {
    border-color: ${Palette.accent_color_1};
  }
`;
