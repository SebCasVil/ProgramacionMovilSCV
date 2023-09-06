import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CurrentWallet from './fragments/CurrentWallet';
import WithdrawAmount from './fragments/WithdrawAmount';

const BodyWallet = () => {
  return (
    <>
      <View style={styles.content}>
        <Text style={styles.text}>Exchange</Text>
      </View>
      <View style={styles.secondContent}>
        <CurrentWallet />
        <View style={styles.separator}></View>
        <WithdrawAmount />
      </View>
    </>
  );
};

export default BodyWallet;

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    padding: 15,
    backgroundColor: '#ffffff86',
    width: '90%',
    alignSelf: 'center',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'gray',
  },
  secondContent: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    height: '77%',
    borderRadius: 20,
    marginTop: -2,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  separator: {
    borderWidth: 1,
    borderBlockColor: '#E8E8E8',
    marginVertical: 20,
  },
});
