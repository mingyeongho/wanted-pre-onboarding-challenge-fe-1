import styled from "styled-components";

const SeparateXStyle = styled.div`
  height: 1px;
  background-color: #ddd;
`;

const SeparateYStyle = styled.div`
  width: 1px;
  background-color: #ddd;
`;

export const SeparateX = () => {
  return <SeparateXStyle />;
};

export const SeparateY = () => {
  return <SeparateYStyle />;
};
