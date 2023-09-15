import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { COLORS, IMAGE } from '../../../constants';

export default function CenterBar() {
  return (
        <View style={styles.container}>
        <TouchableOpacity>
            <View style={styles.dos}>
                <Text>All</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.dos}>
                <Text>Group</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.dos}>
                <Text>Chat</Text>
            </View>
        </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
    container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.gray,
    height: 50,
    borderRadius: 25,
    gap: 5,
    padding: 10
    },
    dos:{
        backgroundColor: 'white',
        height: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100
    }

});