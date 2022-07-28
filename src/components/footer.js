import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { styles, colors } from '../Styles'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'

const Footer = ({ page }) => {
  const navigation = useNavigation()

  let isSearch = false
  let isHome = false
  let isChat = false
  let isProfile = false

  switch (page) {
    case 1:
      isHome = true
      break
    case 2:
      isSearch = true
      break
    case 3:
      isChat = true
      break
    case 4:
      isProfile = true
      break
  }

  return (
    <View style={[styles.footer, styles.horizontalContainer]}>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
        <Image style={[styles.footerImage, colors.hcbTint]} source={require('../../assets/Icons/x128/HomeIcon128.png')}/>
        { isHome ? <View style={[styles.underline, colors.hcbBackground]}/> : <></> }
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Search')}>
        <Image style={[styles.footerImage, colors.dcTint]} source={require('../../assets/Icons/x128/SearchIcon128.png')}/>
        { isSearch ? <View style={[styles.underline, colors.dcBackground]}/> : <></> }
      </TouchableOpacity>
      <View style={[styles.addBorder, colors.mcBorder]}>
        <TouchableOpacity>
          <Image style={[styles.footerImage, colors.mcTint]} source={require('../../assets/Icons/x128/addIcon128.png')}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Chat')}>
        <Image style={[styles.footerImage, colors.lcTint]} source={require('../../assets/Icons/x128/chatIcon128.png')}/>
        { isChat ? <View style={[styles.underline, colors.lcBackground]}/> : <></> }
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Profile')}>
        <Image style={[styles.footerImage, colors.hcpTint]} source={require('../../assets/Icons/x128/ProfileIcon128.png')}/>
        { isProfile ? <View style={[styles.underline, colors.hcpBackground]}/> : <></> }
      </TouchableOpacity>
    </View>
  )
}
Footer.propTypes = {
  page: PropTypes.number,
  uid: PropTypes.string
}

export default Footer
