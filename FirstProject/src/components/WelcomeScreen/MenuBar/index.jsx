import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons ,AntDesign } from '@expo/vector-icons';
import BotonGeneral from '../BotonGeneral';
import { COLORS } from '../../../../constants';

export const MenuBar = ({}) => {
  return (
    <View style={styles.content}>
      <BotonGeneral
        icon={'home'}
        size={20}
        backgroundColor={'black'}
        color={'white'}
        circleSize={40}
      />
      <BotonGeneral
        icon={'table'}
        size={20}
        backgroundColor={COLORS.gray}
        color={'black'}
        circleSize={40}
      />
      <BotonGeneral
        icon={'calendar'}
        size={20}
        backgroundColor={COLORS.gray}
        color={'black'}
        circleSize={40}
      />
      <BotonGeneral
        icon={'profile'}
        size={20}
        backgroundColor={COLORS.gray}
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
    width: '100%',

  },  
  iconContainer: {
    width: 50, 
    height: 50, 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'black'
  },
});