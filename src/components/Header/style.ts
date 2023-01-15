import styled from "styled-components";
import { Palette } from "../../styles/Palette";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  & > h1 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    color: ${Palette.accent_color_1};
  }
`;
