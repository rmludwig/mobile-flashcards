import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { red, orange, yeller, green, blue, slate, gray, white } from '../utils/colors';

class DeckList extends Component {
    render() {
        const { navigation, decks } = this.props;
        // TODO remove logging
        console.log("Decks found in DeckList:", decks);

        if (! decks) {
            return (
                <View style={styles.primaryView}>
                    <Text>You should add some decks and questions...</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.primaryView}>
                    {Object.keys(decks).map((deckName, index) => {
                        return (
                            <View style={styles.deck} key={index}>
                                <View style={styles.ButtonGroup}>
                                    <Text style={styles.ButtonGroupText}>
                                        {decks[deckName].title}
                                    </Text>
                                    <Text style={[styles.ButtonGroupText, {fontSize: 12, color: white}]}>
                                        Questions: { decks[deckName].questions !== undefined ? decks[deckName].questions.length : 0}
                                    </Text>
                                    <TouchableOpacity style={styles.Button} onPress={() => {
                                        navigation.navigate(deckName)
                                    }}>
                                        <Text style={{fontWeight: 'bold'}}>View Deck</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    primaryView: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    ButtonGroup: {
        flex: 1,
        backgroundColor: yeller,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10,
        paddingTop: 20,
        borderWidth: 2,
        borderRadius: 8,
    },
    ButtonGroupText: {
        fontSize: 20,
        fontWeight: 500,
        width: 300,
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
    }
})

export default DeckList;