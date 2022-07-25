/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { styles, colors } from '../Styles'
// import { firebase } from '../../Firebase/config'

const SearchScreen = ({ route, navigation }) => {
  // const [user, setUser] = useState(null)
  // const [isLoading, setIsLoading] = useState(true)
  // const usersRef = firebase
  //   .firestore()
  //   .collection('users')
  // usersRef
  //   .doc(route.params.uid)
  //   .get()
  //   .then(doc => {
  //     if (!doc.exists) {
  //       alert('could not find user')
  //       return
  //     }
  //     setUser(doc.data())
  //     setIsLoading(false)
  //   })
  // if (isLoading) {
  //   return (
  //     <View style={[styles.contentContainer, colors.bcBackground]}>
  //       <ActivityIndicator size='large' color='#ffffff'/>
  //     </View>
  //   )
  // }

  return (
    <View style={[styles.contentContainer, colors.bcBackground]}>
      <View style={[styles.mainContentContainer, colors.bcBackground]}>
        <Text style={[styles.titleText, colors.dcText]}>Search</Text>
      </View>
      <View style={[styles.footer, styles.horizontalContainer]}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
          <Image style={[styles.footerImage, colors.hcbTint]} source={require('../../assets/Icons/x128/HomeIcon128.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Search')}>
          <Image style={[styles.footerImage, colors.dcTint]} source={require('../../assets/Icons/x128/SearchIcon128.png')}/>
          <View style={[styles.underline, colors.hcbBackground]}/>
        </TouchableOpacity>
        <View style={[styles.addBorder, colors.mcBorder]}>
          <TouchableOpacity>
            <Image style={[styles.footerImage, colors.mcTint]} source={require('../../assets/Icons/x128/addIcon128.png')}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Chat')}>
          <Image style={[styles.footerImage, colors.lcTint]} source={require('../../assets/Icons/x128/chatIcon128.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Profile')}>
          <Image style={[styles.footerImage, colors.hcpTint]} source={require('../../assets/Icons/x128/ProfileIcon128.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

// just do it together

export default SearchScreen
