import React, {useState} from "react";
import EditableMessage from "./EditableMessage";

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