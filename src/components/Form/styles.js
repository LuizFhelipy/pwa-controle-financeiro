import styled from "styled-components";

export const Container = styled.div`
  margin: 20px auto;
  background-color: rgb(30,30,44);
  border-radius: 5px;
  display: flex;
  gap: 10px;
  padding: 15px 20px;
  justify-content: normal;
  align-items: center;
  color: #bfbdc0;

  @media (max-widht: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  background: rgb(36,38,54);
  border: none;
  color: #fff;
`;

export const RadioGroup = styled.div`
  align-items: center;
  flex: 1;

  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: black;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background: rgb(0,150,106);
  flex: 1;
`;