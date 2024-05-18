import React from "react";
import * as PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoItems = ({todoItems, toggleStatus}) => {
  const items = todoItems.map(({id, text, status}) => {
    return <TodoItem key={id} id={id} task={text} status={status} toggleStatus={toggleStatus}/>
  });

  return (<div className="todo-items">{items}</div>);
}

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.any),
  toggleStatus: PropTypes.func
};

export default TodoItems;