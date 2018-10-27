import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';

class SignIn extends React.Component {

  render(){
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HomeScreen')}
          style={styles.btn2}>
          <Text style={styles.txt}>Sign up with Google</Text>
        </TouchableOpacity>
      </View>
    )
  }
}const styles = StyleSheet.create({
  btn2: {
    backgroundColor:'#1c92d2',
    paddingHorizontal:30,
    marginTop: 20,
    marginBottom:20,
    height: 50,
    justifyContent: 'center',
    borderRadius:15,
  },
  txt: {
    color: '#fff',
    width: 250,
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: 'normal',
  },
});

export default SignIn;
