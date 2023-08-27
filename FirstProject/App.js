import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { StyledText } from './src/components/StyledText';
import { CustomText } from './src/components/CustomText';
import { CustomTouchable } from './src/components/CustomTouchable';


// Exportado por defecto (Unicamente se importa esta función cuando se intente importar en otro archivo)
export default function App() {
  return (
    <View style={styles.container /*{backgroundColor:'red', flex: 1, alignItems: 'center', justifyContent: 'center'}*/}>
    {/* COMPONENTES BASE */}
      <TouchableHighlight  style={styles.button} onPress={()=> console.log('Press')}>
        <Text style={styles.text}>HELLO WORLD!</Text>
      </TouchableHighlight >
      {/* <StyledText text='Prueba de texto' fontSize={40} color='aliceblue' fontWeight='bold'></StyledText> */}
      <StatusBar style="light" />
    {/* COMPONENTES PERSONALIZADOS */}
      <CustomTouchable underlayColor='purple' borderColor='lightgray' borderWidth={1} padding={30} color='aliceblue' fontSize={20} borderRadius={20} contenido='Touchable custom' onPress={() => console.log("Touchable custom press")}></CustomTouchable>

      <CustomText text='Texto custom' fontSize={40} color='aliceblue' fontWeight='bold' fontStyle='italic' textAlign='center' letterSpacing={2} lineHeight={60} textDecorationLine='underline'></CustomText>
      
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
