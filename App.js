/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import AddTestScreen from './Screens/AddTest';
import HelloScreen from './Screens/Hello';

import MainScreen from './Screens/Main';
import QuizzesScreen from './Screens/Quizzes';
import SettingsScreen from './Screens/Settings';
import StudyBinderScreen from './Screens/StudyBinder';

const Stack = createNativeStackNavigator()

const App = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShadowVisible: false,
            headerHideShadow: true,
            headerStyle: {borderBottomWidth: 0, borderBottomColor: 'transparent', elevation: 0},
          }}>
          <Stack.Screen 
            name="Main"
            component={MainScreen}
            options={{ title: 'Main' }}
            />
          <Stack.Screen 
            name="Settings"
            component={SettingsScreen}
            options={{ title: 'Settings' }}
            />
          <Stack.Screen 
            name="AddTest"
            component={AddTestScreen}
            options={{ title: 'Add Test' }}
            />
          <Stack.Screen 
            name="StudyBinder"
            component={StudyBinderScreen}
            options={{ title: 'Study Binder' }}
            />
            <Stack.Screen 
              name="Quizzes"
              component={QuizzesScreen}
              options={{ title: 'Quizzes' }}
              />
          <Stack.Screen 
            name="Hello"
            component={HelloScreen}
            options={{ title: 'Hello World' }}
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
