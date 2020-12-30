import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { darkGray, blue, lightGray } from '../utils/colors';
import Deck from './Deck';
import { connect } from 'react-redux';
import { removeDeck } from '../actions/index';
import { removeDeckAsync } from '../utils/api'

class DeckScreen extends React.Component {

    handleDeleteDeck = id => {
        const { removeDeck, navigation } = this.props
        removeDeck(id);
        removeDeckAsync(id)
        navigation.navigate('Home')
    }


    render() {
        const { deck } = this.props
        if (deck) {
            return (
                <View style={styles.container}>
                    <Deck id={deck.title} />
                    <View style={styles.btn1}>
                        <Button
                            title="Add Card"
                            color='white'
                            onPress={() =>
                                this.props.navigation.navigate('AddCard', { title: deck.title })
                            }
                        />
                    </View>
                    <View style={styles.btn1}>
                        <Button
                            title="Start Quiz"
                            color='white'
                            // disabled={deck.questions.length > 0 ? false : true}
                            onPress={() =>
                                this.props.navigation.navigate('Quiz', { title: deck.title })
                            }
                        />
                    </View>
                    <View style={styles.btn}>
                        <Button
                            title="Delete Deck"
                            color='white'
                            onPress={() => this.handleDeleteDeck(deck.title)}
                        />
                    </View>
                </View>
            )
        } else {
            return null;
        }

    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    btn1: {
        borderColor: blue,
        backgroundColor: blue,
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

function mapStateToProps(state, { route }) {
    const { title } = route.params;
    const deck = state[title];
    return {
        deck
    }
}
export default connect(mapStateToProps, { removeDeck })(DeckScreen);