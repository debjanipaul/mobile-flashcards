import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import DeckList from '../components/DeckList';
import AddDeck from '../components/AddDeck';
import DeckScreen from '../components/DeckScreen';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';
import TabNavigator from './TabNavigator';
import { Screen, screensEnabled } from 'react-native-screens';
import { enableScreens } from 'react-native-screens';

import { darkGray, blue, white, green, lightGreen } from '../utils/colors';
const isIOS = Platform.OS === 'ios' ? true : false;
enableScreens();
const Stack = createStackNavigator();

const StackNavigatorConfig = {
    headerMode: "screen"
}

const StackConfig = {
    DeckScreen: {
        name: "DeckScreen",
        component: DeckScreen,
        options: {
            title: 'DeckScreen',
            headerTintColor: 'red',
            headerStyle: {
                backgroundColor: blue
            },
        },
    },
    Quiz: {
        name: "Quiz",
        component: Quiz,
        options: {
            title: 'Quiz',
            headerTintColor: 'red',
            headerStyle: {
                backgroundColor: blue
            },
        },
    },
    AddCard: {
        name: "AddCard",
        component: AddCard,
        options: {
            title: 'Add Card',
            headerTintColor: 'red',
            headerStyle: {
                backgroundColor: blue
            },
        },
    },
}

const MainNavigator = () => (
    <Stack.Navigator
        initialRouteName="Root"  {...StackNavigatorConfig}>
        <Stack.Screen name="Root" component={TabNavigator} />
        <Stack.Screen {...StackConfig['DeckScreen']} />
        <Stack.Screen {...StackConfig['Quiz']} />
        <Stack.Screen {...StackConfig['AddCard']} />
    </Stack.Navigator>
)

export default MainNavigator