/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, View, ScrollView } from 'react-native'
import { styles, colors } from '../Styles'
import Footer from '../components/footer'
import { firebase } from '../Firebase/config'

const HomeScreen = ({ navigation }) => {
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
        <Text style={[styles.titleText, colors.hcbText]}>TempoNet</Text>
        <View style={[styles.largeContainer, styles.feedContainer, styles.shortContainer, colors.dcBackground]}>
          <Text style={[styles.headerText, colors.bcText]}>Activity Feed</Text>
          <ScrollView style={styles.largeContainer}>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit
              amet..&quot;, comes from a line in section 1.10.32.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden
              in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
              as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200
              Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
              non-characteristic words etc.
            </Text>
          </ScrollView>
        </View>
        <View style={[styles.largeContainer, styles.feedContainer, styles.tallContainer, colors.mcBackground]}>
          <Text style={[styles.headerText, colors.bcText]}>Recommendations</Text>
          <ScrollView style={styles.largeContainer}>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
              line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
              form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use
              a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text.
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first
              true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
              sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
              free from repetition, injected humour, or non-characteristic words etc.
            </Text>
          </ScrollView>
        </View>
      </View>
      <Footer page={1} uid={user.id}/>
    </View>
  )
}

// just do it together

export default HomeScreen
