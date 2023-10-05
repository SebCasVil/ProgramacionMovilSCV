import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Image, Text } from 'react-native';
import NumPad from './NumPad';
import { AntDesign } from '@expo/vector-icons';

export default function ThirdContent() {


  return (
      <View style={styles.container}>
        <View style={styles.first}>
          <View  style={styles.imageContainer}>
            <Image style={styles.image} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg'}} />
            <View style={styles.icon}>
              <AntDesign name="wallet" size={24} color="black" />
            </View>
          </View>
          <Text style={{color: 'white', fontSize: 15}}>Benjamin Parker</Text>
          <Text style={{color: 'gray', fontSize: 13}}>**** 3294</Text>
        </View>
        <View style={styles.container2}>
          <TextInput 
            style={styles.input} 
            value='$340.00' 
            cursorColor='#EAF984' 
            placeholderTextColor={'white'}
            color='white'
          />
        </View>
        <NumPad/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },
  first: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 20
  },
  icon: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#EAF984',
    position: 'absolute',
    left: 35
  },
  imageContainer: {
    flexDirection: 'row'
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    fontSize: 40
  }
});
