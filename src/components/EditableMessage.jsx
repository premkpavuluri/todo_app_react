import React, {useState} from "react";

const EditableMessage = ({message, updateMessage}) => {
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

  return (<div className="todo-message" onClick={startEdit}>
    {isEditing ? <input
        type="text"
        value={text}
        onChange={(event) => handleChange(event.target.value)}
        onKeyPress={handleClick}
        onBlur={(event) => handleBlur(event.target.value)}
        autoFocus
    /> : <span>{text}</span>}
  </div>)
};

export default EditableMessage;