import {StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CharactersScreen from './src/screens/CharactersScreen';
import CharacterDetailScreen from './src/screens/CharacterDetailScreen';

const Stack = createStackNavigator()

export default function App() {
  return (

    <NavigationContainer>
      <View style={styles.container}> 
          <Stack.Navigator initialRouteName='Home' screenOptions={{headerStyle:{backgroundColor: '#3C3E44'}, headerTitleStyle:{color: 'white'}}}>
            <Stack.Screen name='Home' component={CharactersScreen}/>
            <Stack.Screen name='Details' component={CharacterDetailScreen}/>
          </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingTop: Constants.statusBarHeight+10,
  },
});
