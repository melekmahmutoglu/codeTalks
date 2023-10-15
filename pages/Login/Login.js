import { View, Text, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/TextInput/Input';
import styles from './Login.style'
import Buttons from '../../components/Button/Buttons';
import { Formik } from 'formik';
import { logIn } from '../../firebase/FirebaseAuth';
import * as Yup from 'yup';

const initialFormValues = {
    eposta: '',
    password: '',

}

const validation = Yup.object().shape({
    eposta: Yup.string()
        .email('Geçerli bir mail adresi girin')
        .required('E-posta zorunludur.'),
    password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır.')
        .required('Şifre zorunludur.')
})

const Error = ({ error }) => (
    <Text style={styles.error}>{error}</Text>
)

const Login = ({ navigation }) => {
    const appName = 'codetalks';

    const handleSignUp = () => {
        navigation.navigate('Sign')
    }


    const handleFormSubmit = async (formValues) => {
        try {
            const user = await logIn(formValues.eposta, formValues.password)
            navigation.navigate('Main')
        } catch (error) {
            Alert.alert('E-posta veya Şifre Hatası...');
            console.log(error);
        }
    }


    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.loginContainer}>
                <View style={styles.appNameText}>
                    <Text style={styles.appNameTitle}>{appName}</Text>
                </View>
                <View style={styles.inputTextContainer}>
                    <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} validationSchema={validation}>
                        {({ values, handleChange, handleSubmit, errors, touched }) => (
                            <>
                                {touched.eposta && errors.eposta && (<Error error={errors.eposta} />)}
                                <Input
                                    placeholder={'E-postanızı giriniz..'}
                                    value={values.username}
                                    onChangeText={handleChange('eposta')}
                                    type={'email-address'}
                                    secure={false}
                                />
                                {touched.password && errors.password && <Error error={errors.password} />}
                                <Input
                                    placeholder={'Şifrenizi giriniz..'}
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