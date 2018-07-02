import Immutable from 'immutable';

export const Todo = Immutable.Record({
    id: '',
    complete: false,
    text: '',
});