import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import { StackNavigator, createSwitchNavigator } from 'react-navigation';

class SignUp extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <View>
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
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('HomeScreen')}
            style={styles.btn}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00c6ff',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 100,
    height: 50,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
});


export default SignUp;