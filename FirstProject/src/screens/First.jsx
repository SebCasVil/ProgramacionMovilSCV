import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { StyleSheet, View, Text } from 'react-native';
import CardScroll from '../components/First/CardScroll';
import PersonList from '../components/First/PersonList';
import CustomButton from '../components/First/CustomButton';
import CustomBigButton from '../components/First/CustomBigButton';
import FirstHeader from '../components/First/FirstHeader';


export default function First() {
  const { theme } = useContext(AppContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: theme.background
    },
  });

  return (
      <View style={styles.container}>
        <FirstHeader/>
        <View style={{alignItems: 'flex-start', width: 300, margin: 5}}>
          <Text style={{fontSize: 30, color: theme.text}}>My Cards</Text>
        </View>
          <CardScroll/>
          <View style={{flexDirection: 'row' , gap: 5, marginBottom: 10}}>
            <CustomBigButton text={'Send'} icon={"email-send-outline"}/>
            <CustomBigButton text={'Receive'} icon={"email-receive-outline"}/>
            <CustomBigButton text={'Swap'} icon={"swap-horizontal"}/>
          </View>
          <View style={{flexDirection: 'row' , gap: 5}}>
            <CustomButton text={'Activity'}/>
            <CustomButton text={'Contacts'} isActive/>
            <CustomButton text={'Payments'}/>
            <CustomButton text={'Sale'}/>
          </View>
          <PersonList/>
      </View>
  );
}
