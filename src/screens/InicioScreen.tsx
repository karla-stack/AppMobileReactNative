import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

export default function InicioScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Mis Datos Personales</Text>


        <Image
          source={require('../../assets/foto_perfil.jpg')}
          style={styles.foto}
        />

      <View style={styles.datosContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.valor}>Karla Michelle</Text>

        <Text style={styles.label}>Apellido:</Text>
        <Text style={styles.valor}>Virgil Bencosme</Text>

        <Text style={styles.label}>Correo:</Text>
        <Text style={styles.valor}>20240066@itla.edu.do</Text>

        <Text style={styles.label}>Matrícula:</Text>
        <Text style={styles.valor}>2024-0066</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 30,
    borderWidth: 3,
    borderColor: '#4CAF50',
  },
  datosContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 10,
  },
  valor: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    paddingLeft: 10,
  },
});