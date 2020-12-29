import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions/index';

class AddDeck extends React.Component {

    state = {
        text: ''
    };

    handleChange = text => {
        this.setState({ text });
    };

    handleSubmit = () => {
        const { addDeck, navigation } = this.props;
        console.log('hello')

        addDeck(this.state.text);
        this.setState(() => ({ text: '' }));
        navigation.navigate('Home')
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>What is the Title of your new deck?</Text>
                <TextInput style={styles.deckTitle}
                    placeholder="Add Deck Name"
                    value={this.state.text}
                    onChangeText={this.handleChange}
                />
                <View style={styles.btn}>
                    <TouchableOpacity>
                        <Button
                            title="Create Deck"
                            color="white"
                            fontWeight="bold"
                            disabled={this.state.text === ''}
                            onPress={this.handleSubmit}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

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

export default connect(null, { addDeck })(AddDeck);