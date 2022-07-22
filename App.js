// import React, {useCallback, useEffect, useState} from 'react';
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, RegisterScreen } from './src/Screens'
// eslint-disable-next-line camelcase
import { useFonts, Kanit_500Medium } from '@expo-google-fonts/kanit'
import * as SplashScreen from 'expo-splash-screen'

const Stack = createNativeStackNavigator()
SplashScreen.preventAutoHideAsync()

export default function App () {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    Kanit_500Medium
  })

  if (!fontsLoaded) {
    return null
  } else {
    SplashScreen.hideAsync()
    return (
      <NavigationContainer>
        <StatusBar barStyle='light-content' translucent/>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Register'
            component={RegisterScreen}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
