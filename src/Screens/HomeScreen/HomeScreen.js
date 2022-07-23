/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles, colors } from '../../Styles'
import { firebase } from '../../Firebase/config'

const HomeScreen = ({ route, navigation }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const usersRef = firebase
    .firestore()
    .collection('users')
  usersRef
    .doc(route.params.uid)
    .get()
    .then(doc => {
      if (!doc.exists) {
        alert('could not find user')
        return
      }
      setUser(doc.data())
      setIsLoading(false)
    })
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
        <Text style={[styles.titleText, colors.dcText]}>hello {user.username}!</Text>
        <View style={[styles.largeContainer, colors.hcpBackground]}>
          <Text>Activity Feed</Text>
        </View>
      </View>
      <View style={[styles.footer, styles.horizontalContainer]}>
        <TouchableOpacity>
          <Image style={[styles.footerImage, colors.hcbTint]} source={require('../../../assets/Icons/x128/HomeIcon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={[styles.footerImage, colors.mcTint]} source={require('../../../assets/Icons/x128/SearchIcon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={[styles.footerImage, colors.hcpTint]} source={require('../../../assets/Icons/x128/ProfileIcon.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen
