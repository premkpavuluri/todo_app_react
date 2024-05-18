import React from "react";
import * as PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import withDelete from "./hooks/withDelete";

const TodoItems = ({todoItems, toggleStatus, onDelete, onEdit}) => {
  const items = todoItems.map(({id, text, status}) => {
    const TodoWithDelete = withDelete(TodoItem, onDelete)

    return (<TodoWithDelete
        key={id}
        id={id}
        task={text}
        status={status}
        toggleStatus={toggleStatus}
        onEdit={onEdit}
    />);
  });

  return (<div className="todo-items">{items}</div>);
}

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.any),
  toggleStatus: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default TodoItems;