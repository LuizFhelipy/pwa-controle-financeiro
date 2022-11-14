import React from "react";
import * as C from "./styles";

const ResumeItem = ( {title, Icon, value, classRef}) => {
  return(
    <C.Container className={classRef}>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;