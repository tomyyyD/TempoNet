// import React, {useCallback, useEffect, useState} from 'react';
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, RegisterScreen, HomeScreen, SearchScreen, ChatScreen, ProfileScreen } from './src/Screens'
// eslint-disable-next-line camelcase
import { useFonts, Kanit_500Medium } from '@expo-google-fonts/kanit'
import * as SplashScreen from 'expo-splash-screen'
import { firebase } from './src/Firebase/config'

const Stack = createNativeStackNavigator()
SplashScreen.preventAutoHideAsync()

export default function App () {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    Kanit_500Medium
  })

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users')
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then(doc => {
            const userData = doc.data()
            setIsLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            alert(error)
            setIsLoading(false)
          })
      } else {
        setIsLoading(false)
      }
    })
  }, [])

  if (isLoading || !fontsLoaded) {
    return null
  } else {
    SplashScreen.hideAsync()
    return (
      <NavigationContainer>
        <StatusBar barStyle='light-content' translucent/>
        <Stack.Navigator
          initialRouteName={user ? 'Home' : 'Login'}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              animation: 'none'
            }}
          />
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
          <Stack.Screen
            name='Search'
            component={SearchScreen}
            options={{
              animation: 'none',
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Chat'
            component={ChatScreen}
            options={{
              animation: 'none',
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Profile'
            component={ProfileScreen}
            options={{
              animation: 'none',
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
