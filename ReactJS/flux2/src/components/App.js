import React from 'react';
import Todos from './Todos'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>My Todo App</h1>
                <hr/>
                <Todos/>
            </div>
        );
    }
}

export default App;