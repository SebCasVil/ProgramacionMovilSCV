import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  Dimensions, Image, TextInput } from 'react-native';
import { StyledText } from './src/components/StyledText';
import Login from './src/screens/Login';


// Exportado por defecto (Unicamente se importa esta función cuando se intente importar en otro archivo)
export default function App() {
const{height, width} = Dimensions.get('screen')

  return (
    <View style={styles.container}>
      {/* <Image source={{
        uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5TJkpaC24QdQuYP0U4X2Prg_nkdVVQggjDmLq76COb5Yd1G71el9NnEXFloDdZmonno&usqp=CAU',
        width: 100,
        height: 100
      }}/>
      <TextInput style={styles.input} placeholder='Introduce texto' placeholderTextColor={'blue'}/> */}

      
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
