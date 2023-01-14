import { ShadowBoxProps } from "../../../utils/interface";
import * as ShadowBoxStyle from "./style";

const ShadowBox = ({ width, subject, children }: ShadowBoxProps) => {
  return (
    <ShadowBoxStyle.ShadowBox width={width}>
      <ShadowBoxStyle.Subject>{subject}</ShadowBoxStyle.Subject>
      <ShadowBoxStyle.Content>{children}</ShadowBoxStyle.Content>
    </ShadowBoxStyle.ShadowBox>
  );
};

export default ShadowBox;
