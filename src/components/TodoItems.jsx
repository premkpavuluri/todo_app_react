import React from "react";
import * as PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoItems = ({todoItems, dispatch}) => {
  const items = todoItems.map(({id, text, status}) => {
    return (<TodoItem
        key={id}
        id={id}
        task={text}
        status={status}
        dispatch={dispatch}
    />);
  });

  return (<div className="todo-items">{items}</div>);
}

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.any),
  dispatch: PropTypes.func
};

export default TodoItems;