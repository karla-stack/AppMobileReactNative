import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

export default function SumadoraScreen() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  const sumar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor ingresa números válidos');
      return;
    }

    setResultado(num1 + num2);
  };

  const limpiar = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}> Sumadora</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Primer Número:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ingresa el primer número"
          value={numero1}
          onChangeText={setNumero1}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Segundo Número:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ingresa el segundo número"
          value={numero2}
          onChangeText={setNumero2}
        />
      </View>

      <View style={styles.botonesContainer}>
        <TouchableOpacity style={styles.botonSumar} onPress={sumar}>
          <Text style={styles.textoBoton}>Sumar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonLimpiar} onPress={limpiar}>
          <Text style={styles.textoBoton}>Limpiar</Text>
        </TouchableOpacity>
      </View>

      {resultado !== null && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoLabel}>Resultado:</Text>
          <Text style={styles.resultadoValor}>{resultado}</Text>
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
    borderColor: '#4CAF50',
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  botonSumar: {
    backgroundColor: '#4CAF50',
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
  resultadoContainer: {
    marginTop: 30,
    backgroundColor: '#E8F5E9',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  resultadoLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  resultadoValor: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginTop: 10,
  },
});