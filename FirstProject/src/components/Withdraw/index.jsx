import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HeaderWallet from './Header';
import BodyWallet from './Body';

const Withdraw = ({ handleShowSecondScreen }) => {
  return (
    <View>
      <HeaderWallet handleShowSecondScreen={handleShowSecondScreen}/>
      <BodyWallet />
    </View>
  );
};

export default Withdraw;

const styles = StyleSheet.create({});
