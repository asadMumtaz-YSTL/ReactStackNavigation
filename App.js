// https://reactnative.dev/docs/navigation

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './app/screens/Login/index';
import Home from './app/screens/Home/index';
import Profile from './app/screens/Profile/index';

const Stack = createNativeStackNavigator();

const App = ({ navigation, ...props }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    lazy: true,
                    headerStyle: {
                        backgroundColor: '#000000',
                    },
                    headerTintColor: '#FFFFFF',
                    contentStyle: { backgroundColor: '#303030' },
                }}>
                <Stack.Screen
                    name="Login" // your stack/natigation name
                    component={Login} // pass component that you want to display
                    options={{
                        title: 'LOG IN', // show title in header
                        headerShown: true, // show & hide header
                        // header: () => (<View style={{ height: 50, flexDirection:'row', }}><Text>TITLE</Text><Text>TITLE</Text></View>), //for make custom header
                        // headerStyle: {backgroundColor: '#303030',},
                        headerTintColor: '#FFF', // for text in header
                        // whole screen elese header
                        contentStyle: {
                            backgroundColor: '#303030',
                            width: '100%',
                        },
                        // headerLeft: () => ( <Text>Back</Text> ),  // for add text/Icon on left side of the header
                        // headerRight: () => (<Image source={require('./app/assets/images/image.png')} style={{height:35, width:35,}}/>), // for add text/Icon on right side of the header
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: true,
                        title:'HOME'
                    }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: true,
                        title: 'PROFILE',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;