import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { pink, red, gray, blue } from '../utils/colors';
import { connect } from 'react-redux';
import { NavigationEvents } from 'react-navigation';
class Deck extends React.Component {

    render() {
        const { deck, navigation } = this.props
        // console.log("from deck", deck.title)
        // console.log("from deck", deck.questions.length)
        return (
            <View style={styles.container}>
                <View >
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={styles.length}>{deck.questions.length} Cards</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        minHeight: 100,
        minWidth: 350,
        backgroundColor: pink,
        borderColor: gray,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 20,
        flexBasis: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bold',
        color: red
    },
    length: {
        textAlign: "center",
        fontSize: 18,
        color: blue,
        fontWeight: '700'
    }
})

function mapStateToProps(state, { id }) {
    const deck = state[id]
    return {
        deck
    };
};

export default connect(mapStateToProps)(Deck);