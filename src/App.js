// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Product from './Pages/Product/Product';
import Detail from './Pages/Detail/Detail';
import Login from './Pages/Login/Login';
import Config from 'react-native-config';

const Stack = createNativeStackNavigator();

function App() {
  console.log(Config.API_URL);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="ProductScreen" component={Product} />
        <Stack.Screen name="DetailScreen" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
