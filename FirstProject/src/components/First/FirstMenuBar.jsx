import { View, StyleSheet, Text } from 'react-native';
import BotonMenu from '../BotonMenu';

export const FirstMenuBar = ({ handleShowSecondScreen }) => {
  return (
    <View style={styles.content}>
      <BotonMenu
        icon={'home'}
        texto={'Home'}
        size={20}
        backgroundColor={'white'}
        color={'black'}
      />
      <BotonMenu
        icon={'wallet'}
        texto={'Wallet'}
        size={20}
        backgroundColor={'white'}
        color={'black'}
        handleShowSecondScreen={handleShowSecondScreen}
      />
      <BotonMenu
        icon={'chart-pie'}
        texto={'Chart'}
        size={20}
        backgroundColor={'white'}
        color={'black'}
      />
      <BotonMenu
        icon={'archive'}
        texto={'Settings'}
        size={20}
        backgroundColor={'white'}
        color={'black'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
