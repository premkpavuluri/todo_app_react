import React from "react";
import EditableMessage from "./EditableMessage";

const Indicator = ({status, onChange}) => {
  return (<div className={`indicator ${status}`} onClick={() => onChange()}></div>);
}

const TodoItem = ({id, task, status, toggleStatus, onEdit}) => {
  const updateItem = (text) => {
    onEdit(id, text)
  }

  const onStatusChange = () => {
    toggleStatus(id);
  }

  return (<div className="item">
    <Indicator status={status} onChange={onStatusChange}/>
    <EditableMessage message={task} updateMessage={updateItem}/>
  </div>);
}

export default TodoItem;