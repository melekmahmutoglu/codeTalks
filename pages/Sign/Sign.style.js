import { StyleSheet } from "react-native";
import Colors from "../../styles/Color/Colors";
import Fonts from "../../styles/Font/Fonts";

export default StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: Colors.sun
    },
    loginContainer: {
        flex: 1,

    },
    appNameText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appNameTitle: {
        color: Colors.whiteSmoke,
        fontSize: Fonts.appName,
        fontWeight: Fonts.appNameWeight,

    },
    inputTextContainer: {
        flex: 1.2,
    },
})