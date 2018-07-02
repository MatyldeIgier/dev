import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Todo from './Todo';
import Counter from './Counter';

class TodoStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                if (!action.text){
                    return;
                }
                const id = Counter.increment();
                return state.set(id, new Todo({
                    id: id,
                    complete: false,
                    text: action.text,
                }));
            default:
                return state;
        }
    }
}

export default new TodoStore();