import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { red, orange, yeller, green, blue, slate, gray, white } from '../utils/colors';
import QuestionView from './QuestionView';
import DeckStats from './DeckStats';
import AddCard from './AddCard';

const QuestionsStack = createStackNavigator();

class NavQuestions extends Component {
    render() {
        const { deck, addNewCard } = this.props;
        // TODO: remove logging
        console.log(deck)
        return (
            <View style={styles.primaryView}>
                {/* initialRouteName="DeckStats"  */}
                <QuestionsStack.Navigator initialRouteName="DeckStats" screenOptions={{headerShown: false}}>
                    {/* TODO: using AppContext could be more efficient than using callback to pass props */}
                    <QuestionsStack.Screen name="DeckStats" options={{headerStyle: {height: 70}}}>
                        {props => <DeckStats {...props} deck={deck} />}
                    </QuestionsStack.Screen>
                    <QuestionsStack.Screen name="AddCard" options={{headerStyle: {height: 70}}}>
                        {props => <AddCard {...props} deck={deck} addNewCard={addNewCard} />}
                    </QuestionsStack.Screen>
                    {deck.questions.map((question, index) => {
                        // TODO: remove logging
                        console.log('Question_' + (index + 1))
                        return (
                            <QuestionsStack.Screen name={'Question_' + (index + 1)} key={index} options={{headerStyle: {height: 70}}}>
                                {props => <QuestionView {...props} question={question} />}
                            </QuestionsStack.Screen>

                        )
                    })}
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

export default NavQuestions;