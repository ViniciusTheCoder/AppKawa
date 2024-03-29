import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Home_Customer(useLinkProps) {
    const [fontLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold
    });

    if (!fontLoaded) {
        return null;
    }


    return (
        <SafeAreaView>
            <View style={{
                padding: Spacing * 2,
            }}>
                <View style={{
                    alignItems: 'flex-start'
                }}>
                    <Text
                        style={{
                            fontFamily: fontLoaded ? 'Poppins_700Bold' : 'sans-serif',
                            fontSize: FontSize.xxLarge,
                            maxWidth: '60%'
                        }}
                    >Olá, <Text style={{ color: Colors.haevyPrimary }}>Furukawer</Text></Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing * 3
                    }}
                >

                    <Text style={{ fontFamily: fontLoaded ? 'Poppins_400Regular' : 'sans-serif', fontSize: FontSize.medium, }}>Solicite e acompanhe o GreenIT!</Text>

                </View>

                <View
                    style={{
                        marginVertical: Spacing
                    }}
                >

                    <View
                        style={{
                            flexDirection: 'row',
                            borderRadius: 40,
                            alignItems: 'center',
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            height: 50,
                            backgroundColor: Colors.onPrimary,
                            shadowColor: Colors.shadowBox,
                            shadowOffset: {
                                width: 0,
                                height: Spacing
                            },
                            shadowOpacity: 0.3,
                            shadowOpacity: Spacing
                        }}
                    >
                        <AntDesign name="search1" size={24} color="black" />
                        <Text style={{ color: Colors.darkText, paddingLeft: 10, fontSize: 18 }}>Pesquisar</Text>
                    </View>

                    <View
                        style={{
                            marginVertical: Spacing * 5
                        }}
                    >

                        <View>
                            <Text style={{ paddingLeft: 10, fontSize: 18, fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif' }}>Recomendados</Text>

                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                padding: Spacing,
                                justifyContent: 'center'
                            }}
                        >
                            <View
                                style={{
                                    padding: Spacing,
                                    margin: Spacing,
                                    backgroundColor: Colors.haevyPrimary,
                                    borderRadius: 60
                                }}
                            >
                                <TouchableOpacity onPress={() => useLinkProps.navigation.navigate('GreenIT_Request')}>
                                    <Entypo name="leaf" size={55} color="white" />
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    padding: Spacing,
                                    margin: Spacing,
                                    backgroundColor: Colors.haevyPrimary,
                                    borderRadius: 60
                                }}
                            >
                                <TouchableOpacity onPress={() => useLinkProps.navigation.navigate('GreenIT')}>
                                    <FontAwesome name="truck" size={55} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View
                            style={{
                                marginVertical: Spacing
                            }}
                        >
                            <Text style={{ paddingLeft: 10, fontSize: 18, fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif' }}>Últimas notícias</Text>

                            <View style={{
                backgroundColor: "white",
                borderRadius: 16,
                borderWidth: 2,
                padding: 16,
                margin: 16,
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
                height: Spacing * 25,
                borderColor: Colors.haevyPrimary
            }}>

                <Text
                    style={{
                        fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif',
                        fontSize: 16
                    }}
                >
                    A importância do cadastro de Redes FTTX Fidedigno e Atualizado: Base para uma Infraestutura de Comunicação Eficiente
                </Text>

                <Text
                    style={{
                        fontFamily: fontLoaded ? 'Poppins_400Regular' : 'sans-serif',
                        fontSize: 15
                    }}
                >
                    Clique na imagem para ler a notícia na íntegra
                </Text>

                 <View
                 style={{
                    alignItems: 'center'
                 }}
                 >
                <TouchableOpacity onPress={() => Linking.openURL('https://furukawasolutions.com/pt-br/n/a-importancia-do-cadastro-de-redes-fttx-fidedigno-e-atualizado-base-para-uma-infraestrutura-de-comunicacao-eficiente/')}>
                <Entypo name="newsletter" size={100} color="black" />
                </TouchableOpacity>
                </View>   
            </View>

                        </View>
                    </View>

                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});