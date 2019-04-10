import React, { useState } from 'react'
import Item from './Item';

import '../css/App.css';

const colors = {
  0: '#fff740',
  1: '#ff65a3',
  2: '#7afcff'
}

const setColor = () => {
  let random = Math.floor(Math.random() * 3);
  return colors[random];
}

const App = () => {
  const [todos, updateTodo] = useState([{todo:'Learn React', color: setColor(), completed: false}, {todo:'use React Hooks', color: setColor(), completed: false}]);
  const [inputText, updateInputText] = useState('');


  const addTodo = (todo) => {
    updateTodo([...todos, {todo, color: setColor(), completed: false}]);
    updateInputText('');
  }


  const deleteTodo = (i) => {
    let newState = [...todos.slice(0, i), ...todos.slice(i+1)]
    updateTodo(newState);
  }

  const toggleComplete = (i) => {
    let newState = todos.slice();
    newState[i].completed = !newState[i].completed
    updateTodo(newState);
  }

  const onInputChange = (e) => {
    e.preventDefault();
    updateInputText(e.target.value);
  }

  const onSubmitTodo = (e) => {
    e.preventDefault();
    if (inputText.length > 0) {
      addTodo(inputText);
    }
  }

  return (
    <div className="container">
      <h1>Sticky Todo's</h1>
      <div className="todos">
        <form className="todos-adding" onSubmit={onSubmitTodo}>
          <input type="text" onChange={onInputChange} value={inputText}/>
          <button type="button" value="Add To-Do" onClick={onSubmitTodo}>Add ToDo</button>
        </form>
        <div className="todos-list">{todos.map((todo, i) => <Item key={i} i={i} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />)}</div>
      </div>
    </div> 
  )
}

export default App;