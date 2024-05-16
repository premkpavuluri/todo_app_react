import React, {useState} from 'react';
import './Todo.css';
import TodoItems from "./TodoItems";
import AddTodoItem from "./AddTodoItem";
import TodoTitle from "./TodoTitle";

const STATUS = {
  ACTIVE: "active",
  COMPLETED: "completed"
}

const Todo = (props) => {
  const [todoItems, setTodoItems] = useState(
      {nextItemId: 1, items: [{id: 0, text: "Learn React", status: STATUS.COMPLETED}]})

  const addTodoItem = (text) => {
    const nextItemId = todoItems.nextItemId + 1;
    const items = [...todoItems.items, {id: todoItems.nextItemId, text, status: STATUS.ACTIVE}];
    setTodoItems({nextItemId, items});
  }

  const toggleStatus = (id) => {
    const items = todoItems.items.map(item => {
      if (item.id === id) {
        return {...item, status: item.status === STATUS.ACTIVE ? STATUS.COMPLETED : STATUS.ACTIVE};
      }
      return item;
    });
    const nextItemId = todoItems.nextItemId;
    setTodoItems({nextItemId, items})
  }

  return (<div className="todo-layout">
    <TodoTitle/>
    <AddTodoItem onClick={addTodoItem}/>
    <TodoItems todoItems={todoItems.items} toggleStatus={toggleStatus}/>
  </div>);
}

export default Todo;