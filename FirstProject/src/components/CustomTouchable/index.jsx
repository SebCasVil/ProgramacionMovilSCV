import { TouchableHighlight, Text } from "react-native";

export const CustomTouchable = ({ borderRadius, contenido, onPress, fontSize, color, padding, borderWidth, borderColor, underlayColor   }) => {
  return (
    <TouchableHighlight underlayColor={underlayColor} onPress={onPress} style={{ borderRadius, padding, borderWidth, borderColor }}>
      <Text style={{fontSize, color}}>{contenido}</Text>
    </TouchableHighlight>
  );
};