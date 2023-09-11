import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function BotonNaranja({text, handleSignInClick}) {
  return (
    <View>
        <TouchableOpacity style={styles.iniciar} onPress={handleSignInClick} >
            <Text style={{color: 'white'}}>{text}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iniciar:{
    flexDirection: 'row',
    backgroundColor: '#FF9136',
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
});