import React , { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, StatusBar, ScrollView, Image, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {
  const funcionalidades = [
    { id: '1', nome: 'Cadastro de Leads', color: '#FF474C', screen: 'CadastroCliente'},
    { id: '2', nome: 'Programa GreenIT', color: '#90ee90', screen: 'GreenIT' },
    { id: '3', nome: 'Próximos Eventos', color: '#ff0266', screen: 'Eventos'},
    /*{ id: '4', nome: 'Acompanhamento Pedido', color: '#ff5722' },*/
  ];

  const smallBoxes = [
    { id: '1', nome: 'Box 1', iconName: 'youtube', color: '#FF474C' , url:'https://www.youtube.com/c/FurukawaElectricLatAm'},
    { id: '2', nome: 'Box 2', iconName: 'facebook', color: '#FF474C', url:'https://www.facebook.com/furukawasolutions.pt/' },
    { id: '3', nome: 'Box 3', iconName: 'instagram', color: '#FF474C', url:'https://www.instagram.com/furukawasolutions_pt/' },
    { id: '4', nome: 'Box 4', iconName: 'linkedin', color: '#FF474C', url:'https://www.linkedin.com/company/furukawa' },
  ];

  const [expandedNoticiaId, setExpandedNoticiaId] = useState(null);

  const noticias = [
    { id: '1', titulo: 'Notícia 1', descricao: 'Furukawa 50 anos!', imagem: require('../../assets/noticia1.jpg'), detalhes: 'Furukawa Electric Latam', url:'https://www.google.com'},
    { id: '2', titulo: 'Notícia 2', descricao: 'Novidade 2', imagem: require('../../assets/noticia2.jpg'), detalhes: 'Mais detalhes sobre a Notícia 2.', url:'https://www.google.com' },
    { id: '3', titulo: 'Notícia 3', descricao: 'Novidade 3', imagem: require('../../assets/noticia3.jpg'), detalhes: 'Mais detalhes sobre a Notícia 3.', url:'https://www.google.com' },
    { id: '4', titulo: 'Notícia 4', descricao: 'Novidade 4', imagem: require('../../assets/noticia4.jpg'), detalhes: 'Mais detalhes sobre a Notícia 4.', url:'https://www.google.com' },
    { id: '5', titulo: 'Notícia 5', descricao: 'Novidade 5.', imagem: require('../../assets/noticia5.jpg'), detalhes: 'Mais detalhes sobre a Notícia 5.', url:'https://www.google.com' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
    style={[styles.funcionalidadeBox, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Text style={styles.funcionalidadeText}>{item.nome}</Text>
    </TouchableOpacity>
  );

  const renderNoticia = ({ item }) => {
    const isExpanded = expandedNoticiaId === item.id;
  
    return (
      <TouchableOpacity
        style={[styles.noticiaBox, { marginBottom: isExpanded ? 20 : 10 }]}
        onPress={() => setExpandedNoticiaId(isExpanded ? null : item.id)}
      >
        <Text style={styles.noticiaTitulo}>{item.titulo}</Text>
        <Text style={styles.noticiaDescricao}>{item.descricao}</Text>
        {isExpanded && (
          <View style={styles.expandedContent}>
            <Image source={item.imagem} style={styles.noticiaImagem} resizeMode="contain" />
            <Text style={styles.noticiaDetalhes}>{item.detalhes}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
              <Text style={styles.linkText}>Clique aqui para mais detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}> 
        <Text style={styles.titleBlack}>Olá, </Text>
        <Text style={styles.titleRed}>Furukawer</Text>
      </Text>
      <Text style={styles.subTitle}>Escolha uma das funcionalidades abaixo:</Text>
      <FlatList
        data={funcionalidades}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
      />
      <Text style={styles.others}>Social</Text>
      <View style={styles.bigBox}>
        {smallBoxes.map((box) => (
          <TouchableOpacity
            key={box.id}
            style={[styles.smallBox, { backgroundColor: box.color }]}
            onPress={() => Linking.openURL(box.url)}
          >
            <Icon name={box.iconName} size={30} color="#fff" />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.noticiasTitulo}>Newsletter</Text>
      <FlatList
        data={noticias}
        renderItem={renderNoticia}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.noticiasList}
        onPress={() => Linking.openURL(item.url)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    fontWeight:'bold',
    marginBottom: 16,
    textAlign: 'left',
    fontWeight:'bold',
  },
  titleBlack: {
    color: '#000000',
  },
  titleRed: {
    color: '#FF0000',
  },
  subTitle: {
    fontSize: 20,
    fontWeight:'bold',
    marginBottom: 8,
    textAlign: 'left',
  },
  others:{
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'left',
  },
  flatList: {
    paddingVertical: 10,
  },
  funcionalidadeBox: {
    width: 150,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  funcionalidadeText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bigBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 0,
  },
  smallBox: {
    width: '20%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  smallBoxText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noticiasTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  noticiasTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  noticiasList: {
    paddingBottom: 20,
  },
  noticiaBox: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3,
  },
  noticiaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noticiaDescricao: {
    fontSize: 20,
    color: '#666',
    fontWeight: 'bold',
  },
  expandedContent: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  noticiaImagem: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  noticiaDetalhes: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  linkText: {
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
