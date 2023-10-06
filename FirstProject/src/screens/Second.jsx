import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import TransaccionList from '../components/Second/TransaccionList';
import SecondHeader from '../components/Second/SecondHeader';
import { IMAGES } from '../../assets';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


export default function Second() {
  const { theme } = useContext(AppContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: theme.background
    },
    text: {
      color: theme.text,
      fontSize: 15
    },
    text2: {
      color: 'gray',
      fontSize: 15,
      marginRight: 20
    },
  });

  return (
      <View style={styles.container}>
        <SecondHeader/>
        <Text style={{color: 'gray', fontSize: 20}}>Total Balance</Text>
        <Text style={{color: theme.text, fontSize: 40}}>$32,751.75</Text>
        <View style={{flexDirection: 'row', gap: 30}}>
          <Text style={styles.text}>Day</Text>
          <Text style={styles.text}>Week</Text>
          <Text style={[styles.text, {color: theme.second}]}>Month</Text>
          <Text style={styles.text}>Year</Text>
        </View>
        <Image source={IMAGES.graph}/>
        <ScrollView horizontal={true} style={{paddingHorizontal: 20}}>
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((texto, index) => (
            <Text key={index} style={styles.text2}>
              {texto}
            </Text>
          ))}
        </ScrollView>
        <TransaccionList/>
      </View>
  );
}

