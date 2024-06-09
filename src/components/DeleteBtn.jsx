import React from "react";
import {DeleteButton} from "./styles/TodoBox";

const DeleteBtn = ({onClick}) => {
  return (<DeleteButton onClick={onClick}>X</DeleteButton>)
}

export default DeleteBtn;