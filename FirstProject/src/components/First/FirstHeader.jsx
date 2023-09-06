import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BotonGeneral from '../BotonGeneral';

export const FirstHeader = () => {
  return (
    <View style={styles.content}>
      <View style={styles.uno}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF8CD' }}>Wallet</Text>
        <View style={styles.buttonContainer}>
          <BotonGeneral icon={"notifications"} size={20} backgroundColor={'#FFDCB6'} color={'black'} circleSize={45} />
          <BotonGeneral icon={"person"} size={20} backgroundColor={'#FFDCB6'} color={'black'} circleSize={45} />
        </View>
      </View>
      <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#FFF8CD' }}>$23,867</Text>
      <TouchableOpacity style={{ flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FFF8CD' }}>Wallet id: 2678900085</Text>
        <Ionicons name="copy-outline" size={15} color='#FFF8CD' />
      </TouchableOpacity>
      <View style={styles.buttonContainer2}>
        <BotonGeneral icon={"arrow-back"} size={30} backgroundColor={'#FFCB63'} color={'black'} circleSize={75} />
        <BotonGeneral icon={"arrow-forward"} size={30} backgroundColor={'#FFCB63'} color={'black'} circleSize={75} />
        <BotonGeneral icon={"repeat"} size={30} backgroundColor={'#FFCB63'} color={'black'} circleSize={75} />
        <BotonGeneral icon={"add"} size={30} backgroundColor={'#FFCB63'} color={'black'} circleSize={75} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 0.4,
    // backgroundColor: '#E1651B',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  uno: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10
  },
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 15
  },
});