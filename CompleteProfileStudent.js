import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Homepage from './Homepage';
import SignUp from './SignUp';
import SignIn from './SignIn';

class CompleteProfileStudent extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tell us more about yourself!</Text>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="School"
        />
        <TextInput
          style={styles.input}
          placeholder="Major"
        />
        <TextInput
          style={styles.input}
          placeholder="Interests"
        />
        <TextInput
          style={styles.input}
          placeholder="Field"
        />
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
  inputs :{
    marginBottom: 10,
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

  title: {
    marginBottom: 40,
    fontSize: 17,
  },
});

export default CompleteProfileStudent;
