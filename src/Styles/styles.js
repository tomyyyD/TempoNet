import { Kanit_500Medium } from "@expo-google-fonts/kanit";
import { StyleSheet } from "react-native";

//palette
const BACKGROUND_COLOR = '#2F2F2F';
const MAIN_COLOR = "#B0B3EB";
const HIGHLIGHT_COLOR_PINK = "#D1ACF6";
const LIGHTER_COLOR = "#A294D4";
const HIGHLIGHT_COLOR_BLUE = "#ACD7F6";
const DARKER_COLOR = "#94A8D4";

const styles = StyleSheet.create({
    fullContainer: {
        width: '100%',
    },
    largeContainer: {
        width: '87%',
    },
    mediumContainer: {
        width: '60%',
    },
    smallContianer: {
        width: '40%',
    },
    contentContainer: {
        paddingTop: 60,
        flex: 1,
        alignItems: 'center',
    },
    horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    decoration: {
        width: '60%',
        height: 20,
        borderRadius: 5,
    },
    titleText: {
        fontSize: 40,
        fontFamily: 'Kanit_500Medium',
    },
    titleImage: {
        height: 128,
        width: 128,
        tintColor: MAIN_COLOR,
    },
    subTitleText: {
        fontSize: 32,
        fontFamily: 'Kanit_500Medium',
    },
    headerText: {
        fontSize: 24,
        fontFamily: 'Kanit_500Medium',
    },
    fieldsContainer: {
        paddingTop: 20,
        width: '100%',
        alignItems: "center",
    },
    inputContainer: {
        borderBottomWidth: 5,
        marginBottom: 25,
    },
    inputText: {
        fontSize: 16,
        fontFamily: 'Kanit_500Medium',
        margin: 5,
    },
    button: {
        alignItems: 'center',
        margin: 10,
        padding: 8,
        width: '60%',
        borderRadius: 10,
    },
    buttonAlt: {
        alignItems: 'center',
        margin: 10,
        padding: 8,
        width: '60%',
        borderRadius: 10,
        borderWidth: 3,
    },
    //Sign In Page Specific
    signInContainer: {
        paddingTop: 60,
        width: '100%',
        alignItems: 'center'
    },
    //register specific
    registerContainer: {
        paddingTop: 30,
        width: '100%',
        alignItems: 'center'
    },

});

export default styles;