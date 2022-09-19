import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppRoutes} from './types/NavigationTypes';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {
  Home
} from '../screens/home';
import {
  DetailScreen
} from '../screens/detail';

const AppStack = createStackNavigator<AppRoutes>();

const MyNavigation = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'Home'}>
          <AppStack.Screen
            name="Home"
            component={Home}
            options={{...MyNavigation}}
          />
          <AppStack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{...MyNavigation}}
          /> 
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppNavigator;
