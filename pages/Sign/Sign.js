import { View, Text, SafeAreaView, Alert, } from 'react-native'
import React from 'react'
import styles from './Sign.style'
import Input from '../../components/TextInput/Input';
import Buttons from '../../components/Button/Buttons';
import { Formik } from 'formik';
import { singIn } from '../../firebase/FirebaseAuth';


const initialFormValues = {
    eposta: '',
    password: '',
    againPassword: '',
}

const Sign = ({ navigation }) => {
    const appName = 'codetalks';

    const handleBack = () => {
        navigation.goBack();
    }

    const handleFormSubmit = async (formValues) => {
        if (formValues.password !== formValues.againPassword) {
            Alert.alert('Şifreler Uyuşmuyor');
        }
        try {
            const signIn = await singIn(formValues.eposta, formValues.password)
            navigation.navigate('Main')
        } catch (error) {
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
                    <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                        {
                            ({ values, handleSubmit, handleChange }) => (
                                <>
                                    <Input
                                        placeholder={'e-postanızı giriniz..'}
                                        value={values.eposta}
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
                                    <Input
                                        placeholder={'şifrenizi tekrar giriniz..'}
                                        value={values.againPassword}
                                        onChangeText={handleChange('againPassword')}
                                        type={'default'}
                                        secure={true}
                                    />
                                    <Buttons
                                        name={'Kayıt Ol'}
                                        onPress={handleSubmit}
                                    />
                                </>
                            )
                        }
                    </Formik>
                    <Buttons
                        name={'Geri'}
                        onPress={handleBack}
                        theme='secondary'
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Sign