import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Base from './src/screens/Base';

export default function App() {
  return (
    <View style={styles.container}>
      <Base/>
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
