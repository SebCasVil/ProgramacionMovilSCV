import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { THEME } from "../../theme/colors";

import { CustomButton } from "../custom/CustomButton";
import { facebookImage } from "../../../assets";
import { googleImage } from "../../../assets";


export const LoginContent = () => {
    return(
     <View style={styles.content}>
        <View style={styles.form}>
            <TextInput style={styles.textInput} placeholder= "Introduce usuario"></TextInput>
            <TextInput style={styles.textInput} placeholder= "Introduce contraseña"></TextInput>
            <Text style={styles.forgor}>Forgot Password?</Text>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', gap: 20, padding: 10}}>
            <View style={styles.line}></View>
            <Text style={{fontWeight:'bold'}}> Or login with</Text>
            <View style={styles.line}></View>
        </View>
        <View style={styles.botonera}>
            <CustomButton text='Google' image= {googleImage}></CustomButton>
            <CustomButton text='Google' image= {facebookImage}></CustomButton>
        </View>
        <View style={styles.final}>
            <Text>Don't have an account?</Text> 
            <Text style={{fontWeight:'bold', color: THEME.COLORS.PURPLE.DARK}}>Register</Text>
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
        color: THEME.COLORS.PURPLE.DARK,
        padding: 10,
        textAlign: 'right',
        fontWeight: 'bold'
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
        marginTop: 20, 
        padding: 10,
        gap: 30
    },
    line:{
        borderBottomWidth: 1,
        flex: 1,
        borderColor: 'gray',
        marginBottom: 8
    },
    final:{
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
  });

