import React from "react";
import * as PropTypes from "prop-types";

const TodoItems = ({todoItems}) => {
  return (<div className="todo-items">
    <ul>
      {todoItems.map(item => {
        return <li key={item.id}>{item.text}</li>
      })}
    </ul>
  </div>);
}

TodoItems.propTypes = {
  todoItems: PropTypes.shape({
    nextItemId: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.any)
  })
};

export default TodoItems;