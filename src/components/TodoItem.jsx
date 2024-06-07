import React from "react";
import EditableMessage from "./EditableMessage";
import Indicator from "./Indicator";
import DeleteBtn from "./DeleteBtn";
import useHover from "./hooks/useHover";
import {ItemContainer, TodoBox} from "./styles/TodoBox";
import OPERATIONS from "./constants/operations";

const TodoItem = ({id, task, status, dispatch}) => {
  const [hoverRef, isHovered] = useHover();

  const updateItem = (text) => {
    dispatch({type: OPERATIONS.EDIT, id, text});
  }

  const deleteItem = () => {
    dispatch({type: OPERATIONS.DELETE, id})
  }

  const onStatusChange = () => {
    dispatch({type: OPERATIONS.TOGGLE_STATUS, id});
  }

  return (<TodoBox ref={hoverRef}>
    <ItemContainer>
      <Indicator status={status} onChange={onStatusChange}/>
      <EditableMessage message={task} updateMessage={updateItem} status={status}/>
    </ItemContainer>
    {isHovered && <DeleteBtn onClick={deleteItem}/>}
  </TodoBox>);
}

export default TodoItem;