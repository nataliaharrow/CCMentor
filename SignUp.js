import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import { StackNavigator, createSwitchNavigator } from 'react-navigation';
import { CheckBox } from 'react-native-elements';

class SignUp extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isTrue: true,
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SIGN UP</Text>
        <View style={styles.allinputs}>
          <TextInput
            style={styles.input}
            placeholder="First name"
          />
          <TextInput
            style={styles.input}
            placeholder="Last name"
          />
          <TextInput
            style={styles.input}
            placeholder="Email address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password (8+ characters)"
          />
        </View>
        <View style={styles.checkbox}>
        <View>
          <CheckBox
            title='Student'
            checked={this.state.checked}
          />
        </View>
        <View>
          <CheckBox
            title='Mentor'
            checked={this.state.checked}
          />
        </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('HomeScreen')}
            style={styles.btn}>
            <Text style={styles.txt}>Get started</Text>
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
        <Text style={styles.loginoption}>Already have an account? Sign in.</Text>
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
    marginBottom: 20,
    fontSize: 17,
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
    backgroundColor:'#1c92d2',
    paddingHorizontal:30,
    marginTop: 20,
    marginBottom:20,
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
    color: '#607D8B'
  },
  checkbox: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom:20,
  },
});


export default SignUp;
