import React, {Component} from 'react';
import firebase from '@firebase/app';
require('firebase/auth');
import {Text, View} from 'react-native';
import {Button, Card, CardSection, Input, Spinner, Header} from './common';
import LoginForm from './LoginForm';

class SignupForm extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        error: '',
        loading: false,
        logIn: false //true because we are in signupForm
    }

    onCreateButtonPress(){
        const {email, password} = this.state;

        if(this.state.password === this.state.confirmPassword){
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({
                    email: '',
                    password: '',
                    confirmPassword: '',
                    name: '',
                    loading: false,
                    logIn: true,
                    error: 'Successfully signed up!'
                })
            })
            .catch(() => {
                this.setState({
                    email: '',
                    password: '',
                    confirmPassword: '',
                    name: '',
                    loading: false,
                    logIn: false,
                    error: 'That email may have existed!'
                })
            })
        }
        else{
            this.setState(
                {
                    password: '',
                    confirmPassword: '',
                    error: 'Your passwords do not match!'
                }
            )
        }
    }

    onClickhereButtonPress(){
        this.setState({
            logIn : true
        })
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small"/>
        }
        else{
            return (
                /* onPress is not arbitrary but it has to match 
                    with the props in Button.js, else the button 
                    won't do anything. */
                <Button onPress={this.onCreateButtonPress.bind(this)}>
                    Create
                </Button>
            );
        }
    }

    render(){
        if(!this.state.logIn){
            return(
                <View>
                    <Header headerText = 'New Account Set Up' textStyle = {{ fontSize: 30, color: '#FFFFFF'}}/>
                    <Card>
                    <CardSection>
                        <Input 
                            placeholder = "NetID@utdallas.edu"
                            label = "✉"
                            value = {this.state.email}
                            onChangeText = {email => this.setState({email})}
                            style = {styles.inputStyle}
                        />
                    </CardSection>
                    <CardSection>
                        <Input 
                            placeholder = "Name"
                            label = "👤"
                            value = {this.state.name}
                            onChangeText = {name => this.setState({name})}
                            style = {styles.inputStyle}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            isPassword
                            placeholder="Password"
                            label = "🔒"
                            value={this.state.password}
                            onChangeText={password => this.setState({password})}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            isPassword
                            placeholder="Confirm Password"
                            label = "🔒"
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this.setState({confirmPassword})}
                        />
                    </CardSection>
                    <CardSection>
                            {this.renderButton()}
                    </CardSection>
                    <Text style = {styles.errorTextStyle}>
                        {this.state.error}
                    </Text>
                    <CardSection> 
                        <Text
                            onPress = {this.onClickhereButtonPress.bind(this)}
                            style = {{
                                paddingTop: 100,
                                color: '#FFFFFF'
                        }}>
                            Already a user?{" "}
                            <Text 
                                style = {{fontWeight: 'bold'}}>
                                Click here
                            </Text>
                        </Text>
                    </CardSection>
                </Card>
                </View>
            );
        }
        else{
            return <LoginForm/>
        }
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default SignupForm;