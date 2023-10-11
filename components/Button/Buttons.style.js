import { StyleSheet } from "react-native";
import Colors from "../../styles/Color/Colors";
import Spaces from "../../styles/Space/Space";
import Fonts from "../../styles/Font/Fonts";

const baseStyle = StyleSheet.create({
    btnContainer: {
        padding: Spaces.spaceInside,
        margin: Spaces.spaceOutside,
        borderRadius: 10,
    },
    btnName: {
        fontSize: Fonts.buttonSize,
        padding: Spaces.spaceInside5,
        alignSelf: 'center',
        fontWeight: Fonts.buttonSizeWeight,
    },
})

export default {
    primary: StyleSheet.create({
        ...baseStyle,
        btnContainer: {
            ...baseStyle.btnContainer,
            backgroundColor: Colors.rajah,
        },
        btnName: {
            ...baseStyle.btnName,
            color: Colors.white,
        }
    }),
    secondary: StyleSheet.create({
        ...baseStyle,
        btnContainer: {
            ...baseStyle.btnContainer,
            backgroundColor: Colors.white,
            borderWidth: 1,
            borderColor: Colors.rajah,
        },
        btnName: {
            ...baseStyle.btnName,
            color: Colors.rajah,
        }
    })
}