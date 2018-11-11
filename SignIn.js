import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';


class SignIn extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isTrue: true,
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME BACK!</Text>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            placeholder="Username / Email "
          />
          <TextInput
            style={styles.input}
            placeholder="Password (8+ characters)"
          />
        </View>
        <Text style={styles.loginoption}>Forgot your password?</Text>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('HomeScreen')}
            style={styles.btn}>
            <Text style={styles.txt}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>OR</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('HomeScreen')}
            style={styles.btn2}>
            <Text style={styles.txt}>Sign up with Google</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('HomeScreen')}
            style={styles.btn2}>
            <Text style={styles.txt}>Sign up with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F0F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 40,
    fontSize: 17,
  },
  inputs :{
    marginBottom: 40,
  },
  btn: {
    backgroundColor:'#1c92d2',
    paddingHorizontal:30,
    marginTop: 20,
    marginBottom:20,
    height: 50,
    justifyContent: 'center',
    borderRadius:15,
  },
  btn2: {
    backgroundColor:'#004d99',
    paddingHorizontal:30,
    marginTop: 20,
    marginBottom:0,
    height: 50,
    justifyContent: 'center',
    borderRadius:15,
  },
  input: {
    color: 'black',
    borderWidth: 0,
    borderColor: 'black',
    borderRadius:15,
    minWidth: 100,
    marginTop: 20,
    marginBottom:10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
  },
  txt: {
    color: '#fff',
    width: 250,
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: 'normal',
  },
  loginoption: {
    color: '#607D8B',
    marginTop: 20,
  },
  checkbox: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom:20,
  },
});
export default SignIn;
