import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const BotonMenu = ({
  icon,
  texto,
  size,
  color,
  backgroundColor,
  handleShowSecondScreen = () => {},
}) => {
  return (
    <TouchableOpacity onPress={(e) => handleShowSecondScreen(e)}>
      <View style={[styles.container, backgroundColor]}>
        <FontAwesome5 name={icon} size={size} color={color} />
        <Text>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center',
    borderRadius: 50,
  },
});

export default BotonMenu;
