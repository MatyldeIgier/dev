import React from 'react';
import '../css/index.css'

function View(props) {
        return(
            <div className="container">
                <ul className="App-view">
                    {
                        [...props.todos.values()].map(todo => {
                            return (
                                <li key={todo.id}>
                                    <div className="view">
                                        <input
                                            className="toggle"
                                            type="checkbox"
                                            checked="true"
                                        />
                                        <label>{todo.text}</label>
                                        <button
                                            className="destroy"
                                        />
                                    </div>
                                </li>
                                )
                            }
                        )
                    }
                </ul>

            </div>
        )
}

export default View;