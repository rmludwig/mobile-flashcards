import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { red, green, blue, slate, gray, white } from '../utils/colors';

class QuestionView extends Component {
    state = {
        answerVisible: false
    }

    toggleVisible = () => (
        this.setState({
            answerVisible: !this.state.answerVisible
        })
    )

    render() {
        const { navigation, question, setAnswer, deckName, index, questionCount } = this.props;
        const { answerVisible } = this.state;
        return (
            <View style={styles.primaryView}>
                <View style={styles.buttonGroup}>
                    <Text style={[styles.buttonGroupText, {fontSize: 12, fontStyle: 'italic', height: 25, color: slate}]}>
                        {questionCount - (index + 1) } questions remaining
                    </Text>
                    <Text style={styles.buttonGroupText}>
                        Question {index + 1}:
                    </Text>
                    <Text style={[styles.buttonGroupText, {fontWeight: 'bold'}]}>
                        {question.question}
                    </Text>
                    {!answerVisible ?
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                this.toggleVisible()
                            }}>
                                <Text style={{fontWeight: 'bold'}}>Show Answer</Text>
                            </TouchableOpacity>
                        </View>
                    :
                        <View style={styles.buttonGroup}>
                            <Text style={[styles.buttonGroupText]}>
                                Answer:
                            </Text>
                            <Text style={[styles.buttonGroupText, {fontWeight: 'bold', color: green}]}>
                                {question.answer}
                            </Text>
                            <View style={styles.buttonRow}>
                                <TouchableOpacity style={[styles.button, {borderColor: green, width: 130, }]} onPress={() => {
                                    setAnswer(deckName, index, 1);
                                }}>
                                    <Text style={{fontWeight: 'bold'}}>Correct</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, {borderColor: red, width: 130, }]} onPress={() => {
                                    setAnswer(deckName, index, 0);
                                }}>
                                    <Text style={{fontWeight: 'bold'}}>Incorrect</Text>
                                </TouchableOpacity>
                            </View>
                            {questionCount === (index + 1) ?
                                <TouchableOpacity style={styles.button} onPress={() => {
                                    navigation.navigate('DeckStats');
                                }}>
                                    <Text style={{fontWeight: 'bold'}}>Complete Quiz</Text>
                                </TouchableOpacity>
                            :
                                <TouchableOpacity style={styles.button} onPress={() => {
                                    navigation.navigate('Question_' + (index + 1));
                                }}>
                                    <Text style={{fontWeight: 'bold'}}>Next Question</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    }
                    <TouchableOpacity style={styles.button} onPress={() => {
                        navigation.goBack()
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    primaryView: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    buttonGroup: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10,
        paddingTop: 20
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        paddingTop: 10
    },
    buttonGroupText: {
        height: 40,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 200,
        textAlign: 'center',
        fontWeight: "500",
        backgroundColor: white,
        borderColor: blue,
        borderWidth: 2,
        borderRadius: 8,
        margin: 10,
        marginBottom: 20,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25
    }
})

export default QuestionView;