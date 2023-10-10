import {StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CardScroll from '../components/CardScroll';
import HeaderButton from '../components/HeaderButton';




export default function HomeScreen({route}) {
  const navigation = useNavigation()
  const {navigate} = useNavigation()

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
      <View style={styles.container}> 

        <View style={{width: '80%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={styles.icon} onPress={openDrawer}>
                <MaterialCommunityIcons name="menu-open" size={20} color="#20B0B0" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
                <MaterialCommunityIcons name="bell-alert-outline" size={20} color="#20B0B0" />
            </TouchableOpacity>
        </View>

        <View style={{width: '80%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>Store for fast food & etc.</Text>
        </View>

        <View style={styles.input}>
            <View style={{flexDirection: 'row'}}>
                <Feather name="search" size={20} color="#20B0B0" />
                <TextInput
                    placeholder='Search'
                    style={{width: '80%'}}
                />
            </View>
            <TouchableOpacity>
                <MaterialIcons name="restaurant-menu" size={20} color="black" />
            </TouchableOpacity> 
        </View>
        
        <CardScroll/>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    marginTop: 50
  },
  icon: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  input: {
    flexDirection: 'row',
    borderRadius: 5,
    padding: 15,
    height: 50, 
    width: '80%',
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  login: {
    backgroundColor: '#20B0B0',
    borderRadius: 50,
    paddingHorizontal: 120,
    paddingVertical: 15
    },
});