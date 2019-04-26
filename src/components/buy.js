import React , {Component} from 'react';
import { Text, Button, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default Buy extends Component {
	render(){
		return (
			<View style={styles.container}>
			
			<TextInput 
			style = {styles.input}
			placeholder = "First Name"
			onChangeText={ (text) => this.setstate({text})
			/>

			<TextInput
			style = {styles.input}
			placeholder = "Last Name
			onChangeText={ (text) => this.setState({text})
			/>
			
			<TextInput
			style = {styles.input}
			placeholder = "Phone Number"
			onChangeText={ (text) => this.setState({text})
			/>

			<TextInput
			style = {styles.input}
			placeholder = "Address to ship to"
			onChangeText={ (text) => this.setState({text})
			/>
			</View>
	
		);
	}
}
