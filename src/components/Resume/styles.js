import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 20px;
  justify-content: space-between;

  .income {
    background: rgb(0,150,106);
  }

  .outcome {
    background: rgb(255,98,71);
  }

  .total {
    background: #000;
  }

  .income, .outcome, .total {
    color: #fff;
    width: 290px;
  }
`;
