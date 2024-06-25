import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import HomeScreen from './screens/HomeScreen';
import CadastroClienteScreen from './screens/CadastroClienteScreen';
import EventosScreen from './screens/EventosScreen';
import GreenITScreen from './screens/GreenITScreen';

const Stack = createStackNavigator();

function App() {
  LogBox.ignoreAllLogs(true);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CadastroCliente" component={CadastroClienteScreen} />
      <Stack.Screen name="Eventos" component={EventosScreen} />
      <Stack.Screen name="GreenIT" component={GreenITScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;