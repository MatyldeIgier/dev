import React, {Component} from 'react';

import '../css/App.css';

import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

class App extends Component {
    render () {
        return(
            <div>
                <h2 className="App-title">TODO LIST</h2>
                <TodoList/>
                <CreateTodo/>
            </div>
        );
    }
}

export default App;