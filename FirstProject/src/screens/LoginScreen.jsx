import {Button, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';


import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

export default function LoginScreen({ route}) {
  console.log(route)
  const {name} = route.params

  const navigation = useNavigation()

  const {canGoBack, goBack} = navigation
  return (
    <View>
      <Header/>
      <View style={styles.container}> 
        <Text>Login!</Text>
        <Text>{name}</Text>
        <Button title='GO back!' disabled={!canGoBack} onPress={() => goBack()}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: Constants.statusBarHeight+10,
    alignItems: 'center',
    justifyContent: 'center'
  },
});