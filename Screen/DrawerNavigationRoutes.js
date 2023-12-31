
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from './DrawerScreens/HomeScreen';
import FdlAirCreen from './DrawerScreens/FdlAirCreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import Limbah from './DrawerScreens/AIR/Limbah';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({ navigation }) => {
    console.log('masuk home')
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Home', //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
                    headerStyle: {
                        backgroundColor: '#307ecc', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
};

const FdlAirStack = ({ navigation }) => {
    
    return (
        <Stack.Navigator
            initialRouteName="FdlAirCreen"
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerHeader navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#307ecc', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>

            <Stack.Screen
                name="FdlAirCreen"
                component={FdlAirCreen}
                options={{
                    title: 'FDL AIR',
                }}
            />

            <Stack.Screen
                name="LimbahScreen"
                component={Limbah}
                options={{
                    title: 'Limbah',
                }}
            />
        </Stack.Navigator>
    );
};

const DrawerNavigatorRoutes = (props) => {
    return (
        <Drawer.Navigator
            screenOptions={{
                activeTintColor: '#cee1f2',
                color: '#cee1f2',
                itemStyle: { marginVertical: 5, color: 'white' },
                labelStyle: {
                    color: '#d8d8d8',
                },
                headerShown: false,
                drawerActiveTintColor:"white",
                drawerInactiveTintColor:"white" 
            }}
            drawerContent={CustomSidebarMenu}>
            <Drawer.Screen
                name="homeScreenStack"
                options={{ drawerLabel: 'Home Screen' }}
                component={HomeScreenStack}
            />
            <Drawer.Screen
                name="FdlAirStack"
                options={{ drawerLabel: 'FDL AIR' }}
                component={FdlAirStack}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigatorRoutes;