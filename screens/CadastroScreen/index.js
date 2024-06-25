import React, { useState } from 'react';
import { View, StyleSheet, Text, StatusBar, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import firebase, { FIREBASE_AUTH } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const auth = FIREBASE_AUTH;
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation();

  const handleCadastro = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth,email,password);
      console.log(response)
      alert('Successful!')
    } catch (error){
      console.log(error);
      alert('Sign in failed'+ error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Registrar-se</Text>
      <TextInput
        label="Nome"
        value={nome}
        onChangeText={text => setNome(text)}
        style={[styles.input, styles.nomeInput]}
        autoCapitalize="none"
        keyboardType="default"
        theme={{ colors: { primary: 'red', underlineColor: 'transparent' } }}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={[styles.input, styles.emailInput]}
        autoCapitalize="none"
        keyboardType="email-address"
        theme={{ colors: { primary: 'red', underlineColor: 'transparent' } }}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={[styles.input, styles.passwordInput]}
        theme={{ colors: { primary: 'red'} }}
      />
      <TextInput
        label="Número"
        value={number}
        onChangeText={text => setNumber(text)}
        keyboardType="number-pad"
        maxLength={13}
        style={[styles.input, styles.numberInput]}
        theme={{ colors: { primary: 'red'} }}
      />
      <View style={styles.buttonContainer}>
      <Button
        mode="contained"
        onPress={handleCadastro}
        style={styles.button}
        theme={{ colors: { primary: 'red'} }}
      >
        Cadastrar
      </Button>
      <View style={{ width: 16 }}></View>
      <Button
          mode="contained"
          onPress={() => navigation.navigate('Login')}
          style={[styles.button, styles.registerButton]}
          theme={{ colors: { primary: 'red'} }}
        >
          Voltar
        </Button>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    fontWeight:'bold',
    marginBottom: 16,
    textAlign: 'center',
    fontWeight:'bold',
  },
  input: {
    marginBottom: 16,
    width: '100%',
    marginBottom: 16,
    fontWeight:'bold',
    borderRadius: 8,
    paddingHorizontal: 16
  },
  nomeInput: {
    backgroundColor: '#ffebee',
  },
  emailInput: {
    backgroundColor: '#ffebee',
  },
  passwordInput: {
    backgroundColor: '#ffebee',
  },
  numberInput: {
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
});

export default CadastroScreen;
