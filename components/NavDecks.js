import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { gray } from '../utils/colors';
import DeckList from './DeckList';
import NavCard from './NavCard';

const DeckStack = createStackNavigator();

class NavDecks extends Component {
    render() {
        const { decks, addNewCard } = this.props;
        return (
            <View style={styles.primaryView}>
                <DeckStack.Navigator initialRouteName='DeckList' screenOptions={{headerTitleAlign: 'center'}}>
                    {/* TODO: using AppContext could be more efficient than using callback to pass props */}
                    {decks !== null && Object.keys(decks).length > 0 && Object.keys(decks).map((deckName) => {
                        const deck = this.props.decks[deckName];
                        return (
                            <DeckStack.Screen name={deckName} key={deckName} options={{headerStyle: {height: 70}}}>
                                {props => <NavCard {...props} deck={deck} addNewCard={addNewCard} />}
                            </DeckStack.Screen>
                        )
                    })}
                    <DeckStack.Screen name="DeckList" options={{headerStyle: {height: 70}}}>
                        {props => <DeckList {...props} decks={decks} />}
                    </DeckStack.Screen>
                </DeckStack.Navigator>
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
});

export default NavDecks;