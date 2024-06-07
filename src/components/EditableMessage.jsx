import React, {useState} from "react";
import {DecoratedTodoBox} from "./styles/TodoBox";

const EditableMessage = ({message, updateMessage, status}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(message)

  const startEdit = () => {
    setIsEditing(true);
  }

  const handleChange = (value) => {
    setText(value);
  }

  const handleClick = (event) => {
    if (event.charCode === 13 && text !== "") {
      setIsEditing(false);
      updateMessage(text)
    }
  }

  const handleBlur = (value) => {
    setIsEditing(false);
    updateMessage(value)
  }

  return (<DecoratedTodoBox className={"todo-message"} status={status} onClick={startEdit}>
    {isEditing ? <input
        className={"edit-input"}
        type="text"
        value={text.toString()}
        onChange={(event) => handleChange(event.target.value)}
        onKeyPress={handleClick}
        onBlur={(event) => handleBlur(event.target.value)}
        autoFocus
    /> : <span>{text}</span>}
  </DecoratedTodoBox>)
};

export default EditableMessage;