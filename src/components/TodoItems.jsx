import React from "react";
import * as PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoItems = ({todoItems}) => {
  const items = todoItems.map(({id, text, status}) => {
    return <TodoItem key={id} task={text} status={status}/>
  });

  return (<div className="todo-items">{items}</div>);
}

TodoItems.propTypes = {
  todoItems: PropTypes.shape({
    nextItemId: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.any)
  })
};

export default TodoItems;