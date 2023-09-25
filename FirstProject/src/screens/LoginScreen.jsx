import {StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

export default function LoginScreen({navigation, route}) {
  console.log(route)
  const {name} = route.params
  return (
    <View style={styles.container}> 
        <Text>Login!</Text>
        <Text>{name}</Text>
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