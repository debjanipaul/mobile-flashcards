import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class AddCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.deckTitle}
                    placeholder="Enter your question"
                />
                <TextInput style={styles.deckTitle}
                    placeholder="Enter your answer"
                />
                <View style={styles.btn}>
                    <Button
                        title="Submit"
                        color="white"
                        fontWeight="bold"
                    />
                </View>
            </View>
        )
    }
}
export default AddCard;

const styles = StyleSheet.create({

    container: {
        marginBottom: 20,
        flexBasis: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deckTitle: {
        fontSize: 20,
        height: 45,
        minWidth: 300,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        fontSize: 20,
        height: 40,
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