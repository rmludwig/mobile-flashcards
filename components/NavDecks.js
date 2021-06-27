import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import DeckList from './DeckList';
import NavQuestions from './NavQuestions';

const DeckStack = createStackNavigator();

class NavDecks extends Component {
    render() {
        const { decks } = this.props;
        return (
            <View style={styles.primaryView}>
                <DeckStack.Navigator initialRouteName="DeckList" screenOptions={{headerTitleAlign: 'center'}}>
                    <DeckStack.Screen name="DeckList" options={{headerStyle: {height: 70}}}>
                        {props => <DeckList {...props} decks={this.props.decks} />}
                    </DeckStack.Screen>
                    {Object.keys(decks).map((deckName) => {
                        const deck = this.props.decks[deckName];
                        return (
                            <DeckStack.Screen name={deckName} key={deckName} options={{headerStyle: {height: 70}}}>
                                {props => <NavQuestions {...props} deck={deck} deckStack={DeckStack} />}
                            </DeckStack.Screen>
                        )
                    })}
                </DeckStack.Navigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    primaryView: {
        flex: 1,
        backgroundColor: '#aaa',
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
});

export default NavDecks;