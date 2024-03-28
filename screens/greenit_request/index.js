import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as DocumentPicker from 'expo-document-picker';

export default function GreenIT_Request(useLinkProps) {

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

    
    const pickSomething = async () => {
        try {
            const docRes = await DocumentPicker.getDocumentAsync({
                type: 'audio/*'
            });
            console.log(docRes)
        } catch (error) {
            console.log('Error while selecting file: ', error)
        }
    }

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
                padding: Spacing * 2,
                marginTop: Spacing * -2,
            }}>

                <View style={{
                    alignItems: 'center'
                }}>
                    <Text
                        style={{
                            fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif',
                            fontSize: FontSize.large,
                            maxWidth: '100%',
                            textAlign: 'left',
                            paddingRight: Spacing * 11
                        }}
                    >Participe do programa <Text style={{ color: Colors.borderWithOpacity, fontFamily: fontLoaded ? 'Poppins_700Bold' : 'sans-serif' }}> GreenIT</Text></Text>
                </View>

                <View>
                    <Text
                        style={{
                            fontFamily: fontLoaded ? 'Poppins_400Regular' : 'sans-serif',
                            fontSize: FontSize.medium,
                            maxWidth: '100%',
                            textAlign: 'left',
                            paddingRight: Spacing * 3,
                            marginLeft: 10
                        }}
                    >
                        O GreenIT é um programa sustentável criado pela Furukawa há 15 anos, com o objetivo de reciclar produtos inutilizados e recompensar o cliente com produtos novinhos!</Text>
                    <Text
                        style={{
                            fontFamily: fontLoaded ? 'Poppins_400Regular' : 'sans-serif',
                            fontSize: FontSize.medium,
                            maxWidth: '100%',
                            textAlign: 'left',
                            paddingRight: Spacing * 3,
                            marginLeft: 10
                        }}
                    >Para participar do programa, basta nos enviar a nota fiscal dos produtos que deseja reciclar</Text>
                </View>

                <View
                    style={{
                        marginVertical: Spacing * 5
                    }}
                >

                </View>

                <TouchableOpacity
                    onPress={pickSomething}
                    style={{
                        padding: Spacing * 2,
                        backgroundColor: Colors.onPrimary,
                        borderRadius: Spacing,
                        shadowColor: Colors.shadowBox,
                        shadowOffset: {
                            width: 0,
                            height: Spacing
                        },
                        shadowOpacity: 0.3,
                        shadowOpacity: Spacing
                    }}>
                    <Text
                        style={{
                            color: Colors.text,
                            textAlign: 'center',
                            fontSize: FontSize.large,
                            fontFamily: fontLoaded ? 'Poppins_700Bold' : 'sans-serif',
                        }}
                    >Anexar nota fiscal</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => useLinkProps.navigation.navigate('Register_Customer')}
                    style={{
                        padding: Spacing * 2,
                        backgroundColor: Colors.lightSecondary,
                        marginVertical: Spacing * 3,
                        borderRadius: Spacing,
                        shadowColor: Colors.shadowBox,
                        shadowOffset: {
                            width: 0,
                            height: Spacing
                        },
                        shadowOpacity: 0.3,
                        shadowOpacity: Spacing
                    }}>
                    <Text
                        style={{
                            color: Colors.background,
                            textAlign: 'center',
                            fontSize: FontSize.large,
                            fontFamily: fontLoaded ? 'Poppins_700Bold' : 'sans-serif',
                        }}
                    >Enviar Cadastro</Text>
                </TouchableOpacity>

                <View style={{
                    marginVertical: Spacing * 3
                }}>

                    <View
                        style={{
                            marginTop: Spacing,
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}
                    >

                    </View>

                </View>

            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'space-between',
                    paddingTop: Spacing * 13
                }}
            >
                <TouchableOpacity>
                    <FontAwesome name="user-plus" size={24} color={Colors.darkText} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="truck" size={24} color={Colors.darkText} onPress={() => useLinkProps.navigation.navigate('GreenIT')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="list" size={24} color={Colors.darkText} onPress={() => useLinkProps.navigation.navigate('Events_List')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({});