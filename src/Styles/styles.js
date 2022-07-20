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
    contentContainer: {
        paddingTop: 60,
        flex: 1,
        alignItems: 'center',
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
    },
    inputContainer: {
        borderBottomWidth: 5,
        width: '60%',
    },
    inputText: {
        fontSize: 16,
    },
    //Sign In Page Specific
    signInContainer: {
        paddingTop: 50,
        width: '100%',
        alignItems: 'center'
    },
});

export default styles;