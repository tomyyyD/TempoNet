/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { styles, colors } from '../Styles'
// import { firebase } from '../../Firebase/config'

const HomeScreen = ({ route, navigation }) => {
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

  const onNavigate = (page) => {
    switch (page) {
      case 1:
        navigation.navigate('Home')
        break
      case 2:
        navigation.navigate('Search')
        break
      case 3:
        navigation.navigate('Chat')
        break
      case 4:
        navigation.navigate('Profile')
        break
    }
  }

  return (
    <View style={[styles.contentContainer, colors.bcBackground]}>
      <View style={[styles.mainContentContainer, colors.bcBackground]}>
        <Text style={[styles.titleText, colors.dcText]}>TempoNet</Text>
        <View style={[styles.largeContainer, styles.feedContainer, styles.shortContainer, colors.hcbBackground]}>
          <Text style={[styles.headerText, colors.bcText]}>Activity Feed</Text>
          <ScrollView style={styles.largeContainer}>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </Text>
          </ScrollView>
        </View>
        <View style={[styles.largeContainer, styles.feedContainer, styles.tallContainer, colors.hcbBackground]}>
          <Text style={[styles.headerText, colors.bcText]}>Recommendations</Text>
          <ScrollView style={styles.largeContainer}>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </Text>
          </ScrollView>
        </View>
      </View>
      <View style={[styles.footer, styles.horizontalContainer]}>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
        <Image style={[styles.footerImage, colors.hcbTint]} source={require('../../assets/Icons/x128/HomeIcon128.png')}/>
        <View style={[styles.underline, colors.hcbBackground]}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Search')}>
        <Image style={[styles.footerImage, colors.dcTint]} source={require('../../assets/Icons/x128/SearchIcon128.png')}/>
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

export default HomeScreen
