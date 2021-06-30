import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { gray } from '../utils/colors';
import QuestionView from './QuestionView';
import DeckStart from './DeckStart';
import DeckStats from './DeckStats';
import AddCard from './AddCard';

const QuestionsStack = createStackNavigator();

class NavCard extends Component {
    state = {
        answers: {}
    }

    setAnswer = (deckName, index, result) => {
        this.setState({
            answers: {
                ...this.state.answers,
                [deckName]: {
                    ...this.state.answers[deckName],
                    [index]: result
                }
            }
        });
    }

    resetDeck = (deckName) => {
        this.setState({
            answers: {
                ...this.state.answers,
                [deckName]: null
            }
        });
    }

    answered = (deckName) => {
        if (this.state.answers[deckName]) {
            return Object.keys(this.state.answers[deckName]).length;
        }
        else {
            return 0;
        }
    }

    correct = (deckName) => {
        if (this.state.answers[deckName]) {
            let correct = 0;
            Object.keys(this.state.answers[deckName]).forEach((index) => {
                if (this.state.answers[deckName][index] === 1) {
                    correct++;
                }
            })
            return correct;
        }
        else {
            return 0;
        }
    }

    render() {
        const { deck, addNewCard } = this.props;
        return (
            <View style={styles.primaryView}>
                <QuestionsStack.Navigator initialRouteName="DeckStart" screenOptions={{headerShown: false}}>
                    {/* TODO: using AppContext could be more efficient than using callback to pass props */}
                    <QuestionsStack.Screen name="DeckStart" options={{headerStyle: {height: 70}}}>
                        {props => <DeckStart {...props} deck={deck} answered={this.answered} correct={this.correct} />}
                    </QuestionsStack.Screen>
                    <QuestionsStack.Screen name="AddCard" options={{headerStyle: {height: 70}}}>
                        {props => <AddCard {...props} deck={deck} addNewCard={addNewCard} />}
                    </QuestionsStack.Screen>
                    {deck.questions.map((question, index) => {
                        return (
                            <QuestionsStack.Screen name={'Question_' + (index)} key={index} options={{headerStyle: {height: 70}}}>
                                {props => <QuestionView {...props} index={index} deckName={deck.title} question={question} setAnswer={this.setAnswer} questionCount={deck.questions.length} />}
                            </QuestionsStack.Screen>

                        )
                    })}
                    <QuestionsStack.Screen name="DeckStats" options={{headerStyle: {height: 70}}}>
                        {props => <DeckStats {...props} deck={deck} answered={this.answered} correct={this.correct} resetDeck={this.resetDeck} />}
                    </QuestionsStack.Screen>
                </QuestionsStack.Navigator>
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
    }
});

export default NavCard;