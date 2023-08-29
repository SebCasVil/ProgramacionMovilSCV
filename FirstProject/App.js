import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  Dimensions, Image, TextInput } from 'react-native';
import Login from './src/screens/Login';


// Exportado por defecto (Unicamente se importa esta función cuando se intente importar en otro archivo)
export default function App() {
const{height, width} = Dimensions.get('screen')

  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2b2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'aliceblue',
  },
  button:{
    borderWeight: 3,
    padding: 5
  },
  input:{
    borderWidth: 1,
    width: 200,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'red',
    backgroundColor: 'aliceblue'
  }
});
