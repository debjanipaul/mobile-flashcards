import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DeckList from '../components/DeckList';
import AddDeck from '../components/AddDeck';
import { darkGray, blue } from '../utils/colors';
import { Platform } from 'react-native';
import { Screen, screensEnabled } from 'react-native-screens';
import { enableScreens } from 'react-native-screens';


const Tab = createBottomTabNavigator();
enableScreens();
const isIOS = Platform.OS === 'ios' ? true : false;

const INITIAL_ROUTE_NAME = 'Decks';


export default function TabNavigator() {

    return (
        <Tab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <Tab.Screen
                name="Decks"
                component={DeckList}
                options={{
                    title: 'Decks',
                    tabBarIcon: () =>
                        <Ionicons
                            color={darkGray}
                            name={isIOS ? 'ios-home' : 'md-home'}
                            size={20}
                        />,
                }}
            />
            <Tab.Screen
                name="AddDeck"
                component={AddDeck}
                options={{
                    title: 'AddDeck',
                    tabBarIcon: () =>
                        <Ionicons
                            color={darkGray}
                            name={isIOS ? 'ios-add-circle' : 'md-add-circle'}
                            size={20}
                        />
                }}
            />
        </Tab.Navigator>
    )

}
