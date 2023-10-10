import {StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function StartScreen({route}) {
  const navigation = useNavigation()
  const {navigate} = useNavigation()

  return (
      <View style={styles.container}> 
        <Image style={styles.image}source={{uri: 'https://cdn3.vectorstock.com/i/1000x1000/07/67/fast-food-square-icon-set-vector-11770767.jpg'}}/>
        <View style={{width: 300, justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: '#253861', textAlign: 'center'}}>Shopping with best e-commerce store</Text>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: '#253861', textAlign: 'center'}}>Find best shopping experience with us by your favourite daily needs!</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigate('Login')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Get Started</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 300,
  },
  button: {
    backgroundColor: '#20B0B0',
    borderRadius: 50,
    paddingHorizontal: 120,
    paddingVertical: 15
    },
});