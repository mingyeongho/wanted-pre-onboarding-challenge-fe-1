import styled from "styled-components";
import { Palette } from "../../../../styles/Palette";

export const DefaultSection = styled.div`
  flex: 1;
  height: 100%;
  font-size: 12rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: bolder;
  color: ${Palette.accent_color_1};
  display: flex;
  justify-content: center;
  align-items: center;
`;
