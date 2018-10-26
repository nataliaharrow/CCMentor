import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import SignUp from './SignUp';
import SignIn from './SignIn';


class StartForm extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}>
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
