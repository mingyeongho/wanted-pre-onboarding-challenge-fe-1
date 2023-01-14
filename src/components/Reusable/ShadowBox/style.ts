import styled from "styled-components";
import { Palette } from "../../../styles/Palette";

interface StyledShadowBoxProps {
  width: number;
}

export const ShadowBox = styled.div<StyledShadowBoxProps>`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px;
  width: ${(props) => props.width + "px"};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Subject = styled.h1`
  color: ${Palette.accent_color_1};
`;

export const Content = styled.div``;
