import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as ReactStatus, Platform} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { WebText } from './src/components/CustomText/CustomText.web';
import { AndroidText } from './src/components/CustomText/CustomText.android';

import { CustomText } from './src/components/CustomText/CustomText';


// Exportado por defecto (Unicamente se importa esta función cuando se intente importar en otro archivo)
export default function App() {

console.log(Platform)

  return (
    <View style={styles.container}>
      <CustomText></CustomText>
      <Ionicons name='notifications' size={20} style={styles.text}></Ionicons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Platform.OS === 'web' ? 'black' : '#b2b2ff',

    // backgroundColor: Platform.select({
    //   android: '#b2b2ff',
    //   web: 'black',
    //   ios: 'blue',
    // }),

    // ...Platform.select({
    //   web: {
    //     backgroundColor: 'black',
    //     color: 'white'
    //   },
    //   android:{
    //     backgroundColor: '#b2b2ff',
    //     color: 'black'

    //   }
    // })

    // paddingTop: Platform.OS === 'android' ? ReactStatus.currentHeight else auto
    // paddingTop: Constants.statusBarHeight
    // paddingTop: ReactStatus.currentHeight,
    // Para tener el mismo efecto pero en iOS podemos usar SafeAreaView
  },
  text: {
    // color: Platform.OS === 'web' ? 'white' : 'black',
  }
});
