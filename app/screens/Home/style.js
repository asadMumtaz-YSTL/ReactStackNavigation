import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.appBGColor,
        flex: 1,
    },
    heading_box: {
        alignSelf: 'center',
        marginTop: 40,
        width: '90%',
    },
    heading_text: {
        color: Colors.orange,
        alignSelf: 'center',
        textAlign:'center',
        fontWeight: '700',
        fontSize: 23,
    },
    login_btn: {
        borderColor: Colors.loginBtn,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        overflow: 'hidden',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 50,
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
