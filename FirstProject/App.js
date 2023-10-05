import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Third from './src/screens/Third';

export default function App() {


  return (
      <View style={styles.container}>
        <Third/>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D'
  },
});
