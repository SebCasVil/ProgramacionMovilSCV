import {Button, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import Header from '../components/Header';

export default function HomeScreen({navigation}) {
  const {canGoBack, goBack} = navigation
  return (
    <View>
    <Header/>
      <View style={styles.container}> 
        <Text>Home!</Text>
        <Button title='Go to login page' onPress={() => navigation.navigate('Login', {name: 'Kir'})}/>
        <Button title='GO back!' disabled={!canGoBack()} onPress={() => goBack()}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: Constants.statusBarHeight+10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});