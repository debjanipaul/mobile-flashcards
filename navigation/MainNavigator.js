import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import DeckScreen from '../components/DeckScreen';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';
import TabNavigator from './TabNavigator';
import { enableScreens } from 'react-native-screens';
import { blue, white } from '../utils/colors';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

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
            headerTintColor: 'white',
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
            headerTintColor: 'white',
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
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: blue
            },
        },
    },
}
function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'
    switch (routeName) {
        case 'Home':
            return 'Home'
        case 'AddDeck':
            return 'Add Deck'
    }
}

const MainNavigator = () => (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            gestureEnabled: true,
            headerStyle: {
                backgroundColor: blue
            },
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTintColor: white
        }}
        {...StackNavigatorConfig}>
        <Stack.Screen name="Home"
            component={TabNavigator}
            options={({ route }) => ({
                headerTitle: getHeaderTitle(route)
            })}
        />
        <Stack.Screen {...StackConfig['DeckScreen']} />
        <Stack.Screen {...StackConfig['Quiz']} />
        <Stack.Screen {...StackConfig['AddCard']} />
    </Stack.Navigator>
)

export default MainNavigator