import {Button, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}> 
        <Text>Home!</Text>
        <Button title='Go to login page' onPress={() => navigation.navigate('Login', {name: 'Kir'})}/>
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