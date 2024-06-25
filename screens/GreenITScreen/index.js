import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as DocumentPicker from 'expo-document-picker';

const GreenITScreen = () => {

  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
  
  const criterios = [
    { id: '1', texto: 'Cabos de Redes Metálicas', aprovado: true },
    { id: '2', texto: 'Cabos Telefônicos', aprovado: true },
    { id: '3', texto: 'Cabos Elétricos', aprovado: true },
    { id: '4', texto: 'Cabos Coaxiais', aprovado: false },
    { id: '5', texto: 'Cabos CCA ou de Alumínio', aprovado: false },
    { id: '6', texto: 'Cabos de Fibra Óptica', aprovado: false },
  ];

  const pickSomething = async () => {
    try {
        console.log('fdkdsald')
        const docRes = await DocumentPicker.getDocumentAsync({
            type: 'audio/*'
        });
        console.log(docRes)
    } catch (error) {
        console.log('Error while selecting file: ', error)
    }
};

  const handleEnviar = () => {
    alert('Nota fiscal enviada com sucesso no seu e-mail!');
  };

  const renderCriterio = (criterio) => {
    return (
      <View key={criterio.id} style={styles.criterioContainer}>
        {criterio.aprovado ? (
          <Icon name="check-circle" size={20} color="green" style={styles.icon} />
        ) : (
          <Icon name="times-circle" size={20} color="red" style={styles.icon} />
        )}
        <Text style={styles.criterioText}>{criterio.texto}</Text>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.black}>Programa </Text>
        <Text style={styles.green}>GreenIT</Text>
        </Text>
      <Text style={styles.description}>
        O GreenIT é um programa sustentável criado pela Furukawa há 15 anos.
        Para participar do programa, anexe os documentos da nota fiscal e as imagens dos cabos que serão descartados.
        </Text>

      <Text style={styles.subtitle}>Critérios para Participação:</Text>
      <View style={styles.criteriosContainer}>
        {criterios.map((criterio) => renderCriterio(criterio))}
      </View>

      <TouchableOpacity style={styles.button} onPress={pickSomething}>
        <Text style={styles.buttonText}>Anexar Arquivo</Text>
      </TouchableOpacity>

      {arquivoSelecionado && (
        <View style={styles.arquivoContainer}>
          <Text style={styles.arquivoTexto}>Arquivo Selecionado:</Text>
          <Text>{arquivoSelecionado.name}</Text>
        </View>
      )}
      
      <TouchableOpacity style={[styles.button, { backgroundColor: '#4caf50' }]} onPress={handleEnviar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    title: {
      fontSize: 34,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    black:{
      color:'black'
    },
    green:{
      color:'#4caf50'
    },
    description: {
      fontSize: 18,
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    criteriosContainer: {
        marginBottom: 20,
      },
      criterioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      icon: {
        marginRight: 10,
      },
      criterioText: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
      },
    button: {
      backgroundColor: '#2196f3',
      borderRadius: 8,
      paddingVertical: 12,
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    arquivoContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginTop: 10,
      },
      arquivoTexto: {
        fontWeight: 'bold',
        marginBottom: 5,
      },
  });

export default GreenITScreen;
