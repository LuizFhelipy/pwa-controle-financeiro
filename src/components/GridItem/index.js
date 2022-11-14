import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="rgb(255,98,71)" />
        ) : (
          <FaRegArrowAltCircleUp color="rgb(0,150,106)" />
        )}
      </C.Td>
      <C.Td alignCenter>
          <FaTrash onClick={() => onDelete(item.id)} className="trash"/>
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
