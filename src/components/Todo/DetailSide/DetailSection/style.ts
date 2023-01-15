import styled from "styled-components";

export const DetailSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  & > .detail_content {
    flex: 1;
    display: flex;
    flex-direction: column;
    .title_wrapper {
      display: flex;
      justify-content: space-between;

      & > .title {
        font-size: 2rem;
        font-weight: bolder;
        letter-spacing: 1px;
      }

      & > .date_wrapper {
        display: flex;
        flex-direction: column;
        & > span {
        }
      }
    }
    .separate {
      height: 1px;
      background-color: #ddd;
      margin: 10px 0;
    }

    .content {
      flex: 1;
      font-size: 2rem;
      font-weight: bolder;
      letter-spacing: 1px;
      padding: 10px;
    }
  }

  & > .btn_wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
`;
