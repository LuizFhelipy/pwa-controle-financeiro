import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({income, expense, total}) => {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} classRef="income"/>
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} classRef="outcome"/>
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} classRef="total"/>
    </C.Container>
  );
};

export default Resume;
