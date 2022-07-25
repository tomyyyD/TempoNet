import { StyleSheet } from 'react-native'

// palette
const MAIN_COLOR = '#B0B3EB'

const styles = StyleSheet.create({
  fullContainer: {
    width: '100%'
  },
  largeContainer: {
    width: '87%'
  },
  mediumContainer: {
    width: '60%'
  },
  smallContianer: {
    width: '40%'
  },
  tallContainer: {
    height: '55%'
  },
  shortContainer: {
    height: '28%'
  },
  contentContainer: {
    paddingTop: 60,
    flex: 1,
    alignItems: 'center'
  },
  mainContentContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  decoration: {
    width: '60%',
    height: 20,
    borderRadius: 5
  },
  titleText: {
    fontSize: 40,
    fontFamily: 'Kanit_500Medium'
  },
  titleImage: {
    height: 128,
    width: 128,
    tintColor: MAIN_COLOR
  },
  subTitleText: {
    fontSize: 32,
    fontFamily: 'Kanit_500Medium'
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Kanit_500Medium'
  },
  fieldsContainer: {
    paddingTop: 20,
    width: '100%',
    alignItems: 'center'
  },
  inputContainer: {
    borderBottomWidth: 5,
    marginBottom: 25
  },
  inputText: {
    fontSize: 16,
    fontFamily: 'Kanit_500Medium',
    margin: 5
  },
  button: {
    alignItems: 'center',
    margin: 10,
    padding: 8,
    width: '60%',
    borderRadius: 10
  },
  buttonAlt: {
    alignItems: 'center',
    margin: 10,
    padding: 8,
    width: '60%',
    borderRadius: 10,
    borderWidth: 3
  },
  footer: {
    paddingBottom: 40,
    width: '100%',
    alignItems: 'space-evenly',
    justifyContent: 'center'
  },
  footerImage: {
    height: 32,
    width: 32
  },
  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48
  },
  underline: {
    height: 4,
    width: 48,
    marginTop: 10
  },
  addBorder: {
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2
  },
  // Sign In Page Specific
  signInContainer: {
    paddingTop: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  // register specific
  registerContainer: {
    paddingTop: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  // home page specific
  feedContainer: {
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10
  }
})

export default styles
