import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Hello and welcome to my to-do list!</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new to-do item"
      />
      <button onClick={addTodo}>Add To-Do</button>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
