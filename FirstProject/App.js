import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './src/screens/Inicio';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';

export default function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };
  return (
    showSignIn ? ( <SignIn setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp}/>) : showSignUp ? (<SignUp setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp}/>) : (<Inicio handleSignInClick={handleSignInClick} handleSignUpClick={handleSignUpClick}/>)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D76741',
    // paddingTop: Constants.statusBarHeight,
    alignItems: 'start',
    justifyContent: 'center',
  },
});