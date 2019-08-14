import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    display: 'flex',
    width: '100%',
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 8,
    padding: 10,
  },
  tituloContainer: {
    marginBottom: 20,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  autor: {
    fontSize: 10,
    marginTop: 5,
  },
  descricao: {
    marginTop: 10,
  },
  divisa: {
    width: '100%',
    borderColor: '#d2d4d9',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

const post = ({ postInfo }) => (
  <View style={styles.postContainer}>
    <View style={styles.tituloContainer}>
      <Text style={styles.titulo}>{postInfo.titulo}</Text>
      <Text style={styles.autor}>{postInfo.autor}</Text>
    </View>
    <View style={styles.divisa} />
    <Text style={styles.descricao}>{postInfo.descricao}</Text>
  </View>
);

export default post;
