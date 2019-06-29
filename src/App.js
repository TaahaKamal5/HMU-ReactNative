import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './Components/common';
import LoginForm from './Components/LoginForm';


class App extends Component {
    state = { loggedIn: false };

    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDNH0dA1dSMDzP6DWkdqYSIaA3tRPnRBp4',
            authDomain: 'hmu-react-native.firebaseapp.com',
            databaseURL: 'https://hmu-react-native.firebaseio.com',
            projectId: 'hmu-react-native',
            storageBucket: '',
            messagingSenderId: '310182293410',
            appId: '1:310182293410:web:4af0d5f87c607e77'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({
                    loggedIn: true
                })
            }
            else {
                this.setState({
                    loggedIn: false
                })
            }
        })
    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return (<Button onPress = {() => firebase.auth().signOut()}>
                            Log Out
                        </Button>)
            case false:
                return <LoginForm/>
            default:
                //showing the spinner when the state is null, meaning not decided if
                //logged in or logged out yet
                return <Spinner size = "large"/>
        }
    }

    render() {
        return (
            <View style = {styles.pageStyle}>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    pageStyle :{
        backgroundColor: '#5f7ba1',
        flexDirection: 'column',
        flex: 1
    }
}

export default App;