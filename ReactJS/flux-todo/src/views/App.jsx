import React from 'react';
import Create from './Create';
import Change from './Change';
import View from './View';

function App(props){

        return(
            <div>
                <h1 className="App-title">My Todo list App {console.log(props)}</h1>
                <div>
                    <View {...props}/>
                    <Change {...props}/>
                    <Create {...props}/>
                </div>
            </div>
        )
}

export default App;