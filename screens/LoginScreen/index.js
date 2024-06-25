import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, StatusBar, TouchableOpacity, Alert} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import firebase, { FIREBASE_AUTH } from '../../firebaseConfig';
import { signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBcB_PDi3H9nhn4g3ClcFJuGG4GlfjSvwQ",
  authDomain: "my-project-c36fd.firebaseapp.com",
  projectId: "my-project-c36fd",
  storageBucket: "my-project-c36fd.appspot.com",
  messagingSenderId: "713822271449",
  appId: "1:713822271449:web:784ee1d632070d381f8bc8",
  measurementId: "G-67QVT6QJDH"
};


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth,email,password);
      console.log(response)
      navigation.navigate('Home')
    } catch (error){
      console.log(error);
      alert('Sign in failed'+ error.message);
    } finally {
      setLoading(false);
    }
  };


  const handleForgotPassword = () => {
    console.log('Esqueci minha senha');
  };

  const handleRegister = () => {
    navigation.navigate('CadastroScreen');
    console.log('Redirecionando para a tela de cadastro');
  };

  return (
    <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text style={styles.title}> 
      <Text style={styles.titleBlack}>APP</Text>
      <Text style={styles.titleRed}>Kawa</Text>
    </Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={[styles.input, styles.emailInput]}
        autoCapitalize="none"
        keyboardType="email-address"
        theme={{ colors: { primary: 'red'} }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={[styles.input, styles.passwordInput]}
        theme={{ colors: { primary: 'red'} }}
      />
      <View style={styles.buttonContainer}>
      <Button 
        mode="contained" 
        onPress={handleLogin}
        style={[styles.button, styles.loginButton]} 
        theme={{ colors: { primary: 'red' } }}>
        Login
      </Button>
      <View style={{ width: 16 }}></View>
      <Button
          mode="contained"
          onPress={() => navigation.navigate('Cadastro')}
          style={[styles.button, styles.registerButton]}
          theme={{ colors: { primary: 'red'} }}
        >
          Cadastrar
        </Button>
        </View>
      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight:'bold',
    marginBottom: 16,
    textAlign: 'center',
    fontWeight:'bold',
  },
  titleBlack: {
    color: '#000000',
  },
  titleRed: {
    color: '#FF0000',
  },
  input: {
    marginBottom: 16,
    fontWeight:'bold',
    width: '100%',
  },
  emailInput: {
    backgroundColor: '#ffebee',
  },
  passwordInput: {
    backgroundColor: '#ffebee',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 16,
  },
  button: {
    width: '40%',
    borderRadius: 8,
  },
  loginButton: {
    backgroundColor: 'red',
  },
  registerButton: {
    borderColor: 'red',
  },
  forgotPasswordText: {
    color: 'red',
    marginTop: 8,
    fontWeight:'bold',
  },
});

export default LoginScreen;
