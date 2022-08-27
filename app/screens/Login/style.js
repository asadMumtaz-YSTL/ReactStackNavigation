import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.appBGColor,
        flex: 1,
    },
    heading_box: {
        marginBottom: 20,
        marginTop: 80,
        width: '100%',
    },
    logo: {
        alignSelf: 'center',
        height: 150,
        width: 150,
    },
    heading_text: {
        color: Colors.orange,
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 23,
    },
    input_box: {
        backgroundColor: Colors.inputBoxBG,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 20,
        width: '86%',
        padding: 5,
        height: 55,
    },
    input_label: {
        color: Colors.inputLabel,
        fontWeight: '700',
        marginLeft: 5,
        fontSize: 14,
        flex: 1,
    },
    input: {
        color: Colors.inputColor,
        paddingLeft: 5,
        marginTop: -10,
        fontSize: 16,
        marginTop: 0,
        padding: 0,
        flex: 1,
    },
    error: {
        alignSelf: 'center',
        color: Colors.red,
        marginTop: 15,
        fontSize: 14,
    },
    login_btn: {
        borderColor: Colors.loginBtn,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        overflow: 'hidden',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 30,
        width: '84%',
        height: 55,
    },
    login_btn_text: {
        color: Colors.white,
        fontWeight: '700',
        alignSelf: 'center',
        fontSize: 18,
    },
});
