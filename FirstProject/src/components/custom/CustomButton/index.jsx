import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
export const CustomButton = ({image, text}) => {
    return(
        <TouchableOpacity style={styles.iconButton}>
            <Image style={styles.image} source={image}></Image>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        alignItems: 'center', 
        paddingHorizontal: 25, 
        paddingVertical: 15,
        backgroundColor: 'white'
    },
    image: {
        height: 20,
        width: 20,
        marginRight: 10, 
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
    }
});
