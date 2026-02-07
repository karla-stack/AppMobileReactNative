import React from 'react';
import {View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity} from 'react-native';

export default function ExperienciaScreen() {
  const videoUrl = 'https://www.youtube.com/watch?v=gSooK4SSNkM';

  const abrirVideo = () => {
    Linking.openURL(videoUrl).catch(err => {
      console.error('Error al abrir el video:', err);
      alert('No se pudo abrir el video');
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}> Mi Experiencia</Text>

      <View style={styles.contenido}>
        <Text style={styles.descripcion}>
          En este video explico mi experiencia desarrollando esta aplicación móvil con React Native.
        </Text>

        <TouchableOpacity style={styles.botonVideo} onPress={abrirVideo}>
          <Text style={styles.textoBoton}> Ver Video en YouTube</Text>
        </TouchableOpacity>

        <View style={styles.resumenContainer}>
          <Text style={styles.resumenTitulo}>Resumen de mi experiencia:</Text>

          <Text style={styles.puntoTexto}>
            • Aprendí a configurar React Native y Android Studio
          </Text>
          <Text style={styles.puntoTexto}>
            • Implementé navegación con menú lateral
          </Text>
          <Text style={styles.puntoTexto}>
            • Desarrollé funcionalidades como sumadora, traductor y tabla de multiplicar
          </Text>
          <Text style={styles.puntoTexto}>
            • Superé desafíos técnicos durante la instalación y configuración
          </Text>
          <Text style={styles.puntoTexto}>
            • Mejoré mis habilidades en desarrollo móvil
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  contenido: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  descripcion: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 24,
  },
  botonVideo: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resumenContainer: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  resumenTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 15,
  },
  puntoTexto: {
    fontSize: 15,
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
  },
});