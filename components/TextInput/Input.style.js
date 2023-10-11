import { StyleSheet } from "react-native";
import Fonts from "../../styles/Font/Fonts";
import Colors from "../../styles/Color/Colors";
import Spaces from "../../styles/Space/Space";

export default StyleSheet.create({
    inputView: {
        padding: Spaces.spaceInside,
        margin: Spaces.spaceOutside

    },
    inputStyle: {
        color: Colors.pinkSwan,
        borderBottomWidth: 1.5,
        borderColor: Colors.whisper,
        fontSize: Fonts.inputSize,
        padding: Spaces.spaceInside5,
        color: Colors.white,
    },
})