import styled from "styled-components";
import { Palette } from "../../../../styles/Palette";

export const UpdateSection = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > .textarea_wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;

    label {
      font-size: 1.5rem;
      font-weight: bolder;
      color: ${Palette.accent_color_1};
    }

    textarea {
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
    }
  }

  & > .btn_wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
`;
