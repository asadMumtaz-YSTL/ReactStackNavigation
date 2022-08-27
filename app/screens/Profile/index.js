import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import { styles } from './style';

const Profile = ({ navigation, route, ...props }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView alwaysBounceVertical={true}>

                {/* HEADING */}
                <View style={styles.heading_box}>
                    <Text style={styles.heading_text}>
                        Now you're on Profile Screen.
                    </Text>
                </View>
                {/* BUTTON */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.login_btn}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}>
                    <Text style={styles.login_btn_text}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.login_btn}
                    onPress={() => {
                        navigation.navigate('Login');
                    }}>
                    <Text style={styles.login_btn_text}>Log Out</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView >
    );
};

export default Profile;
