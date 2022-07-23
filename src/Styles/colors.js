import { StyleSheet } from 'react-native'

const BACKGROUND_COLOR = '#2F2F2F'
const MAIN_COLOR = '#B0B3EB'
const HIGHLIGHT_COLOR_PINK = '#D1ACF6'
const LIGHTER_COLOR = '#A294D4'
const HIGHLIGHT_COLOR_BLUE = '#ACD7F6'
const DARKER_COLOR = '#94A8D4'

const colors = StyleSheet.create({
  bcText: {
    color: BACKGROUND_COLOR
  },
  mcText: {
    color: MAIN_COLOR
  },
  hcpText: {
    color: HIGHLIGHT_COLOR_PINK
  },
  lcText: {
    color: LIGHTER_COLOR
  },
  hcbText: {
    color: HIGHLIGHT_COLOR_BLUE
  },
  dcText: {
    color: DARKER_COLOR
  },
  bcBackground: {
    backgroundColor: BACKGROUND_COLOR
  },
  mcBackground: {
    backgroundColor: MAIN_COLOR
  },
  hcpBackground: {
    backgroundColor: HIGHLIGHT_COLOR_PINK
  },
  lcBackground: {
    backgroundColor: LIGHTER_COLOR
  },
  hcbBackground: {
    backgroundColor: HIGHLIGHT_COLOR_BLUE
  },
  dcBackground: {
    backgroundColor: DARKER_COLOR
  },
  bcBorder: {
    borderColor: BACKGROUND_COLOR
  },
  mcBorder: {
    borderColor: MAIN_COLOR
  },
  hcpBorder: {
    borderColor: HIGHLIGHT_COLOR_PINK
  },
  lcBorder: {
    borderColor: LIGHTER_COLOR
  },
  hcbBorder: {
    borderColor: HIGHLIGHT_COLOR_BLUE
  },
  dcBorder: {
    borderColor: DARKER_COLOR
  },
  mcTint: {
    tintColor: MAIN_COLOR
  },
  hcpTint: {
    tintColor: HIGHLIGHT_COLOR_PINK
  },
  hcbTint: {
    tintColor: HIGHLIGHT_COLOR_BLUE
  }
})

export default colors
