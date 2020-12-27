import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import Deck from './Deck';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/index';


class DeckList extends React.Component {

    componentDidMount() {
        this.props.handleInitialData();
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.mainTitle}>Choose Your Deck</Text>
                <Deck />
                <Deck />
                <Deck />
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

const mapStateToProps = state => ({ decks: state });

export default connect(
    mapStateToProps,
    { handleInitialData }
)(DeckList);