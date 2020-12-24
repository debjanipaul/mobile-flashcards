import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Deck extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Deck 1</Text>
                <Text style={styles.length}>3 Cards</Text>
            </View>
        )
    }
}
export default Deck;

const styles = StyleSheet.create({
    container: {
        borderRadius: 1,
        borderWidth: 1,
        minHeight: 120,
        minWidth: 350,
        borderColor: 'gray',
        marginBottom: 10,
        flexBasis: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    length: {
        textAlign: "center",
        fontSize: 18
    }
})