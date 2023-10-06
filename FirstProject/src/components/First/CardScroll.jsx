import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import Card from './Card';
import { Tarjetas } from '../../../assets';


export default function CardScroll({money, account, color, textColor}) {
  const { theme } = useContext(AppContext);

  const styles = StyleSheet.create({
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        width: 80,
        borderRadius: 30,
        marginHorizontal: 2.5,
        backgroundColor: theme.second
        },
    });

  return (
      <ScrollView horizontal={true}>
        <TouchableOpacity style={styles.addButton}>
            <Text style={{fontSize: 30, color: theme.text2}}>+</Text>
        </TouchableOpacity>
        {Tarjetas.map((tarjeta, index) => (
            <Card
              key={index}
              textColor={tarjeta.textColor}
              money={tarjeta.money}
              account={tarjeta.account}
              color={tarjeta.color}
            />
          ))}
      </ScrollView>
  );
}

