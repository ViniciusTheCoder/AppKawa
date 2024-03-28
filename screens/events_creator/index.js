import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Spacing from '../../constants/Spacing';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppTextInput from '../../components/AppTextInput';

export default function Events_Creator(useLinkProps) {

    const [fontLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold,
      });
      
      const [languages, setLanguages] = useState([]);
      
      useEffect(() => {
        setLanguages([]); 
      }, []);
      
      const options = [
        'Nome',
        'Sobrenome',
        'Razão Social',
        'CNPJ',
        'E-mail',
        'Telefone',
        'Orçamento',
        'Produtos',
      ];

      function pickBox(selectedLanguage) {
        
        if(languages.includes(selectedLanguage)) {
            setLanguages(languages.filter(Language => Language !== selectedLanguage))
            return;
        }

        setLanguages(Languages => Languages.concat(selectedLanguage))
    
    }

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
                            paddingRight: Spacing * 20
                        }}
                    >Cadastre o evento</Text>
                </View>

                <View
                    style={{
                        marginVertical: Spacing * 3,                        
                        marginTop: Spacing,
                    }}
                >

                    <AppTextInput placeholder='Nome do Evento' />
                    <AppTextInput placeholder='Local do evento' />
                    <AppTextInput placeholder='Data do evento' />
                    <AppTextInput placeholder='Equipe responsavel pelo evento' />

                </View>

                <View>  
                    <Text                    
                    style={{
                    fontSize: FontSize.medium,
                    fontFamily: fontLoaded ? 'Poppins_700Bold' : 'sans-serif'
                    }}>Selecione os campos do formulário</Text>
                <View
                style={{
                    padding: Spacing
                }}
                >
                    {options.map(option => 
                        <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        >
                            <TouchableOpacity onPress={() => pickBox(option)}
                            style={{
                                width: 25,
                                height: 20,
                                borderWidth: 2,
                                padding: Spacing,
                                margin: 2,
                                marginRight: 7,
                                borderColor: Colors.darkText
                            }}
                            >
                                { languages.includes(option) && (<Text style={{alignSelf: 'center'}}>✔️</Text>)}
                            </TouchableOpacity>
                            <Text>{option}</Text>
                        </View>
                        )}
                </View>
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
                    >Cadastrar Evento</Text>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({});