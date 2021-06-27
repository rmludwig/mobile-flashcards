import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { purple, white } from '../utils/colors';
import DeckList from './DeckList';
// import DeckView from './__DeckView';
import QuestionView from './QuestionView';
import AllQuestions from './AllQuestions';


const DeckStack = createStackNavigator();

class AllDecks extends Component {
    render() {
        const { decks } = this.props;
        return (
            <View style={styles.container}>
                <DeckStack.Navigator initialRouteName="DeckList" screenOptions={{headerTitleAlign: 'center'}}>
                    <DeckStack.Screen name="DeckList" options={{headerStyle: {height: 70}}}>
                        {props => <DeckList {...props} decks={this.props.decks} />}
                    </DeckStack.Screen>
                    {Object.keys(decks).map((deckName, index) => {
                        const deck = this.props.decks[deckName];
                        console.log("All Decks = ", this.props.decks)
                        console.log(deckName)
                        console.log("Deck = ", deck)
                        return (
                            <DeckStack.Screen name={deckName} key={deckName} options={{headerStyle: {height: 70}}}>
                                {props => <AllQuestions {...props} deck={deck} deckStack={DeckStack} />}
                            </DeckStack.Screen>




                    )
                    }

                    )}




                    {/* <DeckStack.Screen name="DeckView" component={DeckView} options={{headerStyle: {height: 70}}} />
                    <DeckStack.Screen name="QuestionView" component={QuestionView} options={{headerStyle: {height: 70}}} /> */}
                </DeckStack.Navigator>
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

export default AllDecks;