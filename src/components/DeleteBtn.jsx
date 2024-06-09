import React from "react";
import {DeleteButton} from "./styles/StyledComponents";

const DeleteBtn = ({onClick}) => {
  return (<DeleteButton onClick={onClick}>X</DeleteButton>)
}

export default DeleteBtn;