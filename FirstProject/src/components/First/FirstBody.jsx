import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import Coin from '../Coin';
import { FirstMenuBar } from './FirstMenuBar';
import { DATA } from '../../constants/Bitcoin';

export const FirstBody = ({ secondScreenShow, handleShowSecondScreen }) => {
  return (
    <View style={styles.content}>
      <View style={styles.lista}>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tabActive, { backgroundColor: 'white' }]}
          >
            <Text>My Assets</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabActive}>
            <Text>My Transactions</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          renderItem={({
            item: {
              nombre,
              porcentaje,
              icon,
              backgroundColor,
              precio,
              cantidad,
            },
            index,
          }) => (
            <Coin
              nombre={nombre}
              porcentaje={porcentaje}
              icon={icon}
              backgroundColor={backgroundColor}
              cantidad={cantidad}
              precio={precio}
            />
          )}
          keyExtractor={({ id }) => id.toString()} // Asegúrate de convertir el ID a una cadena
          style={{ height: 300 }}
        />
        <View style={{ borderBottomWidth: 1, borderColor: 'gray' }}></View>
        <FirstMenuBar
          secondScreenShow={secondScreenShow}
          handleShowSecondScreen={handleShowSecondScreen}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 0.6,
    // backgroundColor: '#E1651B',
    padding: 5,
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  lista: {
    borderRadius: 20,
  },
  tabs: {
    width: '100%',
    flexDirection: 'row',
  },
  tabActive: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    width: '50%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: -10,
  },
});
