import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { IMAGES } from '../../assets';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}> 
      <View>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 40, width: 250}}>Play and Win!</Text>
        <Text style={{fontWeight: 'bold', color: '#7CAB9A', fontSize: 15, width: 250, textAlign:'center'}}>Game for anyone who likes to try luck at guessing numbers.</Text>
      </View>
      <Image source={IMAGES.homeImage}/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login', {text: '$234 000 000', text2: 'UroMillions'})}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15}}>Get started!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: Constants.statusBarHeight+10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#016F45',
    padding: 20,
    paddingBottom: 40
  },
  button: {
    backgroundColor: '#F7793C',
    paddingVertical: 20,
    paddingHorizontal: 35,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});