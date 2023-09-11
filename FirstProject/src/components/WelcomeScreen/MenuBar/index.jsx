import { View, StyleSheet, Text } from 'react-native';
import BotonGeneral from '../BotonGeneral';

export const MenuBar = ({}) => {
  return (
    <View style={styles.content}>
      <BotonGeneral
        icon={'home'}
        size={20}
        backgroundColor={'white'}
        color={'black'}
        circleSize={40}
      />
      <BotonGeneral
        icon={'table'}
        size={20}
        backgroundColor={'white'}
        color={'black'}
        circleSize={40}
      />
      <BotonGeneral
        icon={'calendar'}
        size={20}
        backgroundColor={'white'}
        color={'black'}
        circleSize={40}
      />
      <BotonGeneral
        icon={'profile'}
        size={20}
        backgroundColor={'white'}
        color={'black'}
        circleSize={40}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 0.2

  },
});