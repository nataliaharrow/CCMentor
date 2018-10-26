import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
<<<<<<< HEAD
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import SignUp from './SignUp';
import SignIn from './SignIn';


class StartForm extends React.Component {
=======

class StartForm extends React.Component {

  state = {
    showSignUp: true,
  }

  showSignUp = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  } 

>>>>>>> 91c80069da0063052a7b3c5c7dd180f9d88fdce8
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Login</Text>
        </TouchableOpacity>
<<<<<<< HEAD
        <TouchableOpacity
          style={styles.btn}>
=======
        <TouchableOpacity style={styles.btn} onPress={() => this.showSignUp()}>
>>>>>>> 91c80069da0063052a7b3c5c7dd180f9d88fdce8
          <Text style={styles.txt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 100,
  },
  btn: {
    backgroundColor:'#1c92d2',
    paddingHorizontal:30,
    marginTop: 15,
    height: 50,
    justifyContent: 'center',
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

export default StartForm;
