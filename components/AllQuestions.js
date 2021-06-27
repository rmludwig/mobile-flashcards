import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { purple, white } from '../utils/colors';
import DeckList from './DeckList';
// import DeckView from './__DeckView';
import QuestionView from './QuestionView';
import DeckStats from './DeckStats';

const QuestionsStack = createStackNavigator();

class AllQuestions extends Component {
    render() {
        const { deck, deckStack } = this.props;
        console.log(deck)
        return (
            <View style={styles.container}>
                {/* initialRouteName="DeckStats"  */}
                <QuestionsStack.Navigator initialRouteName="DeckStats" screenOptions={{headerShown: false}}>
                    <QuestionsStack.Screen name="DeckStats" options={{headerStyle: {height: 70}}}>
                        {props => <DeckStats {...props} deck={deck} />}
                    </QuestionsStack.Screen>
                    {deck.questions.map((question, index) => {
                        console.log(index)
                        console.log('Question_' + (index + 1))
                        return (
                            <QuestionsStack.Screen name={'Question_' + (index + 1)} key={index} options={{headerStyle: {height: 70}}}>
                                {props => <QuestionView {...props} question={question} />}
                            </QuestionsStack.Screen>

                    )
                    }

                    )}




                </QuestionsStack.Navigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#aaa',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    //   borderColor: '#555',
    //   borderStyle: 'solid',
    //   borderWidth: 5,
    },
});

export default AllQuestions;