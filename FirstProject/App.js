import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { StyledText } from './src/components/StyledText';


// Exportado por defecto (Unicamente se importa esta función cuando se intente importar en otro archivo)
export default function App() {
  return (
    <View style={styles.container /*{backgroundColor:'red', flex: 1, alignItems: 'center', justifyContent: 'center'}*/}>
      <TouchableHighlight style={styles.button} onPress={()=> console.log('Press')}>
        <Text style={styles.text}>HELLO WORLD!</Text>
      </TouchableHighlight>
      <StyledText text='Prueba de texto' fontSize={40} color='aliceblue' fontWeight='bold'></StyledText>
      <StatusBar style="light" />
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
  }
});
