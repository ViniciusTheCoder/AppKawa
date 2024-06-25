import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import firebase, { FIREBASE_AUTH, FIREBASE_APP } from '../../firebaseConfig';
import { signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { getDatabase, ref, child, get, set, update, remove } from 'firebase/database';
import { collection, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcB_PDi3H9nhn4g3ClcFJuGG4GlfjSvwQ",
  authDomain: "my-project-c36fd.firebaseapp.com",
  projectId: "my-project-c36fd",
  storageBucket: "my-project-c36fd.appspot.com",
  messagingSenderId: "713822271449",
  appId: "1:713822271449:web:784ee1d632070d381f8bc8",
  measurementId: "G-67QVT6QJDH"
};

const db = getDatabase(FIREBASE_APP);

const CadastroClienteScreen = () => {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [email, setEmail] = useState('');
  const auth = FIREBASE_AUTH;
  const reference = ref(db, 'users/'+cnpj);

  const handleSave = () => {

    set(reference, {
        username: nome,
        telefone: telefone,
        cnpj: cnpj,
        razaoSocial: razaoSocial,
        email: email,
    });
    alert('Dados adicionados com sucesso!');
}

  const handleQuery = () => {
    const referenceQuery = ref(db, 'users/');
    const q = query(referenceQuery);
  };

  useEffect(() => {
    handleQuery();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}> 
        <Text style={styles.title}>Cadastro de Cliente no </Text>
        <Text style={styles.salesforce}>Salesforce</Text>
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      
      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Razão Social"
        value={razaoSocial}
        onChangeText={setRazaoSocial}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  salesforce: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'blue'
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#ffebee',
  },
  button: {
    height: 50,
    borderRadius: 8,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CadastroClienteScreen;
