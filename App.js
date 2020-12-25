import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator'
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import DeckScreen from './components/DeckScreen';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz'

export default function App() {
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
