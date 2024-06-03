import React, {useReducer} from 'react';
import './Todo.css';
import TodoItems from "./TodoItems";
import AddTodoItem from "./AddTodoItem";
import TodoTitle from "./TodoTitle";
import {initialTodo, todoReducer} from "./reducers/TodoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialTodo, undefined);

  return (<div className="todo-layout">
    <TodoTitle/>
    <AddTodoItem dispatch={dispatch}/>
    <TodoItems
        todoItems={state.items}
        dispatch={dispatch}
    />
  </div>);
}

export default Todo;