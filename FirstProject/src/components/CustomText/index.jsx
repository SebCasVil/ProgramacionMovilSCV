import { Text } from "react-native";

export const CustomText = ({text, fontSize, fontWeight, color, fontStyle, textAlign, letterSpacing, lineHeight,textDecorationLine}) => {
    return(
        <Text style={{fontSize, color, fontWeight, fontStyle, textAlign, letterSpacing, lineHeight, textDecorationLine}}>{text}</Text>
    );
}