import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

export default function TraductorScreen() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const convertirNumeroALetras = (num: number): string => {
    if (num === 0) return 'cero';
    if (num < 1 || num > 1000) return 'Número fuera de rango (1-1000)';

    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    if (num === 1000) return 'mil';

    let resultado = '';

    // Centenas
    const cen = Math.floor(num / 100);
    if (cen > 0) {
      if (num === 100) {
        resultado = 'cien';
      } else {
        resultado = centenas[cen];
      }
    }

    num = num % 100;

    // Decenas y unidades
    if (num >= 10 && num < 20) {
      // Números especiales 10-19
      resultado += (resultado ? ' ' : '') + especiales[num - 10];
    } else {
      const dec = Math.floor(num / 10);
      const uni = num % 10;

      if (dec > 0) {
        resultado += (resultado ? ' ' : '') + decenas[dec];
        if (uni > 0) {
          if (dec === 2) {
            // Veinti-
            resultado = resultado.replace('veinte', 'veinti') + unidades[uni];
          } else {
            resultado += ' y ' + unidades[uni];
          }
        }
      } else if (uni > 0) {
        resultado += (resultado ? ' ' : '') + unidades[uni];
      }
    }

    return resultado.trim();
  };

  const traducir = () => {
    const num = parseInt(numero);

    if (isNaN(num)) {
      setResultado('Por favor ingresa un número válido');
      return;
    }

    if (num < 1 || num > 1000) {
      setResultado('El número debe estar entre 1 y 1000');
      return;
    }

    const textoNumero = convertirNumeroALetras(num);
    setResultado(textoNumero);
  };

  const limpiar = () => {
    setNumero('');
    setResultado('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}> Traductor de Números</Text>
      <Text style={styles.subtitulo}>Convierte números (1-1000) a letras en español</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ingresa un número (1-1000):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ej: 524"
          value={numero}
          onChangeText={setNumero}
        />
      </View>

      <View style={styles.botonesContainer}>
        <TouchableOpacity style={styles.botonTraducir} onPress={traducir}>
          <Text style={styles.textoBoton}>Traducir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonLimpiar} onPress={limpiar}>
          <Text style={styles.textoBoton}>Limpiar</Text>
        </TouchableOpacity>
      </View>

      {resultado !== '' && (
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
    marginBottom: 10,
    color: '#333',
  },
  subtitulo: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
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
    borderColor: '#9C27B0',
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  botonTraducir: {
    backgroundColor: '#9C27B0',
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
    backgroundColor: '#F3E5F5',
    padding: 20,
    borderRadius: 10,
  },
  resultadoLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9C27B0',
    marginBottom: 10,
  },
  resultadoValor: {
    fontSize: 24,
    color: '#6A1B9A',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});