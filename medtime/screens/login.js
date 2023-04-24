import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { signIn } from '../lib/authentication';

export default function LoginScreen({setUser}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit() {
    await signIn(email, password, setUser)
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder='Email' value={email} onChangeText={text => setEmail(text)}/>
      <TextInput placeholder='Password' value={password} onChangeText={text => setPassword(text)} secureTextEntry={true}/>
      <Button title='Login' onPress={onSubmit}>
        
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red'
  }
});
