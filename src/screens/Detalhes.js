import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

export default function Detalhes({ navigation }) {
  function navegarDestinos() {
    navigation.navigate('Destinos');
  }
  return (
    <SafeAreaView style={estiloDetalhes.container}>
      <Text style={estiloDetalhes.titulo}>Detalhes do destino</Text>
      <TouchableOpacity style={estiloDetalhes.mais} onPress={navegarDestinos}>
        Ver mais destinos
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const estiloDetalhes = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#2B3151',
  },

  titulo: {
    color: '#ffffff',
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: 400,
  },

  mais: {
    textAlign: 'center',
    width: '60%',
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: 600,
    backgroundColor: '#F7BA15',
    color: '#010101',
    padding: 8,
    borderRadius: 5,
  },
});
