import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router'

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDH3k0ldUwBp_zi0xTuhs04FNsJKN3uCeM",
            authDomain: "manager-60209.firebaseapp.com",
            databaseURL: "https://manager-60209.firebaseio.com",
            projectId: "manager-60209",
            storageBucket: "",
            messagingSenderId: "459223939313"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

export default App;