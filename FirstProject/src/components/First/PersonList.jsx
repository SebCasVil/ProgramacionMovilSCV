import { StyleSheet, FlatList, View, Text} from 'react-native';
import Person from './Person';
import { Personas } from '../../../assets';
import { Feather } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';


export default function PersonList() {
    const { theme } = useContext(AppContext);

    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.first,
            padding: 20,
            borderRadius: 40,
            height: 300,
            marginTop: 20
        },
        });

  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
            <Text style={{fontSize: 20, color: theme.text}}>My contacts</Text>
            <Feather name="search" size={24} color={theme.text} />
        </View>
        <FlatList
            data={Personas}
            renderItem={({item: {name, image, account}}) => 
                <Person name={name} image={image} account={account} />
            }
            keyExtractor={(item) => item.id}
            style={{height: 150}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1F1F',
        padding: 20,
        borderRadius: 40,
        height: 300,
        marginTop: 20
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 80,
        borderRadius: 30,
        marginHorizontal: 2.5,
        backgroundColor: '#EAF984'
        },
    });
