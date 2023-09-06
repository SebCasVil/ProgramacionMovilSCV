import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Buttons from './Buttons';

const WithdrawAmount = () => {
  return (
    <View>
      <Text style={styles.text}>Withdraw Amount</Text>
      <Text style={styles.amount}>
        $19,29.<Text style={styles.span}>00</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <Buttons title='1' />
        <Buttons title='2' />
        <Buttons title='3' />
        <Buttons title='4' />
        <Buttons title='5' />
        <Buttons title='6' />
        <Buttons title='7' />
        <Buttons title='8' />
        <Buttons icon='reload' />
        <Buttons title='9' />
        <Buttons title='0' />
        <Buttons icon='close' />
      </View>
      <View style={styles.swipe}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons
            name='arrow-forward'
            size={45}
            color='#D16746'
            backgroundColor='white'
          />
        </TouchableOpacity>
        <Text style={styles.swipeText}>Swipe to Withdraw</Text>
      </View>
    </View>
  );
};

export default WithdrawAmount;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'gray',
    textAlign: 'center',
  },
  amount: {
    fontSize: 60,
    fontWeight: '800',
    color: '#D16746',
    textAlign: 'center',
  },
  span: {
    fontSize: 60,
    fontWeight: '800',
    color: '#EDBFAF',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 20,
  },
  swipe: {
    backgroundColor: '#D76741',
    borderRadius: 50,
    flexDirection: 'row',
    padding: 5,
    marginTop: 25,
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
  },
  swipeText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    width: '80%',
    fontSize: 20,
    fontWeight: '400',
  },
});
