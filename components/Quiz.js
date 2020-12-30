import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import { darkGray, blue, white, green, lightGreen } from '../utils/colors';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';

class Quiz extends React.Component {
    state = {
        showText: false,
        questionCounter: 0,
        correctAns: 0
    }
    handleRestart = () => {
        this.setState({
            showText: false,
            questionCounter: 0,
            correctAns: 0
        })
        this.props.navigation.navigate('Quiz')
    }
    handleGoToHome = () => {
        this.handleRestart();
        this.props.navigation.navigate('Home')
    }
    handleSubmit = (correct) => {
        if (correct) {
            this.setState((prevState) => ({
                correctAns: prevState.correctAns + 1,

            }))
        }
        this.setState((prevState) => ({
            questionCounter: prevState.questionCounter + 1
        }))

        clearLocalNotification()
            .then(setLocalNotification)
    }

    render() {
        const { questions } = this.props.deck
        const { showText, questionCounter, correctAns } = this.state
        console.log('Quiz', questions.length)

        //If empty deck:
        if (questions.length === 0) {
            return (
                <View style={styles.NoDeckContainer}>
                    <Text style={styles.cap1}>No cards in the Deck.</Text>
                    <Text style={styles.cap2}>To play, add cards and try again.</Text>
                </View>
            )
        }
        //If Quiz completed
        if (this.state.questionCounter === questions.length) {
            return (
                <View style={styles.scoreContainer}>
                    <Text style={styles.scoreCap1}>Your Score</Text>
                    <Text style={styles.scoreCap2}>You answered {correctAns}/{questions.length} answers right</Text>
                    <View style={styles.btnRestart}>
                        <Button
                            title="Restart Quiz"
                            color='white'
                            onPress={this.handleRestart}
                        />
                    </View>
                    <View style={styles.btnGoBack}>
                        <Button
                            title="Go Back"
                            color='white'
                            onPress={this.handleGoToHome}
                        />
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={styles.questCount}>{questionCounter + 1}/{questions.length}</Text>
                <Text style={styles.questTitle}>{showText
                    ? questions[questionCounter].answer
                    : questions[questionCounter].question}
                </Text>
                <TouchableOpacity
                    onPress={() => this.setState({ showText: !showText })}
                >
                    <Text style={styles.AnsOrQuestTitle}>{showText ? 'Show Question' : 'Show Answer'}</Text>
                </TouchableOpacity>
                <View style={styles.btnCorrect}>
                    <Button
                        title="Correct"
                        color="white"
                        fontWeight="bold"
                        onPress={() => this.handleSubmit(true)}
                    />
                </View>
                <View style={styles.btnIncorrect}>
                    <Button
                        title="Incorrect"
                        color="white"
                        fontWeight="bold"
                        onPress={() => this.handleSubmit(false)}
                    />
                </View>
            </View>
        )
    }
}

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
        paddingLeft: 15,
        paddingTop: 20
    },
    questTitle: {
        fontSize: 30,
        fontWeight: '700',
        color: blue,
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
        backgroundColor: blue,
        borderColor: blue,
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
    },
    NoDeckContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: -150

    },
    cap1: {
        fontSize: 30,
        textAlign: 'center',
        color: blue,
        fontWeight: '700'

    },
    cap2: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
        color: blue,
        fontWeight: '400'

    },
    scoreContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: -120
    },
    scoreCap1: {
        fontSize: 30,
        textAlign: 'center',
        color: 'red',
        fontWeight: '700'
    },
    scoreCap2: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 30,
        marginBottom: 40,
        textAlign: 'center',
        color: blue,
    },
    btnRestart: {
        backgroundColor: blue,
        borderColor: blue,
        borderWidth: 1,
        paddingRight: 5,
        paddingLeft: 5,
        borderRadius: 5,
        marginBottom: 20,
        width: 150,
        alignSelf: 'center'
    },
    btnGoBack: {
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        width: 150,
        alignSelf: 'center'
    },

})

function mapStateToProps(state, { route }) {
    const { title } = route.params;
    const deck = state[title];
    return {
        deck
    }
}
export default connect(mapStateToProps)(Quiz)
