import{Text, View, StyleSheet} from 'react-native';
import { LoginHeader } from '../components/Login/LoginHeader';
import { LoginContent } from '../components/Login/LoginContent';

export default function Login() {
    return (
        <View style={styles.login}>
        <LoginHeader/>
        <LoginContent/>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        width: '100%'
    },
  });