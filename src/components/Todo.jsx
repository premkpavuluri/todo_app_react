import React, {useReducer} from 'react';
import './Todo.css';
import TodoItems from "./TodoItems";
import AddTodoItem from "./AddTodoItem";
import {initialTodo, todoReducer} from "./reducers/TodoReducer";
import {TodoLayout, TodoTitle} from "./styles/StyledComponents";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialTodo, undefined);

  return (<TodoLayout>
    <TodoTitle>TODO</TodoTitle>
    <AddTodoItem dispatch={dispatch}/>
    <TodoItems
        todoItems={state.items}
        dispatch={dispatch}
    />
  </TodoLayout>);
}

export default Todo;