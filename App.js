import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Homepage from './Homepage';
import StartForm from './StartForm';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          source={require('./mentor.png')}/>
          <Text style={styles.welcomeMsg}>A student-mentor matching app</Text>
        </View>
        <View style={styles.formContainer}>
          <StartForm/>
        </View>
      </View>
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
});
