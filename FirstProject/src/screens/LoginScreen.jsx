import {StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../hooks/useAuthContext';


export default function LoginScreen({route}) {
  const {handleLogin: onLogin} = useAuthContext()
  const navigation = useNavigation()
  const {navigate} = useNavigation()

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Campos vacíos', 'Por favor, complete todos los campos');
      return;
    }
    try {
      const loginValue = onLogin(username, password)
      if (loginValue) {
        setPassword('')
        setUsername('')
        return navigation.navigate('Home1')
      }else {
        Alert.alert('Inicio de sesión fallido', 'Verifique los datos y vuelva a intentar');
      }

    } catch (error) {
      console.error(error)
    }
  }

  /////////////////////////////////////////////7

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
      <View style={styles.container}> 
        <Image style={styles.image}source={{uri: 'https://hips.hearstapps.com/hmg-prod/images/comfort-food-recipes-64668a179574d.png'}}/>
        <View style={{width: '80%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: '#253861'}}>Welcome!</Text>
        </View>
        <View style={{width: '80%'}}>
          <Text style={{fontWeight: 'bold'}}>Email</Text>
          <TextInput
            value={username}
            onChangeText={(value) => setUsername(value)}
            placeholder='Enter your email'
            style={styles.input}
          />
        </View>
        <View style={{width: '80%'}}>
          <Text style={{fontWeight: 'bold'}}>Password</Text>
          <TextInput
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder='Enter your password'
            style={styles.input}
            secureTextEntry
          />
          <View style={{ alignItems: 'flex-end', padding:5 }}>
            <TouchableOpacity onPress={handleLogin}>
                <Text style={{color: '#20B0B0'}}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.login} onPress={handleLogin}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row'}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigate('SignUp')}>
            <Text style={{color: '#20B0B0', textDecorationLine: 'underline'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 300,
    width: '100%',
    overflow: 'hidden', 
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 5,
    padding: 15,
    height: 50, 
    width: '100%',
    borderColor: 'gray'
  },
  login: {
    backgroundColor: '#20B0B0',
    borderRadius: 50,
    paddingHorizontal: 120,
    paddingVertical: 15
    },
});