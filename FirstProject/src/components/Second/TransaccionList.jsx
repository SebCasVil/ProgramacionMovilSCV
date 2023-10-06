import { StyleSheet, FlatList, View, Text} from 'react-native';
import { Transactions } from '../../../assets';
import Transaccion from './Transaccion';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';


export default function TransaccionList() {
    const { theme } = useContext(AppContext);

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            backgroundColor: theme.second,
            padding: 20,
            borderRadius: 40,
            height: 300,
            marginTop: 20
        },
        });

  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
            <Text style={{fontSize: 20, color: theme.text2}}>Transactions</Text>
            <Text style={{fontSize: 15, color: 'gray'}}>See all</Text>
        </View>
        <FlatList
            data={Transactions}
            renderItem={({item: {date, name, value, isSend}}) => 
                <Transaccion date={date} name={name} value={value} isSend={isSend} />
            }
            keyExtractor={(item) => item.id}
            style={{height: 150}}
        />
    </View>
  );
}

