import {
    REMOVE_TODO,
    CREATE_TODO,
    COMPLETE_TODO,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE
} from "./actions";

export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case LOAD_TODOS_IN_PROGRESS : {
            return true;
        }
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }
}

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO : {
            const { todo } = payload;
            return state.concat(todo);
        }
        case REMOVE_TODO : {
            const { id } = payload;
            return state.filter((todo) => todo.id !== id);
        }
        case COMPLETE_TODO : {
            const { id } = payload;
            return state.map((todo) => {
                if(todo.id === id) {
                    return { ...todo, completed: true };
                }
                return todo;
            });
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return todos;
        }
        case LOAD_TODOS_FAILURE:
        case LOAD_TODOS_IN_PROGRESS:
        default:
            return state
    }
}