import React, {Component} from 'react';
import firebase from '@firebase/app';
require('firebase/auth');
import {Text, View} from 'react-native';
import {Button, Card, CardSection, Input, Spinner, Header} from './common';
import SignupForm from './SignupForm';

class LoginForm extends Component {
    //Add a loading boolean in state to control when we want to display the spinner thingy for loading
    state = { 
        email: '', password: '', error: '', loading: false, signUp: false
    };

    onLoginSuccess(){
        console.log("success")
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onLoginFail(){
        console.log("fail")
        this.setState({ 
            error: 'Your email and/or password is incorrect!', 
            loading: false
        });
    }
    
    onLogInButtonPress(){
        const {email, password} = this.state;

        //This means that when the button is clicked
        //the error msg will be cleared 
        //and loading will be true to display the spinner thingy
        this.setState({error: '', loading: true}); 
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    }

    onRegisterPress(){
        this.setState({
            signUp: true
        })
    }

    onForgotPasswordPress(){
        console.log("forgot password oh no!")
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
                <Button onPress={this.onLogInButtonPress.bind(this)}>
                    Log In
                </Button>
            );
        }
    }

    render(){
        if(!this.state.signUp){
            return(
                <View>
                    <Header headerText = 'HMU' textStyle = {{ fontSize: 50, color: '#FFFFFF'}}/>
                <Card>
                    <CardSection style = {{
                        paddingTop: 100
                    }}>
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
                            isPassword
                            placeholder="Password"
                            label = "🔒"
                            value={this.state.password}
                            onChangeText={password => this.setState({password})}
                        />
                    </CardSection>
    
                    <Text style = {styles.errorTextStyle}>
                        {this.state.error}
                    </Text>
    
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                    <CardSection>
                        <View style = {{
                            paddingTop: 150
                        }}>
                            <Text style = {{
                                color: '#FFFFFF'
                            }}>
                                Not registered yet?{" "}
                                <Text onPress = {this.onRegisterPress.bind(this)}
                                        style = {{fontWeight: 'bold'}}>
                                    Register here
                                </Text>
                            </Text>
                            <Text onPress = {this.onForgotPasswordPress.bind(this)}
                                style = {{
                                textAlign: 'center',
                                color: '#FFFFFF',
                                fontWeight: 'bold'
                            }}>
                                Forgot your password?
                            </Text>
                        </View>
                    </CardSection>
                </Card>
                </View>
            );
        }
        //If we are in signing up screen, the signUp flag will be turn to true by the 
        //set state above and we return the sign up form
        else{
            return <SignupForm/>
            this.setState({
                signUp: false
            })
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

export default LoginForm;