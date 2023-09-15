import { StyleSheet, FlatList, View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { IMAGE } from '../../../constants';

export default function MenuHeader() {
  return (
        <View style={styles.headerContainer}>
            <View style={styles.headerContent}>
                <Image style={styles.headerImage} source={{ uri: IMAGE}}/>
                <Text style={{fontWeight: 'bold'}}>Hey Alireza 👍</Text>
            </View>
        
            <View style={styles.headerContent}>
                <TouchableOpacity>
                    <AntDesign name="search1" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="home" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
},
headerImage:{
    width: 50,
    height: 50,
    borderRadius: 50
},
headerContent:
{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10},

});