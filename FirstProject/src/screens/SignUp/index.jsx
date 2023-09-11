import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import BotonNaranja from '../../components/General/BotonNaranja';
import { AntDesign } from '@expo/vector-icons';

export default function SignUp({setShowSignIn, setShowSignUp}) {
    
    const handleGoBack = () => {
        setShowSignIn(false);
        setShowSignUp(false);
        };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={{justifyContent: 'flex-start', width: '100%'}}>
                <TouchableOpacity onPress={handleGoBack}>
                    <AntDesign name='arrowleft' size={24} color='black' />
                </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'flex-start', width: '100%'}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Create a new account</Text>
                <View style={{backgroundColor:'#FF9136', height: 8, width: 30, borderRadius: 20}}></View>
            </View>
            <View>
                <Text style={styles.textInput}>Full name</Text>
                <TextInput style={styles.input} placeholder='Enter your name'></TextInput>
                <Text style={styles.textInput}>Email address</Text>
                <TextInput style={styles.input} placeholder='name@example.com'></TextInput>
                <Text style={styles.textInput}>Create password</Text>
                <TextInput style={styles.input} placeholder='Enter your password'></TextInput>
            </View>
            <BotonNaranja text={"Sign Up!"}/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 30
  },
  textInput:{
    fontWeight: 'bold'
  },
  input:{
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'gray',
    borderBottomWidth: 0.5,
    marginBottom: 20
  },
});