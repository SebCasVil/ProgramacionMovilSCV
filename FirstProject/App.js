import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import First from './src/screens/First';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <First />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D76741',
    // paddingTop: Constants.statusBarHeight,
    alignItems: 'start',
    justifyContent: 'center',
  },
});
