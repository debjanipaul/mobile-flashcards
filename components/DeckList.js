import React from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Animated, Easing } from 'react-native';
import { lightGray, gray, blue, pink, red } from '../utils/colors';
// import Deck from './Deck';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/index';

class DeckList extends React.Component {
    state = {
        fadeValue: new Animated.Value(0)
    };

    startFade = () => {
        Animated.timing(this.state.fadeValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.bezier(0, 1.19, 0.74, 1.2),
        }).start();
    };

    componentDidMount() {
        this.props.handleInitialData();
    }

    // handlePress = () => {
    //     const { deck, navigation } = this.props
    //     this.startFade()
    //     navigation.navigate('DeckScreen', { title: deck.title })
    // }

    render() {

        const { decks, navigation } = this.props;
        if (!decks) {
            return <Text>No decks to show yet.</Text>
        }
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.mainTitle}>Choose Deck</Text>
                {Object.values(decks).map(deck => {
                    return (
                        <TouchableOpacity
                            key={deck.title}
                            onPress={() => {
                                this.startFade()
                                navigation.navigate('DeckScreen', { title: deck.title })
                            }}
                        >
                            <Animated.View
                                style={{
                                    transform: [
                                        {
                                            scale: this.state.fadeValue.interpolate({
                                                inputRange: [0, 0.5, 1],
                                                outputRange: [1, 0.5, 1]
                                            })
                                        }
                                    ],
                                }}
                            >
                                {/* <Deck id={deck.title} /> */}
                                <View style={styles.deckContainer}>
                                    <Text style={styles.title}>{deck.title}</Text>
                                    <Text style={styles.length}>{deck.questions.length} Cards</Text>
                                </View>
                            </Animated.View>
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
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: lightGray
    },
    mainTitle: {
        textAlign: "center",
        fontSize: 30,
        color: blue,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 30
    },
    deckContainer: {
        borderWidth: 1,
        minHeight: 100,
        minWidth: 300,
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
        fontSize: 25,
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

function mapStateToProps(state) {
    const decks = state
    return {
        decks
    }
}

export default connect(mapStateToProps, { handleInitialData })(DeckList);

