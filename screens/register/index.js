import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';
import AppTextInput from '../../components/AppTextInput';
import { initializeApp } from '@firebase/app';

const app = initializeApp(firebaseConfig);  

export default function Register(useLinkProps, {email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication}) {

    const [fontLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold
      }); 
    
      if (!fontLoaded) {
        return null;
      }

    return(
    <SafeAreaView>
          <View style={{
            padding: Spacing * 2,
          }}>
        <View style={{
          alignItems: 'center'
        }}>
          <Text
          style={{
            fontSize: FontSize.xLarge,
            color:Colors.haevyPrimary,
            fontFamily: fontLoaded ? 'Poppins_700Bold' : 'sans-serif',
            marginVertical: Spacing * 3
          }}
          >Crie sua conta</Text>
          <Text
          style={{
            fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif',
            fontSize: FontSize.small,
            maxWidth: '80%',
            textAlign: 'center'
          }}
          >Esteja por dentro das novidades da Furukawa!</Text>
        </View>
        <View
        style={{
          marginVertical: Spacing * 3
        }}
        >

            
            <AppTextInput placeholder='E-mail' value={email} onChangeText={setEmail}/>
    
            <AppTextInput placeholder='Senha' secureTextEntry={true}/>

            <AppTextInput placeholder='Confirme sua Senha' value={password} onChangeText={setPassword} secureTextEntry={true}/>
            
          

        </View>
    
          <TouchableOpacity 
          onPress={() => useLinkProps.navigation.navigate('Login')}
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
            >Continuar</Text>
          </TouchableOpacity>
    
          <TouchableOpacity
          onPress={() => useLinkProps.navigation.navigate('Login')}
          style={{
            padding: Spacing
          }}>
            <Text
            style={{          
            color: Colors.text,
            textAlign: 'center',
            fontSize: FontSize.small,
            fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif'
            }}
            >Ja possui cadastro?</Text>
          </TouchableOpacity>
    
            <View style={{
              marginVertical: Spacing * 3
            }}>
            <Text
            style={{          
            color: Colors.lightSecondary,
            textAlign: 'center',
            fontSize: FontSize.small,
            fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif'
            }}
            >Ou Continue Com</Text>
    
            <View
            style={{
              marginTop: Spacing,
              flexDirection: 'row',
              justifyContent: 'center'
            }}
            >
              <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing
              }}
              >
                <Ionicons name='logo-google' color={Colors.text} size={Spacing * 2}/>
              </TouchableOpacity>
    
              <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing
              }}
              >
                <Ionicons name='logo-apple' color={Colors.text} size={Spacing * 2}/>
              </TouchableOpacity>
    
              <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing
              }}
              >
                <Ionicons name='logo-facebook' color={Colors.text} size={Spacing * 2}/>
              </TouchableOpacity>
            </View>
    
            </View>
    
        </View>
        </SafeAreaView>
)
}