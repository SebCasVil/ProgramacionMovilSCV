import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import First from './src/screens/First';

export default function App() {
  return (
    <View style={styles.container}>
        <First></First>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2b2ff',
    alignItems: 'start',
    justifyContent: 'center',
  },
});
