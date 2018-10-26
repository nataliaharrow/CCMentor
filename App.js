import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Homepage from './Homepage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { StackNavigator, createSwitchNavigator } from 'react-navigation';

class StartForm extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          source={require('./mentor.png')}/>
          <Text style={styles.welcomeMsg}>A student-mentor matching app</Text>
        </View>
        <View style={styles.container1}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignInScreen')}
            style={styles.btn}>
            <Text style={styles.txt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUpScreen')}
            style={styles.btn}>
            <Text style={styles.txt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator ({
  HomeScreen: StartForm,
  SignUpScreen: SignUp,
  SignInScreen: SignIn
  },{
    initialRouteName: 'HomeScreen',
  }
)

export default class App extends React.Component {

  render() {
    return (
      <AppNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00c6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer :{
    alignItems:'center',
    flexGrow: 1,
  },
  welcomeMsg: {
    color: '#fff',
    marginTop: 50,
    width: 300,
    textAlign: 'center',
    fontFamily: 'Chalkboard SE',
    fontSize: 19,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  container1: {
    padding: 20,
    marginBottom: 100,
  },
  btn: {
    backgroundColor:'#1c92d2',
    paddingHorizontal:30,
    marginTop: 15,
    height: 50,
    justifyContent: 'center',
    borderRadius:15,
  },
  txt: {
    color: '#fff',
    width: 250,
    fontSize: 19,
    textAlign: 'center',
    fontFamily: 'Chalkboard SE',
    fontWeight: 'bold',
  },
});
