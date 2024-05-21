import React from "react";
import EditableMessage from "./EditableMessage";
import Indicator from "./Indicator";
import DeleteBtn from "./DeleteBtn";
import useHover from "./hooks/useHover";
import {ItemContainer, TodoBox} from "./styles/TodoBox";

const TodoItem = ({id, task, status, toggleStatus, onEdit, onDelete}) => {
  const [hoverRef, isHovered] = useHover();

  const updateItem = (text) => {
    onEdit(id, text)
  }

  const onStatusChange = () => {
    toggleStatus(id);
  }

  return (<TodoBox ref={hoverRef}>
    <ItemContainer>
      <Indicator status={status} onChange={onStatusChange}/>
      <EditableMessage message={task} updateMessage={updateItem}/>
    </ItemContainer>
    {isHovered && <DeleteBtn onClick={() => onDelete(id)}/>}
  </TodoBox>);
}

export default TodoItem;