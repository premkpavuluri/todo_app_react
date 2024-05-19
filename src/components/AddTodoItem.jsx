import React, {useState} from "react";


const AddTodoItem = ({onClick}) => {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  }

  const handleClick = (event) => {
    if (event.charCode === 13 && text !== "") {
      onClick(text);
      setText("");
    }
  }

  return (<div className="add-todo-item">
    <input
        type="text"
        value={text}
        placeholder="Type here to create a new task"
        onChange={(event) => handleChange(event.target.value)}
        onKeyPress={handleClick}
    />
  </div>);
}

export default AddTodoItem;