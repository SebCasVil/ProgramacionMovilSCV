import{View, StyleSheet} from 'react-native';
import { FirstHeader } from '../components/First/FirstHeader';
import { FirstBody } from '../components/First/FirstBody';

export default function First() {
    return (
        <View style={styles.first}>
            <FirstHeader></FirstHeader>
            <FirstBody></FirstBody>
        </View>
    )
}

const styles = StyleSheet.create({
    first: {
        flex: 1,
        width: '100%'
    },
  });