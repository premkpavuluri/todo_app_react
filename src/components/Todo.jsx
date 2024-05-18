import React, {useState} from 'react';
import './Todo.css';
import TodoItems from "./TodoItems";
import AddTodoItem from "./AddTodoItem";
import TodoTitle from "./TodoTitle";
import todoItem from "./TodoItem";

const STATUS = {
  DUE: "due",
  COMPLETED: "completed"
}
const initialTodoItems = [
  {id: 0, text: "Learn React", status: STATUS.DUE},
  {id: 1, text: "Learn JavaScript", status: STATUS.COMPLETED}
];

const Todo = (props) => {
  const [todoItems, setTodoItems] = useState({nextItemId: 1, items: initialTodoItems})

  const addTodoItem = (text) => {
    const nextItemId = todoItems.nextItemId + 1;
    const items = [...todoItems.items, {id: todoItems.nextItemId, text, status: STATUS.DUE}];
    setTodoItems({nextItemId, items});
  }

  const toggleStatus = (id) => {
    const items = todoItems.items.map(item => {
      if (item.id === id) {
        return {...item, status: item.status === STATUS.DUE ? STATUS.COMPLETED : STATUS.DUE};
      }
      return item;
    });
    const nextItemId = todoItems.nextItemId;
    setTodoItems({nextItemId, items})
  }

  const excludeItem = (itemId) => {
    return todoItems.items.filter(({id}) => id !== itemId)
  }

  const deleteItem = (targetId) => {
    const updatedItems = excludeItem(targetId)
    setTodoItems({...todoItems, items: [...updatedItems]});
  }

  return (<div className="todo-layout">
    <TodoTitle/>
    <AddTodoItem onClick={addTodoItem}/>
    <TodoItems todoItems={todoItems.items} toggleStatus={toggleStatus} onDelete={deleteItem}/>
  </div>);
}

export default Todo;