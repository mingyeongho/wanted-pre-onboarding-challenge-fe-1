import styled from "styled-components";
import { Palette } from "../../../styles/Palette";

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 1.5rem;
    font-weight: bolder;
    color: ${Palette.accent_color_1};
  }

  input {
    padding: 14px;
    border: 2px solid #ddd;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s all;
    font-size: 1.1rem;

    &:focus {
      border-color: ${Palette.accent_color_1};
    }

    &.correct {
      border-color: green;
    }

    &.incorrect {
      border-color: red;
    }
  }

  span {
    width: 100%;
    display: flex;
    justify-content: center;
    color: red;
  }
`;
