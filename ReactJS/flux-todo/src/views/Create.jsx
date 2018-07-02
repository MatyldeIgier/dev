import React from 'react';
import '../css/index.css';

function Create (props){
        let input;

        return(
            <div>
                <form className="App-create"
                      onSubmit={ e => {e.preventDefault()
                          if (!input.value.trim()) {
                              return;
                          }
                          props.onCreateTodo(input.value);
                          input.value = ''
                      }}
                >
                    <input type="text" ref = {node => input = node} placeholder="Todo..."/>
                    <button className="app-btn-css" type="submit">Add a Todo</button>
                </form>
            </div>
        )
}

export default Create;