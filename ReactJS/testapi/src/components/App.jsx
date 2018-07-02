import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            listAPI : []
        }
    }

    componentDidMount() {
            this.getElemFromAPI();
        
    }


    getElemFromAPI(){
        const BATCH_URL = 'https://firestore.googleapis.com/v1beta1/projects/agency-45d5c/databases/(default)/documents/list';
        const FETCH_URL = BATCH_URL;

        fetch (FETCH_URL,{
            method : 'GET'
        })
            .then(response => response.json())
            .then(json => {
                // console.log(json.documents[0].fields.bébé.arrayValue.values);
                const listAPI = json.documents[0].fields.bébé.arrayValue.values;
                this.setState ({listAPI: listAPI});
                console.log(this.state.listAPI)
            })
            .catch(error => console.log(error));
    }

    render(){
        return (
            <div>
                <h1>Show the list from API</h1>
                <span>Mon element est</span>
                {
                   this.state.listAPI.map((message, index) => {
                     return (
                         <span className="listAPI" key={index}>{' '+message.stringValue}</span>
                     )
                   })
                }

            </div>

        )
    }

}



export default App;
