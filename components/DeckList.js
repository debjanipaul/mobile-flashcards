import React from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Deck from './Deck';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/index';

class DeckList extends React.Component {

    componentDidMount() {
        this.props.handleInitialData();
    }

    render() {
        const { decks, navigation } = this.props;
        if (!decks) {
            return <Text>No decks to show yet.</Text>
        }
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.mainTitle}>Choose Your Deck</Text>
                {Object.values(decks).map(deck => {
                    return (
                        <TouchableOpacity
                            key={deck.title}
                            onPress={() => {
                                navigation.navigate('DeckScreen', { title: deck.title })
                            }}
                        >
                            <Deck id={deck.title} />
                        </TouchableOpacity>
                    )
                }
                )}
            </ScrollView>
        )
    }
}
//  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center'
    },
    mainTitle: {
        textAlign: "center",
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
        marginBottom: 30
    }
})

function mapStateToProps(state) {
    const decks = state
    return {
        decks
    }
}

export default connect(mapStateToProps, { handleInitialData })(DeckList);

