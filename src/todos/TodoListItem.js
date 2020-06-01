import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({todo, onDelete, onComplete}) => {
    console.log({todo});
    return (
        <div className="todo-item-container">
            <h3>{todo.title}</h3>
            <div 
                className={`button-container ${todo.completed ? 'complete' : 'incomplete'}`}
            >
                <button className="complete-btn" onClick={e => onComplete(todo.id)}>Mark as complete</button>
                <button className="remove-btn" onClick={e => onDelete(todo.id)}>Remove</button>
            </div>
        </div>
        )
}

export default TodoListItem;