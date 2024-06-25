import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';

const EventosScreen = () => {
  const [expandedEventoId, setExpandedEventoId] = useState(null);
  
  const eventos = [
    {
      id: '1',
      titulo: 'Furukawa Summit 2024',
      descricao: 'Uma tradição no setor há mais de 15 anos, a edição 2024 do Summit Furukawa possui em sua programação mais de uma dezena de palestras exclusivas. Promovido pela Furukawa Electric LatAm, multinacional líder no fornecimento de soluções de infraestrutura de rede, a expectativa é que estejam presentes mais de 500 profissionais para aprender, ensinar e desenvolver novas ideias. ',
      data: '20/05/2024',
      local: 'São Paulo',
      url: 'https://www.google.com'
    },
    {
      id: '2',
      titulo: 'Tech Talk Thai 2024',
      descricao: 'No dia 25 de julho, a Furukawa Electric participará do Tech Talk Thai 2024, o maior evento anual de tecnologia na Tailândia, reafirmando seu compromisso com a inovação e a liderança no setor de infraestrutura de rede.',
      data: '25/07/2024',
      local: 'Tailândia',
      url: 'https://www.google.com'
    },
    {
      id: '3',
      titulo: 'NETCOM 2024',
      descricao: 'O NETCOM 2024 é um dos eventos de telecomunicações imperdíveis para todos os profissionais de infraestrutura de rede e cabeamento. Em sua décima primeira edição, o encontro acontecerá de 5 a 7 de agosto de 2024, no Expo Center Norte, em São Paulo.',
      data: '05/08/2024',
      local: 'São Paulo',
      url: 'https://www.google.com'
    },
    {
      id: '4',
      titulo: 'Telco Transformation LATAM',
      descricao: 'O Telco Transformation LATAM é um evento fundamental para explorar como o 5G está redefinindo a indústria de telecomunicações na América Latina.',
      data: '20/08/2024',
      local: 'São Paulo',
      url: 'https://www.google.com'
    },
  ];

  const renderEvento = ({ item }) => {
    const isExpanded = expandedEventoId === item.id;

    return (
      
      <TouchableOpacity
        style={[styles.eventoBox, { marginBottom: isExpanded ? 20 : 10 }]}
        onPress={() => setExpandedEventoId(isExpanded ? null : item.id)}
      >
        <Text style={styles.eventoTitulo}>{item.titulo}</Text>
        {!isExpanded && (
          <Text numberOfLines={2} style={styles.eventoDescricao}>
            {item.descricao}
          </Text>
        )}
        {isExpanded && (
          <View style={styles.expandedContent}>
            <Text style={styles.eventoData}>Data: {item.data}</Text>
            <Text style={styles.eventoLocal}>Local: {item.local}</Text>
            <Text style={styles.eventoDescricao}>{item.descricao}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
              <Text style={styles.linkText}>Clique aqui para mais detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={eventos}
        renderItem={renderEvento}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  flatList: {
    paddingBottom: 20,
  },
  eventoBox: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3,
  },
  eventoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'blue'
  },
  eventoDescricao: {
    fontSize: 14,
    color: '#666',
  },
  expandedContent: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  eventoData: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  eventoLocal: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  eventoBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  eventoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  eventoDescricao: {
    fontSize: 16,
    color: '#666',
  },
});

export default EventosScreen;
