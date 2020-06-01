import React, { useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { connect } from 'react-redux';
import { loadTodos } from './thunks'
import { removeTodo, completeTodo } from './actions';

const TodoList = ({isLoading, todos, startLoadingTodos, onDelete, onComplete}) => {
    useEffect(() => {
        startLoadingTodos();
    }, [])
    const loadingMessage = (<div>Loading Todos ...</div>);
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map((todo, index) => {
                if (todo.title) {
                    return (
                        <TodoListItem
                            todo={todo}
                            key={index}
                            onDelete={onDelete}
                            onComplete={onComplete}
                        />
                    )
                }
            })}
        </div>
    );
    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(removeTodo(id)),
    onComplete: id => dispatch(completeTodo(id)),
    startLoadingTodos: () => dispatch(loadTodos())
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
