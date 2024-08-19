import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home';
import Login from './src/pages/login';
import Registro from './src/pages/registro';
import HomeInside from './src/pages/homeinside';
import Perfil from './src/pages/perfil';
import Atividades from './src/pages/atividades';
import Turmas from './src/pages/turmas';
import Agenda from './src/pages/agenda';
import Boletim from './src/pages/boletim';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="HomeInside" component={HomeInside} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Atividades" component={Atividades} />
        <Stack.Screen name="Turmas" component={Turmas} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Boletim" component={Boletim} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
