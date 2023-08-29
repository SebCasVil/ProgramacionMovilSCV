import { Text, StyleSheet, View, TextInput, Button } from "react-native";
export const LoginContent = () => {
    return(
     <View style={styles.content}>
        <TextInput style={styles.textInput} placeholder= "Introduce texto"></TextInput>
        <TextInput style={styles.textInput} placeholder= "Introduce contraseña"></TextInput>
        <Text style={styles.forgor}>Forgot Password?</Text>
        <Button title="Login"></Button>
        <View style={styles.botonera}>
            <Button title="Google"></Button>
            <Button title="Facebook"></Button>
        </View>
     </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 0.8,
        backgroundColor: '#EBE7F8',
    },
    botonera: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    textInput:{
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    forgor:{
        color: 'blue',
        padding: 10,
        textAlign: 'right'

    }
  });

