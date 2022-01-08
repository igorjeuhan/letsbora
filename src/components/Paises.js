import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import { paises } from '../data/paises';

export default function Paises({ navegacao }) {
  return (
    <FlatList
      style={estiloPaises.flatlist}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={paises}
      renderItem={({ item }) => (
        <View style={estiloPaises.cards}>
          <Image
            style={estiloPaises.imagePais}
            source={require('../../assets/' + item.image)}
          />
          <TouchableOpacity onPress={navegacao} style={estiloPaises.nomePais}>
            {item.nome}
          </TouchableOpacity>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={estiloPaises.separator} />}
    />
  );
}

const estiloPaises = StyleSheet.create({
  flatlist: {
    padding: 20,
  },

  cards: {
    height: 'auto',
    width: 250,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#2B3151',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 6,
  },

  separator: {
    width: 20,
  },

  imagePais: {
    height: '60%',
    width: '70%',
  },

  nomePais: {
    textAlign: 'center',
    width: '80%',
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: 600,
    backgroundColor: '#F7BA15',
    color: '#010101',
    padding: 8,
    borderRadius: 5,
  },
});
