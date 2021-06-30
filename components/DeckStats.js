import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { red, blue, gray, white } from '../utils/colors';

class DeckStats extends Component {
    render() {
        const { navigation, deck, resetDeck, correct } = this.props;
        let questionCorrect = correct(deck.title) || 0;
        return (
            <View style={styles.primaryView}>
                <View style={styles.buttonGroup}>
                    <Text style={styles.buttonGroupText}>
                        Card Count: {deck.questions.length}
                    </Text>
                    <Text style={styles.buttonGroupText}>
                        Score: {Math.round((questionCorrect * 100) / deck.questions.length)}%
                    </Text>
                    <Text style={styles.buttonGroupText}>
                        Restart the quiz or discard answers and go to the Deck List.
                    </Text>
                    <TouchableOpacity style={[styles.button, {borderColor: red}]} onPress={() => {
                            resetDeck(deck.title);
                            navigation.reset({routes: [{ name: 'DeckStart' }]});
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Restart Quiz</Text>
                    </TouchableOpacity>
                    {deck.questions.length ?
                        <TouchableOpacity style={[styles.button]} onPress={() => {
                            navigation.navigate('DeckList');
                        }}>
                            <Text style={{fontWeight: 'bold'}}>All Decks</Text>
                        </TouchableOpacity>
                    :
                        <Text style={{fontWeight: 'bold'}}>No questions present</Text>
                    }
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
    buttonGroupText: {
        width: 300,
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
        paddingRight: 25,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})

export default DeckStats;