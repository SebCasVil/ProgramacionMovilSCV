import { Text, StyleSheet } from "react-native";

// EN lugar de obtener (props) podemos obtener directamente la característica .text de props con ({text})
export const StyledText = ({text, fontSize, fontWeight, color}) => {
    return(
        <Text style={{fontSize, color, fontWeight}}>{text}</Text>

    );
}

// const styles = StyleSheet.create({
//     bold: {
//         fontWeight: 'bold',
//     }
// })