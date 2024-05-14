import React, {useState} from 'react';
import './Todo.css';
import TodoItems from "./TodoItems";
import AddTodoItem from "./AddTodoItem";

const Todo = (props) => {
  const [todoItems, setTodoItems] = useState(
      {nextItemId: 1, items: [{id: 0, text: "Learn React"}]})

  const addTodoItem = (text) => {
    const nextItemId = todoItems.nextItemId + 1;
    const items = [...todoItems.items, {id: todoItems.nextItemId, text: text}];
    setTodoItems({nextItemId, items});
  }

  return (<div className="todo-layout">
    <h1>Todo List</h1>
    <AddTodoItem onClick={addTodoItem}/>
    <TodoItems todoItems={todoItems.items}/>
  </div>);
}

export default Todo;