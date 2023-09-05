import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import ColumnText from '../ColumnText';

const Coin = ({ nombre, porcentaje, icon, backgroundColor, cantidad, precio }) => {
  return (
    <View style={{borderRadius:20}}>
      <View style={styles.container}>
        <View style={[styles.iconContainer, { backgroundColor }]}>
          <FontAwesome5 name={icon} size={40} color="#ffffff" />
        </View>
        <View style={styles.clmnContainer}>
            <ColumnText text1={nombre} text2={porcentaje}/>
            <ColumnText text1={cantidad} text2={precio}/>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 55, 
    height: 55, 
    borderRadius: 27.5, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  clmnContainer:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  }
});

export default Coin;