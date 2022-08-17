/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Text, View, ActivityIndicator, TextInput } from 'react-native'
import { styles, colors } from '../Styles'
import Footer from '../components/footer'
import { firebase } from '../Firebase/config'

// const BACKGROUND_COLOR = '#2F2F2F'
// const MAIN_COLOR = '#B0B3EB'
// const HIGHLIGHT_COLOR_PINK = '#D1ACF6'
const LIGHTER_COLOR = '#A294D4'
// const HIGHLIGHT_COLOR_BLUE = '#ACD7F6'
// const DARKER_COLOR = '#94A8D4'

const SearchScreen = ({ route, navigation }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

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
        <View style={[styles.inputContainer, styles.smallContianer, colors.lcBorder]}>
        <TextInput
          style={[styles.inputText, colors.lcText]}
          placeholder='Search...'
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
          placeholderTextColor={LIGHTER_COLOR}
          autoCapitalize='none'
          underlineColorAndroid='transparent'
        />
      </View>

      </View>
      <Footer page={2} uid={user.id}/>
    </View>
  )
}

// just do it together

export default SearchScreen
