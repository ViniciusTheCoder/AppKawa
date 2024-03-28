import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppTextInput from '../../components/AppTextInput';

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
                            fontSize: FontSize.medium,
                            maxWidth: '100%',
                            textAlign: 'left',
                            paddingRight: Spacing * 10
                        }}
                    >Participe do programa <Text style={{ color: Colors.borderWithOpacity, fontFamily: fontLoaded ? 'Poppins_700Bold' : 'sans-serif' }}> GreenIT</Text></Text>
                </View>

                <View>
                    <Text
                        style={{
                            fontFamily: fontLoaded ? 'Poppins_400Regular' : 'sans-serif',
                            fontSize: FontSize.small,
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
                            fontSize: FontSize.small,
                            maxWidth: '100%',
                            textAlign: 'left',
                            paddingRight: Spacing * 3,
                            marginLeft: 10
                        }}
                    >Para participar do programa, basta nos enviar a nota fiscal dos produtos que deseja reciclar</Text>
                </View>

                <View
                    style={{
                        marginVertical: Spacing
                    }}
                >

                    <AppTextInput placeholder='Nome' />
                    <AppTextInput placeholder='Telefone' />
                    <AppTextInput placeholder='CNPJ' />
                    <AppTextInput placeholder='Razão Social' />
                    <AppTextInput placeholder='E-mail' />

                </View>

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
                    >Cadastrar Lead</Text>
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
                    paddingTop: Spacing * 2
                }}
            >
                <TouchableOpacity>
                    <FontAwesome name="user-plus" size={24} color={Colors.haevyPrimary} />
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