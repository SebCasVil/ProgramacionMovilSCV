import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as ReactStatus, Platform} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';


// Exportado por defecto (Unicamente se importa esta función cuando se intente importar en otro archivo)
export default function App() {
  return (
    <View style={styles.container}>
      <Text>TEXTO</Text>
      <Ionicons name='notifications' size={20}></Ionicons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2b2ff',
    // alignItems: 'center',
    // justifyContent: 'center',

    // paddingTop: Platform.OS === 'android' ? ReactStatus.currentHeight else auto
    paddingTop: Constants.statusBarHeight
    // paddingTop: ReactStatus.currentHeight,
    // Para tener el mismo efecto pero en iOS podemos usar SafeAreaView
  },
});
