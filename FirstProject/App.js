import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreen } from './src/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
    <WelcomeScreen/>
    <StatusBar></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
