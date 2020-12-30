import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { darkGray, blue, white, green, lightGreen } from '../utils/colors';
import { addCard } from '../actions/index';
import { connect } from 'react-redux';
import { addCardToDeck } from '../utils/api';

class AddCard extends React.Component {

    state = {
        question: '',
        answer: ''
    }
    handleChangeQuest = (question) => {
        this.setState({ question })
    }
    handleChangeAns = (answer) => {
        this.setState({ answer })
    }
    handleSubmit = () => {
        const { addCard, title, navigation } = this.props
        const card = {
            question: this.state.question,
            answer: this.state.answer
        }
        addCard(title, card)
        addCardToDeck(title, card);

        console.log('card details', card)
        this.setState = ({
            question: '',
            answer: ''
        })
        navigation.goBack()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.caption}>Enter Your Question</Text>
                <TextInput style={styles.deckTitle}
                    placeholder="e.g: What work can one never finish ?"
                    value={this.state.question}
                    onChangeText={this.handleChangeQuest}
                />
                <Text style={styles.caption}>Enter Your Answer</Text>
                <TextInput style={styles.deckTitle}
                    placeholder="e.g: An AutoBiography"
                    value={this.state.answer}
                    onChangeText={this.handleChangeAns}
                />
                <View style={styles.btn}>
                    <Button
                        title="Submit"
                        color="white"
                        fontWeight="bold"
                        onPress={this.handleSubmit}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        // marginBottom: 20,
        // flexBasis: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    caption: {
        fontSize: 25,
        fontWeight: '700',
        alignSelf: 'center',
        // textAlign: 'left',
        // paddingLeft: 50,
        color: blue,
        paddingTop: 30,
        marginBottom: 20

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
        textAlign: 'left'
    },
    btn: {
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20
    }
})

function mapStateToProps(state, { route }) {
    const { title } = route.params;
    return {
        title
    }
}
export default connect(mapStateToProps, { addCard })(AddCard);