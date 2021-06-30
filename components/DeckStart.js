import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { green, blue, gray, white } from '../utils/colors';

class DeckStart extends Component {
    render() {
        const { navigation, deck, answered } = this.props;
        return (
            <View style={styles.primaryView}>
                <View style={styles.buttonGroup}>
                    <Text style={styles.buttonGroupText}>
                        Card Count: {deck.questions.length}
                    </Text>
                    <Text style={styles.buttonGroupText}>
                        Question answered: {answered(deck.title)} / {deck.questions.length}
                    </Text>
                    <Text style={styles.buttonGroupText}>
                        Add a new flash card to this deck or start the quiz with the current set.
                    </Text>
                    <TouchableOpacity style={[styles.button, {borderColor: green}]} onPress={() => {
                            navigation.navigate('AddCard')
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Add Question</Text>
                    </TouchableOpacity>
                    {deck.questions.length ?
                        <TouchableOpacity style={styles.button} onPress={() => {
                            navigation.navigate('Question_0')
                        }}>
                            <Text style={{fontWeight: 'bold'}}>Start Quiz</Text>
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
        paddingRight: 25
    }
})

export default DeckStart;