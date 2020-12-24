import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Deck from './Deck'

class DeckList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainTitle}>Choose Your Deck</Text>
                <Deck />
                <Deck />
                <Deck />
            </View>
        )
    }
}
export default DeckList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    mainTitle: {
        textAlign: "center",
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
        marginBottom: 30
    }
})