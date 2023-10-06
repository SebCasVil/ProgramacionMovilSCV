import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import First from './src/screens/First';
import Second from './src/screens/Second';
import Third from './src/screens/Third';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TabNav = createMaterialTopTabNavigator()

import { AppContextProvider } from './src/context/AppContext';

export default function App() {


  return (
    <AppContextProvider>
      <NavigationContainer>
        <TabNav.Navigator tabBar={() => null} initialRouteName='First' backBehavior='initialRoute'>
          <TabNav.Screen name='First' component={First}/>
          <TabNav.Screen name='Second' component={Second}/>
          <TabNav.Screen name='Third' component={Third}/>
        </TabNav.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
