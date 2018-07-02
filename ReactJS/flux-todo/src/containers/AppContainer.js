import App from '../views/App';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions';

function getStores() {
    return [
        TodoStore,
    ];
}

function getState() {
    return {
        todos: TodoStore.getState(),
        onCreateTodo: TodoActions.addTodo,
    };
}

export default Container.createFunctional(App, getStores, getState);