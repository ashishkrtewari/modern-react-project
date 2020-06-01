import React, { useState } from 'react';
import { connect } from 'react-redux';
import './NewTodoForm.css';
import { addTodoRequest } from './thunks';

const NewTodoForm = ({ todos, onSubmit }) => {
    const [inputValue, setInputValue] = useState('');
    const handlFormSubmit = (event) => {
        event.preventDefault();
        if (inputValue) {
            const isDuplicate = todos.some(todo => todo.title === inputValue);
            if (!isDuplicate) {
                onSubmit(inputValue);
                setInputValue('');
            }
        }
    }
    return (
        <form onSubmit={handlFormSubmit}>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder="Describe your ToDo here..." />
            <button type="submit">Add Todo</button>
        </form>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
});
const mapDispatchToProps = dispatch => ({
    onSubmit: title => dispatch(addTodoRequest(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);