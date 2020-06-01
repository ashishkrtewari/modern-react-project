/**
* Thunks are Functions that return another function with functionality.
*/

import { loadTodosInProgress, loadTodosFailure, loadTodosSuccess, createTodo} from './actions';

export const loadTodos = () => async (dispatch, getState) => {
    dispatch(loadTodosInProgress());
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await response.json();
        todos = todos.filter(todo => todo.id)
        dispatch(loadTodosSuccess(todos));
    } catch(error) {
        dispatch(loadTodosFailure());
    }
    
}

export const addTodoRequest = todo => async (dispatch, getState) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/2/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: todo.title,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const todoItem = await response.json();
        dispatch(createTodo(todoItem));
    } catch(error) {
        console.log(error);
    }
}