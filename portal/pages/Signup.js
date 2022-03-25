// SignUp.js
import React from 'react'
import {
  View,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native'
export default class SignUp extends React.Component {
  goBack() {
    Actions.pop();
}
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
<ImageBackground

style={{height:'100%',width:'100%'}}
source={require('../images/reg.jpg')}>

      <View style={styles.container}>
        
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <Button
          title='Sign Up'
          onPress={this.signUp}
          
        />
      </View>
      </ImageBackground>

    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'rgba(255, 255,255,0.5)',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 20,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
  //  backgroundColor:'#455a64',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})