import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Spacing from '../constants/Spacing';
import FontSize from '../constants/FontSize';
import Colors from '../constants/Colors';
import {useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';


const AppTextInput = ({...otherProps}) => {

    const [focused, setFocused] = useState(false)

    const [fontLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold
      }); 
    
      if (!fontLoaded) {
        return null;
      }

    return(
        
        <TextInput
            onFocus={() =>setFocused(true)}
            onBlur={() =>setFocused(false)}
          placeholderTextColor={Colors.darkText}
          style={[{
            fontSize: FontSize.small,
            fontFamily: fontLoaded ? 'Poppins_400Regular' : 'sans-serif',
            padding: Spacing * 2,
            backgroundColor: Colors.gray,
            borderRadius: Spacing,
            marginVertical: Spacing
          }, focused && { borderWidth: 3, borderColor: Colors.haevyPrimary, shadowOffset: { width: 4, height: Spacing },
            shadowColor: Colors.shadow,
            shadowOpacity: 0.3,
            textShadowRadius: Spacing    
        }]}
          {...otherProps}
          />
    )
}

export default AppTextInput;

const styles = StyleSheet.create({})