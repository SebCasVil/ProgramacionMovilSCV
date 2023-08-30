import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from "react-native";
import { THEME } from "../../theme/colors";
import { facebookImage } from "../../../assets";
import { googleImage } from "../../../assets";

export const LoginContent = () => {
    return(
     <View style={styles.content}>
        <View style={styles.form}>
            <TextInput style={styles.textInput} placeholder= "Introduce texto"></TextInput>
            <TextInput style={styles.textInput} placeholder= "Introduce contraseña"></TextInput>
            <Text style={styles.forgor}>Forgot Password?</Text>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', gap: 20}}>
            <View style={styles.line}></View>
            <Text style={{fontWeight:'bold'}}> Or login with</Text>
            <View style={styles.line}></View>
        </View>
        <View style={styles.botonera}>
            <TouchableOpacity style={styles.iconButton}>
                <Image style={styles.image} source={googleImage}></Image>
                <Text>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
                <Image style={styles.image} source={facebookImage}></Image>
                <Text>Facebook</Text>
            </TouchableOpacity>
        </View>
     </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 0.8,
        backgroundColor: THEME.COLORS.PURPLE.LIGHT,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    form:{
        gap: 20,
    },
    textInput:{
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 20,
        height: 60,
    },
    forgor:{
        color: 'blue',
        padding: 10,
        textAlign: 'right'
    },
    button:{
        backgroundColor: THEME.COLORS.PURPLE.DARK,
        borderRadius: 10,
        height: 60,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText:{
        fontSize: 19,
        fontWeight: 'bold',
    },
    botonera: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    line:{
        borderBottomWidth: 1,
        flex: 1,
        borderColor: 'gray',
        paddingBottom: 8

    },
    image:{
        height: 20,
        width: 20
    },
    iconButton:{
        borderWidth: 1,
        borderColor: 'gray',
    }
  });

