import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Spacing from '../../constants/Spacing';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function Events_List(useLinkProps) {

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

    const handleDeleteEvent = () => {
        Alert.alert(
          'Você deseja deletar este evento?',
          '',
          [
            {
              text: 'Sim',
              onPress: () => {
                const viewToRemove = findViewById('event-ABRINT-2024');
      
                
                viewToRemove.remove();
              },
            },
            {
              text: 'Não',
              onPress: () => {},
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
                    alignItems: 'center'
                }}>
                    <Text
                        style={{
                            fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif',
                            fontSize: FontSize.large,
                            maxWidth: '100%',
                            textAlign: 'left',
                            paddingRight: Spacing * 8
                        }}
                    >Confira a lista de eventos <Text style={{ color: Colors.haevyPrimary, fontFamily: fontLoaded ? 'Poppins_700Bold' : 'sans-serif' }}>Furukawa</Text></Text>
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
                height: Spacing * 10,
                borderColor: Colors.haevyPrimary
            }}>

                <View key="event-ABRINT-2024"
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text
                        style={{
                            marginBottom: Spacing,
                            fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif',
                            fontSize: 18
                        }}
                    >
                        EVENTO NACIONAL ABRINT 2024 {'\n'}<Text style={{fontSize: FontSize.small}}>Local: Transamerica Expo Center</Text>
                    </Text>
                    
                    <TouchableOpacity onPress={handleDeleteEvent}>  
                    <Feather name="trash-2" size={20} color="black" />
                    <View
                    
                    style={{
                        padding: 10
                    }}
                    ></View>
                    <FontAwesome5 name="pencil-alt" size={20} color="black" />
                    </TouchableOpacity>  
                </View>

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
                height: Spacing * 10,
                borderColor: Colors.haevyPrimary
            }}>

                <View key="event-ABRINT-2024"
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text
                        style={{
                            marginBottom: Spacing,
                            fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif',
                            fontSize: 18
                        }}
                    >
                        CONGRESSO ABRONET {'\n'}<Text style={{fontSize: FontSize.small}}>Local: Maracanã</Text>
                    </Text>
                    
                    <TouchableOpacity onPress={handleDeleteEvent}>  
                    <Feather name="trash-2" size={20} color="black" />
                    <View
                    
                    style={{
                        padding: 10
                    }}
                    ></View>
                    <FontAwesome5 name="pencil-alt" size={20} color="black" />
                    </TouchableOpacity>  
                </View>

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
                height: Spacing * 10,
                borderColor: Colors.haevyPrimary
            }}>

                <View key="event-ABRINT-2024"
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text
                        style={{
                            marginBottom: Spacing,
                            fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif',
                            fontSize: 18
                        }}
                    >
                        ENCONTRO ABRAMULTI {'\n'}<Text style={{fontSize: FontSize.small}}>Local: Praça Osório</Text>
                    </Text>
                    
                    <TouchableOpacity onPress={handleDeleteEvent}>  
                    <Feather name="trash-2" size={20} color="black" />
                    <View
                    
                    style={{
                        padding: 10
                    }}
                    ></View>
                    <FontAwesome5 name="pencil-alt" size={20} color="black" />
                    </TouchableOpacity>  
                </View>

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
                height: Spacing * 10,
                borderColor: Colors.haevyPrimary
            }}>

                <View key="event-ABRINT-2024"
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text
                        style={{
                            marginBottom: Spacing,
                            fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif',
                            fontSize: 18
                        }}
                    >
                        FURUKAWA SUMMIT {'\n'}<Text style={{fontSize: FontSize.small}}>Local: Furukawa CIC</Text>
                    </Text>
                    
                    <TouchableOpacity onPress={handleDeleteEvent}>  
                    <Feather name="trash-2" size={20} color="black" />
                    <View
                    
                    style={{
                        padding: 10
                    }}
                    ></View>
                    <FontAwesome5 name="pencil-alt" size={20} color="black" />
                    </TouchableOpacity>  
                </View>

            </View>

            <View 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
            <TouchableOpacity
          onPress={() => useLinkProps.navigation.navigate('Register_Customer')}
          style={{
            padding: Spacing * 2,
            width: 380,
            backgroundColor: Colors.lightSecondary,
            marginVertical: Spacing * 2,
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
            >  <Feather name="plus-circle" size={24} color="white" />   Criar novo evento</Text>
          </TouchableOpacity>
          </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'space-between',
                    paddingTop: Spacing * 6,
                }}
            >

                <TouchableOpacity>
                    <FontAwesome name="user-plus" size={24} color={Colors.darkText} onPress={() => useLinkProps.navigation.navigate('Register_Customer')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="truck" size={24} color={Colors.darkText} onPress={() => useLinkProps.navigation.navigate('GreenIT')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="list" size={24} color={Colors.haevyPrimary} onPress={() => useLinkProps.navigation.navigate('Events_List')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({});