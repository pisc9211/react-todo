import React, {useState} from 'react'
import '../css/Modal.css'

const Modal = ({show, toggleShow, selected, updateTodoItem, todos}) => {
    let [todo, updateTodo] = useState(todos[selected].todo)

    let handleOnChange = (e, fn) => {
        e.preventDefault()
        fn(e.target.value);
    }

    let handleButtonAdd = (e) => {
        e.preventDefault()
        let newTodo = Object.assign({}, todos[selected])
        newTodo.todo = todo
        updateTodoItem(selected, newTodo)
        updateTodo('')
        toggleShow(false)
    }

    return show ? (
        <div className="modal-container">
            <div className="inner-modal">
                <div className="close-modal" onClick={toggleShow}><p>x</p></div>
                <div className="title">Update Todo</div>
                <form onSubmit={handleButtonAdd}>
                    <textarea className='update-description' type='text' value={todo} onChange={(e) => handleOnChange(e, updateTodo)}></textarea>
                    <button className="update-btn">Update</button>
                </form>
            </div>
        </div>
    
        ) : null;
}

export default Modal