import React, {useState} from "react";

const TodoItem = ({id, task, status, toggleStatus, onDelete}) => {
  const [isHover, setIsHover] = useState(false);

  const onMouse = () => {
    setIsHover(true);
  }

  const offMouse = () => {
    setIsHover(false);
  }

  return (<div className="item" onClick={() => toggleStatus(id)} onMouseEnter={onMouse} onMouseLeave={offMouse}>
    <input type="checkbox" checked={status === "completed"}/>
    <span>{task}</span>
    {isHover && <span onClick={() => onDelete(id)}>X</span>}
  </div>);
}

export default TodoItem;