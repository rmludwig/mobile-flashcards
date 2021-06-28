import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation'

import { red, orange, yeller, green, blue, slate, gray, white } from '../utils/colors';

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
        // TODO remove logging
        console.log("Question View props:", this.props )
        return (
            <View style={styles.primaryView}>
                <View style={styles.ButtonGroup}>
                    <Text style={[styles.ButtonGroupText, {fontSize: 12, fontStyle: 'italic', height: 25, color: slate}]}>
                        {questionCount - (index + 1) } questions remaining
                    </Text>
                    <Text style={styles.ButtonGroupText}>
                        Question {index + 1}:
                    </Text>
                    <Text style={[styles.ButtonGroupText, {fontWeight: 'bold'}]}>
                        {question.question}
                    </Text>
                    {!answerVisible ?
                        <View style={styles.ButtonGroup}>
                            <TouchableOpacity style={styles.Button} onPress={() => {
                                this.toggleVisible()
                            }}>
                                <Text style={{fontWeight: 'bold'}}>Show Answer</Text>
                            </TouchableOpacity>
                        </View>
                    :
                        <View style={styles.ButtonGroup}>
                            <Text style={[styles.ButtonGroupText]}>
                                Answer:
                            </Text>
                            <Text style={[styles.ButtonGroupText, {fontWeight: 'bold', color: green}]}>
                                {question.answer}
                            </Text>
                            {/* <TouchableOpacity style={styles.Button} onPress={() => {
                                this.toggleVisible()
                            }}>
                                <Text style={{fontWeight: 'bold'}}>Hide Answer</Text>
                            </TouchableOpacity> */}
                            <TouchableOpacity style={[styles.Button, {borderColor: green, width: 140, }]} onPress={() => {
                                setAnswer(deckName, index, 1);
                            }}>
                                <Text style={{fontWeight: 'bold'}}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.Button, {borderColor: red, width: 140, }]} onPress={() => {
                                setAnswer(deckName, index, 0);
                            }}>
                                <Text style={{fontWeight: 'bold'}}>INCORRECT</Text>
                            </TouchableOpacity>
                            {questionCount === (index + 1) ?
                                <TouchableOpacity style={styles.Button} onPress={() => {
                                    // TODO remove logging
                                    console.log("Attempting to route from: ", deckName );
                                    navigation.navigate('DeckStats');
                                }}>
                                    <Text style={{fontWeight: 'bold'}}>Complete Quiz</Text>
                                </TouchableOpacity>
                            :
                                <TouchableOpacity style={styles.Button} onPress={() => {
                                    navigation.navigate('Question_' + (index + 1));
                                }}>
                                    <Text style={{fontWeight: 'bold'}}>Next Question</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    }


                    <TouchableOpacity style={styles.Button} onPress={() => {
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
        justifyContent: 'flex-start',
        // borderColor: '#555',
        // borderStyle: 'solid',
        // borderWidth: 5,
    },
    Header: {
        backgroundColor: white,
        alignItems: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        height: 70,
    },
    Title:{
        fontWeight: 500,
        fontSize: 18,
    },
    ButtonGroup: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10,
        paddingTop: 20,
    },
    ButtonGroupText: {
        //width: 300,
        height: 40,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Button: {
        width: 200,
        textAlign: 'center',
        fontWeight: 500,
        backgroundColor: white,
        borderColor: blue,
        borderWidth: 2,
        borderRadius: 8,
        margin: 10,
        marginBottom: 20,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    Input: {
        height: 40,
        width: 250,
        margin: 10,
        padding: 3,
        borderWidth: 1,
        borderRadius: 8,
        textAlignVertical: 'top',
    },
})

export default QuestionView;