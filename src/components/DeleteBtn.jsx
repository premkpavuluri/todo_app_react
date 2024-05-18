import React from "react";

const DeleteBtn = ({onClick}) => {
  return (<span className="dlt-btn" onClick={() => onClick()}>X</span>)
}

export default DeleteBtn;