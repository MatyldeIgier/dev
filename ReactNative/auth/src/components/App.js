import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner, CardSection} from './common';
import LoginForm from './LoginForm';


class App extends Component {
    state = {loggedIn: null}

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button
                            onPress={ () => firebase.auth().signOut()}
                        >
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>;
        }
    }


    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: "AIzaSyBctaCCaXqw4ivRdnSz6tJpG83yMMlGLl4",
                authDomain: "auth-5f5ff.firebaseapp.com",
                databaseURL: "https://auth-5f5ff.firebaseio.com",
                projectId: "auth-5f5ff",
                storageBucket: "auth-5f5ff.appspot.com",
                messagingSenderId: "366889127105"
            });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        )
    }
}

export default App;