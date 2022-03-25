import React, { Component } from 'react';
import{
Platform,
StyleSheet,
View,
Text,
TextInput,
AppRegistry,
Button,
Image,
TouchableOpacity,
Navigation,
ImageBackground,

} from 'react-native';

export default class Userlogin extends Component {
    Login() {
		Actions.Login()
	}
render() {
return (

  <ImageBackground
  
  style={{height:'100%',width:'100%'}}
      source={require('../images/reg.jpg')}

  >

  <View style={{flex:1}}>
<View  style={{flew:1,alignItems:'center',justifyContent:'center'}}>
  <Image style={{height:150,width:150,borderRadius:70}}source={require('../images/login.jpg')}>
  </Image>
<Text style={{fontSize:40,fontStyle:"italic",textAlign:"center"}}>Welcome To Project Coordination Portal</Text>  
 </View>
 <View style={{flex:1,alignItems:'center',marginTop:60}}>
<TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
  <View style={{height:50,width:340,borderRadius:30, alignContent:'center', backgroundColor:'#464643'}}>
    <Text style={{textAlign:"center",color:"white",fontSize:25}}>Login as Student</Text>
  </View>

</TouchableOpacity>
<TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
  <View style={{height:50,width:340,borderRadius:30,alignContent:'center',marginTop:20,backgroundColor:'#464643'}}>
  <Text style={{textAlign:"center",color:"white",fontSize:25}}>Login as Supervisor</Text>
  </View>
</TouchableOpacity>
 </View>
 </View>
 
 </ImageBackground>

);
}
}
const styles = StyleSheet.create({


    container : {
        //backgroundColor:'#455a64',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
      },
      loginButton: {
        color:'#1c313a',
        fontSize:16,
        fontWeight:'500'
    }

});