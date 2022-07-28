/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Footer from '../components/footer'
import { styles, colors } from '../Styles'
import { firebase } from '../Firebase/config'

const ChatScreen = ({ navigation }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const usersRef = firebase
      .firestore()
      .collection('users')
    const currUser = firebase.auth().currentUser

    usersRef
      .doc(currUser.uid)
      .get()
      .then(doc => {
        if (!doc.exists) {
          alert('could not find user')
          return
        }
        setUser(doc.data())
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <View style={[styles.contentContainer, colors.bcBackground]}>
        <ActivityIndicator size='large' color='#ffffff'/>
      </View>
    )
  }

  return (
    <View style={[styles.contentContainer, colors.bcBackground]}>
    <View style={[styles.mainContentContainer, colors.bcBackground]}>
      <Text style={[styles.titleText, colors.lcText]}>Chat</Text>
      <Text>Chat Screen for {user.username}</Text>
    </View>
    <Footer page={3}/>
  </View>

  )
}

export default ChatScreen
