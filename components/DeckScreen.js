import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Deck from './Deck'

class DeckScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Deck />
                <View style={styles.btn1}>
                    <Button
                        title="Add Card"
                        color='white'
                    />
                </View>
                <View style={styles.btn1}>
                    <Button
                        title="Start Quiz"
                        color='white'
                    />
                </View>
                <View style={styles.btn}>
                    <Button
                        title="Delete Deck"
                        color='white'
                    />
                </View>
            </View>
        )
    }
}

export default DeckScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    btn1: {
        borderColor: 'blue',
        backgroundColor: 'blue',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 40,
        fontWeight: "bold",
        paddingRight: 10,
        paddingLeft: 10

    },
    btn: {
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        marginTop: 40,
    }
})