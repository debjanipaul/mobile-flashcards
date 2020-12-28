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
        // console.log('decks from decklist', decks)

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.mainTitle}>Choose Your Deck</Text>
                {Object.keys(decks).map(id => {
                    return (
                        <TouchableOpacity
                            key={id}
                        // onPress={() => {
                        //     navigation.navigate('DeckScreen', { deckId: decks[id].title })
                        // }}
                        >
                            <Deck
                                key={id}
                                deck={decks[id]}
                                id={id}
                                navigation={navigation}
                            />

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

// const mapStateToProps = state => ({ decks: state });

// export default connect(
//     mapStateToProps,
//     { handleInitialData }
// )(DeckList);

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps, { handleInitialData })(DeckList)
