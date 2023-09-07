import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BotonGeneral = ({ icon, size, color, backgroundColor, circleSize}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={[styles.iconContainer, { backgroundColor, width:circleSize, height:circleSize, borderRadius:circleSize/2 }]}>
          <Ionicons name={icon} size={size} color={color} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 50
  },
  iconContainer: {
    width: 55, 
    height: 55, 
    borderRadius: 27.5, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
});

export default BotonGeneral;