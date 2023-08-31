import { Text, StyleSheet, View } from "react-native";
import { THEME } from "../../theme/colors";
export const LoginHeader = () => {
    return(
     <View style={styles.header}>
        <Text style={styles.titulo}>Sign up to your account</Text>
        <Text style={styles.subtitulo}>Sign up to your account</Text>
     </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 0.2,
        backgroundColor: THEME.COLORS.PURPLE.DARK,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: 20
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'white'
    },
    subtitulo: {
        fontSize: 14,
        color: 'white'
    }
  });

