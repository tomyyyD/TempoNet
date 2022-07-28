/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { styles, colors } from '../Styles'
import Footer from '../components/footer'
import { firebase } from '../Firebase/config'

const SearchScreen = ({ route, navigation }) => {
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
        <Text style={[styles.titleText, colors.dcText]}>Search</Text>
        <Text style={[styles.headerText, colors.dcText]}>Searching done by {user.username}</Text>
      </View>
      <Footer page={2} uid={user.id}/>
    </View>
  )
}

// just do it together

export default SearchScreen
