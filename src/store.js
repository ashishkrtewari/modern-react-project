import { createStore, combineReducers, applyMiddleware } from 'redux';

import { todos, isLoading } from './todos/reducers';
import { persistReducer } from 'redux-persist';
import { autoMergeLevel2 } from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";


const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const reducers = { todos, isLoading };


const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(ReduxThunk)
    )
);