import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import BotonNaranja from '../../components/General/BotonNaranja';

export default function Inicio({handleSignInClick, handleSignUpClick}) {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Welcome!</Text>
            <Text style={{color: 'gray'}}>Sign in or create a new account</Text>
        </View>
        <Image style={styles.imagen} source={{uri: 'https://static.vecteezy.com/system/resources/previews/003/625/555/original/hot-air-balloon-free-vector.jpg'}}></Image>
        <View style={styles.botones}>
            <BotonNaranja text={'Go to Sign in'} handleSignInClick={handleSignInClick}/>
            <TouchableOpacity style={styles.unirse} onPress={handleSignUpClick}>
                <Text style={{color: 'gray'}}>No account yet?</Text>
                <Text style={{color: '#FF9136'}}> Sign up!</Text>
            </TouchableOpacity>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imagen:{
    height: 300,
    width: 300
  },
  botones:{
    gap: 10
  },
  unirse:{
    borderWidth: 0.5,
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
});