import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';
import AppTextInput from '../../components/AppTextInput';

export default function Login(useLinkProps) {
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
          alignItems: 'center'
        }}>

          <Image style={{marginVertical: Spacing * 3}} source={require('../../assets/new_electric_logo_fr.png')} width={5}></Image>
          <Text
          style={{
            fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif',
            fontSize: FontSize.large,
            maxWidth: '60%',
            textAlign: 'center'
          }}
          >Seja Bem-Vindo ao <Text style={{color: Colors.haevyPrimary}}>AppKawa!</Text></Text>
        </View>
        <View
        style={{
          marginVertical: Spacing * 3
        }}
        >
          
          <AppTextInput placeholder='E-mail'/>
    
          <AppTextInput placeholder='Senha' secureTextEntry={true}/>

        </View>
    
        <View>
          <Text
          style={{
            fontFamily: fontLoaded ? 'Poppins_600SemiBold' : 'sans-serif',
            fontSize: FontSize.small,
            color: Colors.lightSecondary,
            alignSelf: 'flex-end'
          }}
          >
            Esqueceu sua senha?
          </Text>
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
            >Continuar</Text>
          </TouchableOpacity>
    
          <TouchableOpacity
          onPress={() => useLinkProps.navigation.navigate('Register')}
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
            >Crie sua conta</Text>
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
      );
}

const styles = StyleSheet.create({});