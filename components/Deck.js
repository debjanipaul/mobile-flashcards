import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
class Deck extends React.Component {

    render() {
        const { deck, navigation } = this.props
        console.log("from deck", deck.title)
        console.log("from deck", deck.questions.length)
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{deck.title}</Text>
                <Text style={styles.length}>{deck.questions.length} Cards</Text>
            </View>
        )
    }
}

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

function mapStateToProps(state, { id }) {
    const deck = state[id]
    return {
        deck
    };
};

export default connect(mapStateToProps)(Deck);