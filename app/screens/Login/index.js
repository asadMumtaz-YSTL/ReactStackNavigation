import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    Alert,
    TextInput,
    Image,
} from 'react-native';
import { Colors } from '../../styles/colors';
import { styles } from './style';


const Login = ({ navigation, route, ...props }) => {
    // MY HOOKS
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [isError, setError] = useState('');
    const [emailValidate, setEmailValidate] = useState('')
    const [passwordValidate, setPasswordValidate] = useState('')

    const ValidateEmail = (mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            setEmailValidate('')
            return true
        }
        else {
            setEmailValidate('Invalid email format.')
            return false
        }
    }
    const CheckPasswordLength = (text) => {
        if (text.length > 7) { setPasswordValidate('') }
        else {
            setPasswordValidate('password is too short')
        }
    }

    // USER LOGIN FUNCRION
    const loginHandler = async () => {
        if (email.length <= 0) {
            Alert.alert(
                'Warning!',
                '\nPlease Enter Email & Password First...',
                [{
                    text: 'OK',
                    onPress: () => { },
                    style: 'cancel',
                }],
                {
                    cancelable: true,
                    onDismiss: () => { },
                },
            );
        } else {
            navigation.navigate('Home');
        }
    }

    const disabled =
        email == '' ||
        password == '' ||
        emailValidate != '' ||
        passwordValidate != '';

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView alwaysBounceVertical={true}>

                {/* HEADING */}
                <View style={styles.heading_box}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/149/149071.png' }} style={{ width: 130, height: 130, alignSelf: 'center' }} />
                    {/* <Text style={styles.heading_text}>Log In</Text> */}
                </View>

                {/* EMAIL */}
                <View style={styles.input_box}>
                    {email != '' && <Text style={styles.input_label}>Email</Text>}
                    <TextInput
                        placeholder="Please enter your valid E-mail"
                        style={styles.input}
                        value={email}
                        onChangeText={text => {
                            setEmail(text)
                            ValidateEmail(text)
                        }}
                        multiline={false}
                        placeholderTextColor={Colors.inputplaceholder}
                        onFocus={() => setError('')}
                        onBlur={() => { }}
                    />
                </View>
                {
                    (emailValidate && email != '') &&
                    <Text style={{ width: '86%', alignSelf: 'center', color: Colors.red, marginTop: 3, textAlign: 'right' }}>
                        {emailValidate}
                    </Text>
                }

                {/* PASSWORD */}
                <View style={styles.input_box}>
                    {password != '' && <Text style={styles.input_label}>Password</Text>}
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        secureTextEntry={secureTextEntry}
                        value={password}
                        onChangeText={text => {
                            setPassword(text)
                            CheckPasswordLength(text)
                        }}
                        multiline={false}
                        placeholderTextColor={Colors.inputplaceholder}
                        onFocus={() => setError('')}
                        onBlur={() => { }}
                    />
                </View>
                {
                    (passwordValidate && password != '') &&
                    <Text style={{ width: '86%', alignSelf: 'center', color: Colors.red, marginTop: 3, textAlign: 'right' }}>
                        {passwordValidate}
                    </Text>
                }


                {/* LOGIN ERROR */}
                {isError != '' && <Text style={styles.error}>{isError}</Text>}

                {/* LOGIN BUTTON */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.login_btn, { borderColor: disabled ? Colors.gray : Colors.green }]}
                    disabled={disabled}
                    onPress={() => {
                        loginHandler();
                    }}>
                    <Text style={[styles.login_btn_text, { color: disabled ? Colors.black : Colors.white, }]}>Continue</Text>
                </TouchableOpacity>

                {/* NOTE */}
                <Text style={{ width: '80%', alignSelf: 'center', marginTop: 20, color: Colors.white, fontSize: 14, lineHeight: 20, textAlign: 'center', letterSpacing: 0.5 }}>
                    <Text style={{ color: Colors.white, fontWeight: '900', }}>NOTE:</Text>
                    {' Enter Any Dummy Email & Password For Login.'}
                </Text>
            </ScrollView>
        </SafeAreaView >
    );
};

export default Login;
