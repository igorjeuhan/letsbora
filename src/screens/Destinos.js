import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import Paises from '../components/Paises';

export default function Destinos({ navigation }) {
  function navegarLogin() {
    navigation.navigate('Login');
  }
  function navegarDetalhes() {
    navigation.navigate('Detalhes');
  }

  return (
    <SafeAreaView style={estiloDestinos.container}>
      <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
        <View style={estiloDestinos.sairContainer}>
          <TouchableOpacity style={estiloDestinos.perfil}>
            Perfil
          </TouchableOpacity>
          <TouchableOpacity style={estiloDestinos.sair} onPress={navegarLogin}>
            Sair
          </TouchableOpacity>
        </View>
        <Text style={estiloDestinos.textoUm}>Bem-vindo(a), Igor Jeuhan!</Text>
        <Text style={estiloDestinos.textoDois}>
          Qual é sua próxima aventura?
        </Text>
        <View style={estiloDestinos.searchbarContainer}>
          <TextInput
            style={estiloDestinos.searchbar}
            placeholder="Digite seu próximo destino..."
          ></TextInput>
        </View>
      </View>
      <Paises navegacao={navegarDetalhes} />
    </SafeAreaView>
  );
}

const estiloDestinos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    backgroundColor: '#2B3151',
  },

  sairContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
  },

  perfil: {
    padding: 5,
    borderRadius: 5,
    fontWeight: 400,
    fontSize: 14,
    fontFamily: 'Poppins',
    backgroundColor: '#F7BA15',
    color: '#2B3151',
    width: '30%',
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  sair: {
    padding: 5,
    borderRadius: 5,
    fontWeight: 300,
    fontSize: 14,
    fontFamily: 'Poppins',
    backgroundColor: '#2B3151',
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#F7BA15',
    width: '30%',
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  textoUm: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: 600,
    letterSpacing: 0.5,
    color: '#F7BA15',
  },

  textoDois: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    fontWeight: 300,
    letterSpacing: 0.5,
    marginTop: 20,
    color: '#F7BA15',
  },

  searchbarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchbar: {
    marginTop: 10,
    width: '100%',
    padding: 6,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
});
