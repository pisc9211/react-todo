import React, {useState, useEffect} from 'react'
import moment from 'moment';

import '../css/Item.css';

const Item = ({ todo, deleteTodo, i, toggleComplete, toggleShow }) => {

  let [fromNow, updateFromNow] = useState(moment(todo.time).fromNow())
    
  useEffect(() => {
      let a = setInterval(() => {
          updateFromNow(moment(todo.time).fromNow())
      }, 10000)

      return () => clearInterval(a);
  })

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
        <button className="edit-btn" onClick={() => toggleShow(i)}>Edit</button>
        <div className="fromNow">{fromNow}</div>
        <div className="check-mark" onClick={onCheckMarkClick}>&#10003;</div>
      </div>
    </div>
  )
}

export default Item;