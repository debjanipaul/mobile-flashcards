import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
// import DeckList from './components/DeckList';
// import AddDeck from './components/AddDeck';
// import DeckScreen from './components/DeckScreen';
// import AddCard from './components/AddCard';
// import Quiz from './components/Quiz'


export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <DeckList />
      <AddDeck />
      <DeckScreen />
      <AddCard /> */}
        {/* <Quiz /> */}
        <NavigationContainer >
          <MainNavigator />
        </NavigationContainer>
      </View>

    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
