import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

export default function TablaScreen() {
  const [numero, setNumero] = useState('');
  const [tabla, setTabla] = useState<string[]>([]);

  const generarTabla = () => {
    const num = parseInt(numero);

    if (isNaN(num)) {
      alert('Por favor ingresa un número válido');
      return;
    }

    const nuevaTabla: string[] = [];
    for (let i = 1; i <= 13; i++) {
      nuevaTabla.push(`${num} x ${i} = ${num * i}`);
    }

    setTabla(nuevaTabla);
  };

  const limpiar = () => {
    setNumero('');
    setTabla([]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}> Tabla de Multiplicar</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ingresa un número:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ej: 5"
          value={numero}
          onChangeText={setNumero}
        />
      </View>

      <View style={styles.botonesContainer}>
        <TouchableOpacity style={styles.botonGenerar} onPress={generarTabla}>
          <Text style={styles.textoBoton}>Generar Tabla</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonLimpiar} onPress={limpiar}>
          <Text style={styles.textoBoton}>Limpiar</Text>
        </TouchableOpacity>
      </View>

      {tabla.length > 0 && (
        <View style={styles.tablaContainer}>
          <Text style={styles.tituloTabla}>Tabla del {numero}</Text>
          {tabla.map((linea, index) => (
            <View key={index} style={styles.lineaTabla}>
              <Text style={styles.textoTabla}>{linea}</Text>
            </View>
          ))}
        </View>
      )}
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
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#2196F3',
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  botonGenerar: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  botonLimpiar: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tablaContainer: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  tituloTabla: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2196F3',
    marginBottom: 15,
  },
  lineaTabla: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  textoTabla: {
    fontSize: 18,
    color: '#333',
  },
});