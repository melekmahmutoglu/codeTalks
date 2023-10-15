import { View, TextInput } from 'react-native'
import React from 'react'
import styles from './Input.style'

const Input = ({ value, onChangeText, placeholder, type, secure }) => {
    return (
        <View style={styles.inputView}>
            <TextInput
                autoCapitalize='none'
                style={styles.inputStyle}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                keyboardType={type}
                secureTextEntry={secure}
            />
        </View>
    )
}

export default Input