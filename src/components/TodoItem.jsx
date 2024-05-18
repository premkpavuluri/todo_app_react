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

const TodoItem = ({id, task, status, toggleStatus, onDelete, onEdit}) => {
  const [isHover, setIsHover] = useState(false);

  const onMouse = () => {
    setIsHover(true);
  }

  const offMouse = () => {
    setIsHover(false);
  }

  const isChecked = () => {
    return status === "completed";
  }

  const updateItem = (text) => {
    onEdit(id, text)
  }

  return (<div className="item" onMouseEnter={onMouse} onMouseLeave={offMouse}>
    <input type="checkbox" onChange={() => toggleStatus(id)} checked={isChecked()}/>
    <EditableMessage message={task} updateMessage={updateItem}/>
    {isHover && <span onClick={() => onDelete(id)}>X</span>}
  </div>);
}

export default TodoItem;