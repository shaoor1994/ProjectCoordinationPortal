import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

 
export default class SupervisorMenu extends React.Component {

  render() {

    return(
 
      <ImageBackground
      style={{height:'100%',width:'100%'}}
      source={require('../images/reg.jpg')}>
 
 <ScrollView>
            <View style={{flex:1,justifyContent:'space-evenly'}}>
       
       
       <View style={{flex:1,alignItems:'center',marginTop:20,}}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
        <View style={{height:100,width:340,borderRadius:30, alignContent:'center', backgroundColor:'#8B0000',justifyContent:'center'}}>
          <Text style={{textAlign:'center',  color:"white",fontSize:25}}>View Task</Text>
        </View>
      
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
        <View style={{height:100,width:340,borderRadius:30,alignContent:'center',marginTop:10,backgroundColor:'#228B22',justifyContent:'center'}}>
        <Text style={{textAlign:"center",color:"white",fontSize:25}}>Upload Task</Text>
        </View>
      </TouchableOpacity>
       </View>
        <View style={{flex:1,alignItems:'center',marginTop:10}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Grading")}>
          <View style={{height:100,width:340,borderRadius:30,justifyContent:'center' ,alignContent:'center', backgroundColor:'#000080'}}>
            <Text style={{textAlign:"center",color:"white",fontSize:25}}>Grading</Text>
          </View>
        </TouchableOpacity>
      </View>  
      <View style={{flex:1,alignItems:'center',marginTop:10}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
          <View style={{height:100,width:340,borderRadius:30, justifyContent:'center',alignContent:'center', backgroundColor:'#464643'}}>
            <Text style={{textAlign:"center",color:"white",fontSize:25}}>Update Profile </Text>
          </View>
        </TouchableOpacity>
      </View>  
      <View style={{flex:1,alignItems:'center',marginTop:10}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
          <View style={{height:100,width:340,borderRadius:30, justifyContent:'center',alignContent:'center', backgroundColor:'#FF6347'}}>
            <Text style={{textAlign:"center",color:"white",fontSize:25}}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>  

   </View>
       </ScrollView>
  </ImageBackground>
        );
        
    }
}