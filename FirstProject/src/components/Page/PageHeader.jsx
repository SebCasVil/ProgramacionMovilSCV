import { Text, StyleSheet, View, Image } from "react-native";
import { googleImage } from "../../../assets";
export const PageHeader = () => {
    return(
     <View style={styles.header}>
        <View style={styles.user}>
            <Image style={styles.image} source={googleImage}></Image>
            <Text style={styles.titulo}>Morning.<Text style={styles.subtitulo}>Imran</Text></Text>
        </View>
        <Image style={styles.menu}></Image>
     </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 0.1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        flexDirection: "row",
        gap: 20,
        paddingTop: 50
    },user: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 20,
    },
    image: {
        height: 70,
        width: 70,
        backgroundColor: 'aliceblue',
        borderRadius: 50
    },menu:{
        height: 30,
        width: 30,
        backgroundColor: 'aliceblue',
        borderRadius: 10
    },
    titulo: {
        fontSize: 20,
        marginBottom: 8,
        color: 'white'
    },
    subtitulo: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }
  });

