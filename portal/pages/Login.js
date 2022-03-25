import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
export default class Login extends React.Component {
	render() {
		return(
      <ImageBackground
      style={{height:'100%',width:'100%'}}
      source={require('../images/reg.jpg')}>
 
        <View style={{flex:1,alignItems:'center',justifyContent:'center'
      }}>
        <Image  style={{width:40, height: 70}}
          			source={require('../images/logo.png')}/>
          		<Text style={styles.logoText}>Login / Signup to Portal</Text>	
        </View>
			<View style={{flex:1,alignItems:'center'}}>
      <TextInput style={styles.inputBox} 
          
           placeholder="Email"
           placeholderTextColor = "black"
           selectionColor="#fff"
           keyboardType="email-address"
           />
       <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)' 
           placeholder="Password"
           secureTextEntry={true}
           placeholderTextColor = "black"
           />  
        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('SupervisorMenu')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity> 
      </View>
            
      
			<View style={styles.container}>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={()=>this.props.navigation.navigate("Signup")}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				</View>
			</View>


      </ImageBackground>
     
    )
	}
}

const styles = StyleSheet.create({
  container : {
    
    flex: 1,
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    flexDirection:'row'
  },
  signupText: {
  	color:'black',
  	fontSize:16
  },
  signupButton: {
  	color:'black',
  	fontSize:16,
  	fontWeight:'500'
  },
  container1:{
    flex: 1,
    alignItems:'center',
    backgroundColor:'#455a64'
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:18,
  	color:'black'
  },
  container2 : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.5)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
 
});
