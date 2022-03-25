import React, { Component } from 'react';
import {
  View
} from 'react-native';


//import SplashScreen from 'react-native-splash-screen';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Userlogin from './pages/Userlogin';
import StudentMenu from './pages/StudentMenu';
import SupervisorMenu from './pages/SupervisorMenu';
import IdeaSharing from './pages/IdeaSharing';
import PickSupervisor from './pages/PickSupervisor';
import Grading from './pages/Grading';
import UploadTask from './pages/IdeaSharing';
import {  createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const Navigation = createStackNavigator(
  {
    Userlogin: {
      screen : Userlogin,
      navigationOptions:{
        headerShown:'false'
      },
    },
    Login:{
      screen : Login,
      navigationOptions:{
        headerShown:'none'
      },
    },
    Signup:{
      screen:Signup,
      navigationOptions:{
        headerShown:'false'
      },
    },
    StudentMenu:{
      screen:StudentMenu,
      navigationOptions:{
headerShown:'false'
      },
    },
    SupervisorMenu:{
      screen:SupervisorMenu,
      navigationOptions:{
headerShown:'false'
      },
    },
  PickSupervisor: {
    screen : PickSupervisor,
    navigationOptions:{
      headerShown:'false'
    },
  },

  IdeaSharing: {
    screen : IdeaSharing,
    navigationOptions:{
      headerShown:'false'
    },
  },

  Grading: {
    screen : Grading,
    navigationOptions:{
      headerShown:'false'
    },
  },
 
  UploadTask: {
    screen : UploadTask,
    navigationOptions:{
      headerShown:'false'
    },
  },
  
  },
  {
    initialRouteName:'Userlogin'
  }

)

 const Appcontainer=createAppContainer(Navigation);
export default  class App extends React.Component {

  render() {
    return (
      <Appcontainer/>
    )
  }
}

