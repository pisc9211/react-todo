import React from 'react'
// import moment from 'moment';

import '../css/Item.css';

const Item = ({ todo, deleteTodo, i, toggleComplete }) => {

  const className = () => {
    let style = 'item';
    if (todo.completed) {
      style += ' completed'
    }
    return style
  }

  const onCheckMarkClick = () => {
    toggleComplete(i);
  }

  return (
    <div className={className()} style={{backgroundColor: todo.color}}>
      <div className="todo-title">
        {/* <div>TODO</div> */}
        <div className="todo-close" onClick={() => deleteTodo(i)}><strong>&times;</strong></div>
      </div>
      <div className="todo-description">{todo.todo}</div>
      <div className="todo-complete">
        <div className="check-mark" onClick={onCheckMarkClick}>&#10003;</div>
      </div>
    </div>
  )
}

export default Item;