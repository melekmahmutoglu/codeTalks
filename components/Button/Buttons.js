import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Buttons.style'

const Buttons = ({ name, onPress, theme = 'primary' }) => {
    return (
        <View style={styles[theme].btnContainer}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles[theme].btnName}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Buttons