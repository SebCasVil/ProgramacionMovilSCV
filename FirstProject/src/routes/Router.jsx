import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

export default function Router() {
  return (

    <NavigationContainer>
      <View style={styles.container}> 
          <Text>HELLO WORLD!</Text>
      </View>
    </NavigationContainer>
  );
}

