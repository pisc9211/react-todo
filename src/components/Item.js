import React, { useState } from 'react'
import moment from 'moment';

import '../css/Item.css';

const Item = ({ todo, deleteTodo, i }) => {
  const [completed, updateComplete] = useState(false);

  const toggleCompleted = () => {
    updateComplete(!completed);
  }

  const className = () => {
    let style = 'item';
    if (completed) {
      style += ' completed'
    }
    return style
  }

  return (
    <div className={className()} onClick={toggleCompleted}>
      <div className="todo-title">
        <div>TODO</div>
        <div className="todo-close" onClick={() => deleteTodo(i)}><strong>&times;</strong></div>
      </div>
      <div className="todo-description">{todo.todo}</div>
      <div>{moment().fromNow()}</div>
    </div>
  )
}

export default Item;