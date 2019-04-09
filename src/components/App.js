import React, { useState } from 'react'
import Item from './Item';

import '../css/App.css';

const App = () => {
  const [todos, updateTodo] = useState(['Learn React', 'use React Hooks', 'eat healthy', 'excercise']);
  const [inputText, updateInputText] = useState('');

  const addTodo = (todo) => {
    updateTodo([...todos, todo]);
    updateInputText('');
  }

  const deleteTodo = (i) => {
    updateTodo([...todos.slice(0, i), ...todos.slice(i+1)])
  }

  const onInputChange = (e) => {
    e.preventDefault();
    updateInputText(e.target.value);
  }

  console.log(todos);
  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="todos">
        <div className="todos-adding">
          <input onChange={onInputChange} value={inputText} onSubmit={() => addTodo(inputText)}/>
          <button onClick={() => addTodo(inputText)}>Add Todo</button>
        </div>
        <div className="todos-list">{todos.map((todo, i) => <Item key={i} i={i} todo={todo} deleteTodo={deleteTodo} />)}</div>
      </div>
    </div> 
  )
}

export default App;