import { View, StyleSheet, Text} from "react-native"
import { Ionicons } from '@expo/vector-icons';
export const FirstHeader = () =>{
    return(
        <View style={styles.content}>
            <View style={styles.uno}>
                <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFEDDF'}}>Wallet</Text>
                <View style={{flexDirection: 'row', gap: 10}}>
                    <Ionicons name="notifications" size={24} color="black" />
                    <Ionicons name="person" size={24} color="black" />
                </View>
            </View>
            <Text style={{fontSize: 50, fontWeight: 'bold', color: '#FFEDDF'}}>$23,867</Text>
            <View style={{flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Wallet id: 2678900085</Text>
                <Ionicons name="copy-outline" size={24} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 0.4,
        backgroundColor: '#E76500',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    uno:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        width: '100%'

    }
  });