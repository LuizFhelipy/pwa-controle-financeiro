import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  margin: 20px auto;
  background: rgb(30,30,44);
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  border-botton: inset;
  padding-botton: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  widht: ${(props) => (props.widht ? props.width + "%" : "auto")};
`;
