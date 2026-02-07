import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Importar las pantallas (las crearemos después)
import InicioScreen from './src/screens/InicioScreen';
import SumadoraScreen from './src/screens/SumadoraScreen';
import TraductorScreen from './src/screens/TraductorScreen';
import TablaScreen from './src/screens/TablaScreen';
import ExperienciaScreen from './src/screens/ExperienciaScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen
          name="Inicio"
          component={InicioScreen}
          options={{title: ' Página Inicial'}}
        />
        <Drawer.Screen
          name="Sumadora"
          component={SumadoraScreen}
          options={{title: ' Sumadora'}}
        />
        <Drawer.Screen
          name="Traductor"
          component={TraductorScreen}
          options={{title: ' Traductor'}}
        />
        <Drawer.Screen
          name="Tabla"
          component={TablaScreen}
          options={{title: ' Tabla Multiplicar'}}
        />
        <Drawer.Screen
          name="Experiencia"
          component={ExperienciaScreen}
          options={{title: ' Mi Experiencia'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;