/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Text, TextInput, Image, TouchableOpacity, View } from 'react-native'
import { styles, colors } from '../../Styles'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = () => {
    navigation.navigate('Register')
  }

  return (
      <View style={[styles.contentContainer, colors.bcBackground]}>
          <View style={[styles.decoration, colors.hcbBackground]} />
          <Text style={[styles.titleText, colors.mcText]}>TempoNet</Text>
          <Image style={styles.titleImage} source={require('../../../assets/Icons/x256/Logo256.png')}></Image>
          <View style={[styles.decoration, colors.hcpBackground]} />
          <View style={styles.signInContainer}>
              <Text style={[styles.subTitleText, colors.mcText]}>Welcome!</Text>
              <View style={styles.fieldsContainer}>
                  <View style={[styles.inputContainer, styles.mediumContainer, colors.hcpBorder]}>
                      <TextInput
                          style={[styles.inputText, colors.hcpText]}
                          onChangeText={(text) => setEmail(text)}
                          value={email}
                          placeholder='email'
                          placeholderTextColor="#aaaaaa"
                          autoCapitalize="none"
                          underlineColorAndroid="transparent"
                      />
                  </View>
                  <View style={[styles.inputContainer, styles.mediumContainer, colors.hcbBorder]}>
                      <TextInput
                          style={[styles.inputText, colors.hcbText]}
                          onChangeText={(text) => setPassword(text)}
                          value={password}
                          placeholder='password'
                          placeholderTextColor="#aaaaaa"
                          autoCapitalize='none'
                          underlineColorAndroid="transparent"
                          secureTextEntry
                      />
                  </View>
              </View>
              <TouchableOpacity style={[styles.button, colors.hcpBackground]}>
                  <Text style={[styles.headerText, colors.bcText]}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttonAlt, colors.hcbBorder]} onPress={signUp}>
                  <Text style={[styles.headerText, colors.hcbText]}>Sign Up!</Text>
              </TouchableOpacity>
          </View>
      </View>
  )
}

export default LoginScreen
