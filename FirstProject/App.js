import {StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CharactersScreen from './src/screens/CharactersScreen';
import CharacterDetailScreen from './src/screens/CharacterDetailScreen';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator()

export default function App() {
  return (

    <NavigationContainer>
      <View style={styles.container}> 
          <Stack.Navigator 
            initialRouteName='Home' 
            screenOptions=
              {{
                header: () => {
                  return(
                    <View style={{backgroundColor: '#323228', justifyContent: 'center', alignItems: 'center', padding: 20,borderWidth: 1, borderColor: '#636253'}}>
                      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Incantations of Elden Ring</Text>
                    </View>
                  )
                }
                }}
              
              >

            <Stack.Screen 
              name='Home' 
              component={HomeScreen}
              options={{
              }}
            />
            <Stack.Screen name='Login' component={LoginScreen}/>
          </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
});
