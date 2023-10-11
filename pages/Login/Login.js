import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/TextInput/Input';
import styles from './Login.style'
import Buttons from '../../components/Button/Buttons';
import { Formik } from 'formik';


const initialFormValues = {
    eposta: '',
    password: '',

}

const Login = ({ navigation }) => {
    const appName = 'codetalks';

    const handleSignIn = () => {
        navigation.navigate('Main')
    }

    const handleSignUp = () => {
        navigation.navigate('Sign')
    }


    const handleFormSubmit = (formValues) => {
        console.log(formValues);
    }


    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.loginContainer}>
                <View style={styles.appNameText}>
                    <Text style={styles.appNameTitle}>{appName}</Text>
                </View>
                <View style={styles.inputTextContainer}>
                    <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                        {({ values, handleChange, handleSubmit }) => (
                            <>
                                <Input
                                    placeholder={'e-postanızı giriniz..'}
                                    value={values.username}
                                    onChangeText={handleChange('eposta')}
                                    type={'email-address'}
                                    secure={false}
                                />
                                <Input
                                    placeholder={'şifrenizi giriniz..'}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    type={'default'}
                                    secure={true}
                                />
                                <Buttons
                                    name={'Giriş Yap'}
                                    onPress={handleSubmit}
                                />
                            </>)
                        }
                    </Formik>
                    <Buttons
                        name={'Kayıt Ol'}
                        onPress={handleSignUp}
                        theme='secondary'
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login