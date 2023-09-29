import {StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import CustomHeader from './src/components/CustomHeader';

const Stack = createStackNavigator()

export default function App() {
  return (

    <NavigationContainer>
      <View style={styles.container}> 
          <Stack.Navigator initialRouteName='Home' or>
            <Stack.Screen 
              name='Home' 
              component={HomeScreen}
              options={{headerShown: false}}
              />
            <Stack.Screen 
              name='Login' 
              component={LoginScreen} 
              options={({navigation, route}) => ({
                header: () => <CustomHeader text={route.params.text} text2={route.params.text2} navigation={navigation}/>, 
              })}/>
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
