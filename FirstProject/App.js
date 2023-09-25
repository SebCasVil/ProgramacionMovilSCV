import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CharacterScreen from './src/screens/CharacterScreen';
import CharactersScreen from './src/screens/CharactersScreen';

export default function App() {
  return (
    <View style={styles.container}>
        <CharactersScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#272B33'
  },
});
