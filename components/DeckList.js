import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { yeller, green, blue, slate, gray, white } from '../utils/colors';

class DeckList extends Component {
    render() {
        const { navigation, decks } = this.props;
        if (! decks || Object.keys(decks).length < 1) {
            return (
                <View style={styles.primaryView}>
                    <View style={[styles.buttonGroup, {backgroundColor: gray, borderWidth: 0}]}>
                        <Text style={[styles.buttonGroupText, {fontSize: 14}]}>
                            Add some decks and cards to get started...
                        </Text>
                        <TouchableOpacity style={[styles.button, {borderColor: green}]} onPress={() => {
                                navigation.navigate('New Deck');
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
                                    <View style={styles.buttonGroup}>
                                        <Text style={styles.buttonGroupText}>
                                            {decks[deckName].title}
                                        </Text>
                                        <Text style={[styles.buttonGroupText, {fontSize: 12, color: slate}]}>
                                            Card Count: { decks[deckName].questions !== undefined ? decks[deckName].questions.length : 0}
                                        </Text>
                                        <TouchableOpacity style={styles.button} onPress={() => {
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
    buttonGroup: {
        flex: 1,
        backgroundColor: yeller,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10,
        paddingTop: 20,
        borderWidth: 2,
        borderRadius: 8
    },
    buttonGroupSimple: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10,
        paddingTop: 20
    },
    buttonGroupText: {
        fontSize: 20,
        fontWeight: "500",
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

export default DeckList;