import React, {Component} from 'react';
import TodosReducer from '../stores/TodosReducer';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TodosReducer.getState()
        }
    }

    getStore() {
        return [TodosReducer];
    }

    getState() {
        return {
            todos: TodosReducer.getState()
        };
    }

    renderTodo() {
        return [this.state.todos.values().map(todo => {
           <div>{todo.text}</div>
        })];
    }

    render () {
        return (
            <div>
                {this.renderTodo()}
            </div>
        );
    }
}

export default TodoList;