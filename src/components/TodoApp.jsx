import React, { useState } from 'react';
import "./../App.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Edit the existing todo
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = currentTodo;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      // Add a new todo
      setTodos([...todos, currentTodo]);
    }

    setCurrentTodo('');
  };

  const handleEdit = (index) => {
    setCurrentTodo(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px'  }}>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
    

        <input
        className='input'
          type="text"
          value={currentTodo}
          onChange={handleInputChange}
          placeholder="Enter a todo..."
          />
        <button className="todo-btn" type="submit">{editIndex !== null ? 'Update Todo' : 'Add Todo'}</button>
         
      </form>
      <ul style={{ listStyleType: 'none', padding : '0' }}>
        
        {todos.map((todo, index) => (
            <div className='todo-list 'style={{ marginTop: '10px' }}>
                <div >

          <li className='li' key={index} >
            {todo}
          </li>
                </div>
            <button
            className='edit-btn'
            onClick={() => handleEdit(index)}
            style={{ marginLeft: '10px', marginRight: '5px' }}
            >
              Edit
            </button>
            <button className='delete-btn' onClick={() => handleDelete(index)}>Delete</button>
                </div>
        ))}
      </ul>
      
    </div>
  );
}

export default TodoApp;
