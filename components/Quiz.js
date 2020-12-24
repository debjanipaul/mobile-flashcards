import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Quiz extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.questCount}>2/2</Text>
                <Text style={styles.questTitle}>Does React native work with Android?</Text>
                <Text style={styles.AnsOrQuestTitle}>Answer</Text>
                <View style={styles.btnCorrect}>
                    <Button
                        title="Correct"
                        color="white"
                        fontWeight="bold"
                    />
                </View>
                <View style={styles.btnIncorrect}>
                    <Button
                        title="Incorrect"
                        color="white"
                        fontWeight="bold"
                    />
                </View>
            </View>
        )
    }
}
export default Quiz;

const styles = StyleSheet.create({

    container: {
        minWidth: 350,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0
    },
    questCount: {
        fontSize: 20,
        marginBottom: 20,
        alignSelf: 'flex-start',
        paddingLeft: 15
    },
    questTitle: {
        fontSize: 25,
        color: 'blue',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20,
    },
    AnsOrQuestTitle: {
        fontSize: 20,
        marginTop: 50,
        marginBottom: 50,
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold'
    },

    btnCorrect: {
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 1,
        paddingRight: 5,
        paddingLeft: 5,
        borderRadius: 5,
        marginBottom: 20
    },
    btnIncorrect: {
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20
    }
})
