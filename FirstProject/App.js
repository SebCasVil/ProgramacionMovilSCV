import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Card } from './src/components/Card';
import { AppContextProvider } from './src/context/AppContext';

export default function App() {


  return (
    <AppContextProvider>
      <View style={styles.container}>
        <Card/>
        <StatusBar style="auto" />
      </View>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
