import {CREATE_TODO} from './types';
import TodoDispatcher from '../TodoDispatcher';

export const create_todo = (text) => {
    TodoDispatcher.dispatch({
            type: CREATE_TODO,
            payload: text
        }) ;
};