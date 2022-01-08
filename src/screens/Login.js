import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function Login({ navigation }) {
  function navegarDestinos() {
    navigation.navigate('Destinos');
  }

  return (
    <SafeAreaView style={estilos.container}>
      <ImageBackground
        style={estilos.background}
        source={require('./../../assets/bg.jpg')}
      >
        <Text style={estilos.titulo}>Let's Bora!</Text>
        <Text style={estilos.subtitulo}>Preparado para se aventurar?</Text>
        <StatusBar style="auto" />

        <TextInput
          style={estilos.inputs}
          placeholder="Digite seu email..."
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          style={estilos.inputs}
          placeholder="Digite sua senha..."
        ></TextInput>
        <TouchableOpacity style={estilos.entrar} onPress={navegarDestinos}>
          Entrar
        </TouchableOpacity>
        <TouchableOpacity style={estilos.cadastrar}>
          Cadastre-se
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B3151',
  },

  titulo: {
    color: '#F7BA15',
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    marginBottom: 40,
  },

  subtitulo: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'Montserrat',
    marginBottom: 20,
    letterSpacing: 0.5,
  },

  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  inputs: {
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 10,
    fontSize: 14,
    width: '80%',
    borderRadius: 5,
  },

  entrar: {
    margin: 10,
    padding: 8,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Poppins',
    backgroundColor: '#F7BA15',
    color: '#161616',
    width: '60%',
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  cadastrar: {
    margin: 10,
    fontSize: 14,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    color: '#ffffff',
    letterSpacing: 0.5,
  },
});
