import React, {useState} from "react";
import OPERATIONS from "./constants/operations";
import {StyledAddItem} from "./styles/TodoBox";

const AddTodoItem = ({dispatch}) => {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  }

  const handleClick = (event) => {
    if (event.charCode === 13 && text !== "") {
      dispatch({type: OPERATIONS.ADD, text});
      setText("");
    }
  }

  return (<StyledAddItem>
    <input
        type="text"
        value={text}
        placeholder="Type here to create a new task"
        onChange={(event) => handleChange(event.target.value)}
        onKeyPress={handleClick}
    />
  </StyledAddItem>);
}

export default AddTodoItem;