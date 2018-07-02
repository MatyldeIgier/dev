import React from 'react';
import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoActions';
import Todo from './Todo';

class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            todos: TodoStore.getAll()
        }
    }

    componentWillMount() {
        TodoStore.on("change", () => {
            this.setState({todos: TodoStore.getAll()});
        })
    }

    createTodo(e) {
        e.preventDefault();
        TodoActions.createTodo(this.state.title);
        this.setState({title: ""});
    }

    handleChange(event) {
        this.setState({title: event.target.value});
    }

    render() {
        const {todos} = this.state;
        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo}/>;
        });

        return (
            <div>
                <ul>{TodoComponents}</ul>
                New todo: <input type="text" ref="titleTask" value={this.state.title} onChange={this.handleChange.bind(this)} />
                <button onClick={this.createTodo.bind(this)}>Add!</button>
            </div>
        )
    }
}

export default Todos;