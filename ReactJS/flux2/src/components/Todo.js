import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <li>{this.props.completed ? 'O' : 'N'} {this.props.title}</li>
        )
    }
}

export default Todo;