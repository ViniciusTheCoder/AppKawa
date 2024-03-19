import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Spacing from '../../constants/Spacing';
import Colors from '../../constants/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function GreenIT(useLinkProps) {

    const [fontLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold
    });

    if (!fontLoaded) {
        return null;
    }

    const navigateToLogin = () => {
        useLinkProps.navigation.navigate('Login');
    };

    const handleLogout = () => {
        Alert.alert(
            'Você deseja sair?',
            '',
            [
                {
                    text: 'Sim',
                    onPress: navigateToLogin,
                },
                {
                    text: 'Não',
                    onPress: () => { },
                },
            ],
            { cancelable: false },
        );
    };

    return (
        <SafeAreaView>
            <View
                style={{
                    marginTop: Spacing,
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}
            >
                <TouchableOpacity
                    onPress={handleLogout}
                    style={{
                        padding: Spacing,
                        backgroundColor: Colors.gray,
                        borderRadius: Spacing / 2,
                        marginHorizontal: Spacing
                    }}
                >
                    <MaterialIcons name='logout' color={Colors.text} size={Spacing * 2} />
                </TouchableOpacity>
            </View>

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
                        marginBottom: Spacing,
                        fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif',
                        fontSize: 20
                    }}
                >
                    Destino: Rua Cajá-Manga
                </Text>

                <Text
                    style={{
                        fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif',
                        marginBottom: Spacing,
                    }}>
                    CEP: 81150-140
                </Text>

                <View
                    style={{
                        borderWidth: 2,
                        padding: 16,
                        margin: 16,
                        shadowOffset: { width: 2, height: 2 },
                        shadowColor: "#333",
                        shadowOpacity: 0.3,
                        shadowRadius: 4,
                        borderColor: Colors.haevyPrimary,
                        backgroundColor: Colors.haevyPrimary,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >

                    <Text style={{
                        fontFamily: fontLoaded ? 'Poppins_700Bold' : 'sans-serif',
                        fontSize: 16
                    }}>75.000 - Valor em Crédito Verde</Text>

                </View>

                <Text
                    style={{
                        marginBottom: Spacing,
                        fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif',
                        fontSize: 17
                    }}
                >
                    Produto Reciclado: Cabo Óptico CFOA
                </Text>

                <Text
                    style={{
                        fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif',
                        marginBottom: Spacing,
                    }}>
                    Quantidade devolvida: 45.000 metros
                </Text>

            </View>

            <View
                style={{
                    padding: 16,
                    margin: 16,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >   
                <View>
                <Text 
                style={{                    
                fontFamily: fontLoaded ? 'Poppins_700Bold' : 'sans-serif',
                fontSize: 16
                }}
                >Histórico</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                <Text style={{
                    paddingRight: Spacing,
                    fontFamily: fontLoaded ? 'Poppins_700Bold' : 'sans-serif',
                    fontSize: 16
                }}> Detalhes</Text>
                <TouchableOpacity><AntDesign name="rightcircle" size={24} color="black" /></TouchableOpacity>
                </View>
            </View>

            <View style={{
                    marginTopTop: 20,
                    marginLeft: 25,
                    marginRight: 320,
                    backgroundColor: Colors.haevyPrimary,
                    height: Spacing * 6,
                    borderRadius: 30,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <FontAwesome5 name="truck" size={24} color={Colors.background} style={{marginLeft: 20, paddingTop: 18}}/>
                
                <Text
                style={{
                    marginLeft: 35,
                    width: 250,
                    fontFamily: fontLoaded ? 'Poppins_700Bold' : 'sans-serif',
                    marginTop: Spacing
                }}
                >Recolhido pela transportadora <Text style={{fontFamily: fontLoaded ? 'Poppins_400Regular': 'sans-serif'}}>Erechim, RS</Text></Text>
            </View>

            <View style={{backgroundColor: Colors.haevyPrimary, width: 2, marginLeft: 58, height: 60}}><Text></Text></View>

            <View style={{
                    marginTopTop: 20,
                    marginLeft: 25,
                    marginRight: 320,
                    backgroundColor: Colors.haevyPrimary,
                    height: Spacing * 6,
                    borderRadius: 30,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >   
                <MaterialIcons name="transit-enterexit" size={24} color={Colors.background} style={{marginLeft: 22, paddingTop: 18}}/>
                
                
                <Text
                style={{
                    marginLeft: 38,
                    width: 120,
                    fontFamily: fontLoaded ? 'Poppins_700Bold' : 'sans-serif',
                    marginTop: Spacing
                }}
                >Em trânsito <Text style={{fontFamily: fontLoaded ? 'Poppins_400Regular': 'sans-serif'}}>Florianópolis, SC</Text></Text>
            </View>

            <View style={{backgroundColor: Colors.haevyPrimary, width: 2, marginLeft: 58, height: 60}}><Text></Text></View>

            <View style={{
                    marginTopTop: 20,
                    marginLeft: 25,
                    marginRight: 320,
                    backgroundColor: Colors.haevyPrimary,
                    height: Spacing * 6,
                    borderRadius: 30,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <FontAwesome5 name="box" size={24} color={Colors.background} style={{marginLeft: 22, paddingTop: 18}}/>
                
                <Text
                style={{
                    marginLeft: 38,
                    width: 200,
                    fontFamily: fontLoaded ? 'Poppins_700Bold' : 'sans-serif',
                    marginTop: Spacing
                }}
                >Entregue ao destinatário <Text style={{fontFamily: fontLoaded ? 'Poppins_400Regular': 'sans-serif'}}>Curitiba, PR</Text></Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'space-between',
                    paddingTop: Spacing * 5,
                }}
            >
                <TouchableOpacity>
                    <FontAwesome name="user-plus" size={24} color={Colors.darkText} onPress={() => useLinkProps.navigation.navigate('Register_Customer')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="truck" size={24} color={Colors.haevyPrimary} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({});