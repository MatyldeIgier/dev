import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';

import TodoActions from '../actions/TodoActions';
import TodoDispatcher from '../TodoDispatcher';
import {CREATE_TODO} from '../actions/types'


class TodosReducer extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case CREATE_TODO:
                return state;
            default:
                return state;
        }
    }
}

export default TodosReducer;

