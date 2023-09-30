import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function EldenCard({item}) {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{uri: item.image}} style={styles.image}/>
            <View style={{width: 180}}>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontWeight: 'bold', color: '#DFDFBA'}}>Name: </Text>
                    <Text style={{ color: '#C5C5A4'}}>{item.name}</Text>
                </View>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontWeight: 'bold', color: '#DFDFBA'}}>Description: </Text>
                    <Text style={{ color: '#C5C5A4'}}>{item.description}</Text>
                </View>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontWeight: 'bold', color: '#DFDFBA'}}>Effects: </Text>
                    <Text style={{ color: '#C5C5A4'}}>{item.effects}</Text>
                </View>
                <Text style={{fontWeight: 'bold', color: '#DFDFBA'}}>Requires:</Text>
                { item.requires ? item.requires.map((stat, index) => {
                    return(
                    <View style={{flexDirection:'row', alignItems: 'center'}} key={index}>
                        <Entypo name="dot-single" size={24} color='#DFDFBA' />
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontWeight: 'bold', color: '#DFDFBA'}}>{stat.name}: </Text>
                            <Text style={{ color: '#C5C5A4'}}>{stat.amount}</Text>
                        </View>
                    </View>
                    )
                }) : null}
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight: 'bold', color: '#DFDFBA'}}>Mana cost: </Text>
                    <Text style={{ color: '#C5C5A4'}}>{item.cost}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight: 'bold', color: '#DFDFBA'}}>Slots: </Text>
                    <Text style={{ color: '#C5C5A4'}}>{item.slots}</Text>
                </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#323228',
    borderRadius: 10,
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#636253'
  },
  image: {
    width: 150,
    height: 150,
    
  }
});