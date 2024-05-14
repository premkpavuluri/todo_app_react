import React, {useState} from "react";

const Input = ({value, onChange}) => {
  return <input type="text" value={value} onChange={(event) => onChange(event.target.value)}/>
}

const AddTodoItem = ({onClick}) => {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  }

  const handleClick = () => {
    onClick(text);
    setText("");
  }

  return (<div className="add-todo-item">
    <Input value={text} onChange={handleChange}/>
    <button onClick={handleClick}>Add</button>
  </div>);
}

export default AddTodoItem;