import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const CurrentWallet = () => {
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.title}>Current Wallet Balance</Text>
        <Text style={styles.wallet}>$23,867</Text>
      </View>
      <TouchableOpacity style={styles.icon}>
        <AntDesign name='plus' size={24} color='orange' />
      </TouchableOpacity>
    </View>
  );
};

export default CurrentWallet;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#AAAAAA',
  },
  wallet: {
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
  },
  icon: {
    backgroundColor: '#FCEEEE',
    padding: 15,
    borderRadius: 40,
  },
});
