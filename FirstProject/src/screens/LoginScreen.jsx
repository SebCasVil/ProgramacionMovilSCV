import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

export default function LoginScreen({navigation, route}) {
  const bola = (numero) => {
    return(
      <View style={styles.bola}>
        <Text style={{fontWeight: 'bold'}}>{numero}</Text>
      </View>
    )
  }

  const cuadrado = ({text1, text2, active}) => {
    return(
      <View style={styles.cuadrado}>
        <View style={{gap: 10,}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#858585'}}>{text1}</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{text2}</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <AntDesign name={active ? "checkcircle" : "checkcircleo"} size={24} color={active ? "#F87A39" : "#908C8A"} />
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}> 
      <View style={{gap: 5, alignItems: 'center'}}>
        <View style={styles.first}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <AntDesign name="calendar" size={24} color="black" />
              <Text style={{fontWeight: 'bold'}}>Today</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <AntDesign name="clockcircleo" size={24} color="black" />
              <Text style={{fontWeight: 'bold'}}>10:11:00</Text>
            </View>
          </View>

          <View style={styles.second}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>Ticket 1</Text>
              <AntDesign name="reload1" size={24} color="#A2BFB5" />
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
              {bola(1)}
              {bola(7)}
              {bola(14)}
              {bola(16)}
              {bola(19)}
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row', gap: 10}}>
              {cuadrado({text1:'Rate type',text2:'One time bet', active: true})}
              {cuadrado({text1:'Rate type',text2:'Subscription', active: false})}
            </View>
          </View>
      </View>
      <TouchableOpacity style={styles.button} >
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15}}>Watch Results</Text>
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
    backgroundColor: '#ECDCC2',
    padding: 10,
  },
  first: {
    backgroundColor: '#E2CEAB',
    borderRadius: 20,
    flexDirection: 'row',
    gap: 20,
    padding: 20,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  second: {
    backgroundColor: '#016F48',
    borderRadius: 20,
    padding: 20,
    gap: 10
  },
  bola:{
    backgroundColor: '#FFD73A',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50
  },
  cuadrado:{
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    height: 170,
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#016F48',
    paddingVertical: 20,
    paddingHorizontal: 35,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});