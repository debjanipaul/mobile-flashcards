import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class AddDeck extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>What is the Title of your new deck?</Text>
                <TextInput style={styles.deckTitle}
                    placeholder="Add Deck Name"
                />
                <View style={styles.btn}>
                    <Button
                        title="Create Deck"
                        color="white"
                        fontWeight="bold"
                    />
                </View>
            </View>
        )
    }
}
export default AddDeck;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 1,
        // borderWidth: 1,
        // minHeight: 120,
        minWidth: 350,
        // borderColor: 'red',
        marginBottom: 20,
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        color: 'blue',
        fontWeight: 'bold',
        paddingTop: 50,
        paddingLeft: 15,
        paddingRight: 15
    },
    deckTitle: {
        fontSize: 20,
        height: 40,
        minWidth: 300,
        borderColor: "gray",
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        fontSize: 20,
        height: 40,
        marginTop: 80,
        marginBottom: 40,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20
    }

})