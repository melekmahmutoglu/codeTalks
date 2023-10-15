import { StyleSheet } from "react-native";
import Colors from "../../styles/Color/Colors";
import Fonts from "../../styles/Font/Fonts";
import Spaces from "../../styles/Space/Space";

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
        flex: 1,

    },
    error: {
        fontWeight: '400',
        fontSize: 14,
        color: '#c90d0d',
        paddingLeft: Spaces.spaceOutside
    }
})