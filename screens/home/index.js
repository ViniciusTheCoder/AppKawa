import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { AntDesign } from '@expo/vector-icons';

export default function Home(useLinkProps) {
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
                    >Olá, <Text style={{color: Colors.haevyPrimary}}>Furukawer</Text></Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing * 3
                    }}
                >

                    <Text style={{ fontFamily: fontLoaded ? 'Poppins_400Regular' : 'sans-serif', fontSize: FontSize.medium, }}>Gerencie eventos, aproveite o greenIT e cadastre novos leads!</Text>

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

                    </View>

                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});