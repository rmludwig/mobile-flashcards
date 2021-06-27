import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { red, orange, yeller, green, blue, slate, gray, white } from '../utils/colors';

class DeckList extends Component {
    render() {
        const { navigation, decks } = this.props;
        // TODO remove logging
        console.log("Decks found in DeckList:", decks);

        if (! decks || Object.keys(decks).length < 1) {
            return (
                <View style={styles.primaryView}>
                    <View style={styles.ButtonGroupSimple}>
                        <Text style={[styles.ButtonGroupText, {fontSize: 14}]}>
                            Add some decks and cards to get started...
                        </Text>
                        <TouchableOpacity style={[styles.Button, {borderColor: green}]} onPress={() => {
                                navigation.navigate('New Deck')
                        }}>
                            <Text style={{fontWeight: 'bold'}}>Add Deck</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        else {
            return (
                <SafeAreaView style={styles.primaryView}>
                    <ScrollView>
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
                    </ScrollView>
                </SafeAreaView>
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
        borderRadius: 8
    },
    ButtonGroupSimple: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10,
        paddingTop: 20
    },
    ButtonGroupText: {
        fontSize: 20,
        fontWeight: 500,
        width: 300,
        height: 40,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
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
        paddingRight: 25
    }
})

export default DeckList;