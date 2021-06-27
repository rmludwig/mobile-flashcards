import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { red, orange, yeller, green, blue, slate, gray, white } from '../utils/colors';

class DeckStats extends Component {
    render() {
        const { navigation, deck } = this.props;
        // TODO remove logging
        console.log(deck)
        return (
            <View style={styles.primaryView}>
                <View style={styles.ButtonGroup}>
                    <Text style={styles.ButtonGroupText}>
                        DeckSTATS TBD {/* QuestionView {decks[deckName].title} */}
                    </Text>
                    <Text style={styles.ButtonGroupText}>
                        Question answered {/* QuestionView {decks[deckName].title} */}
                    </Text>
                    <Text style={styles.ButtonGroupText}>
                        Score {/* QuestionView {decks[deckName].title} */}
                    </Text>
                    {deck.questions.length ?

                        <TouchableOpacity style={styles.Button} onPress={() => {
                            navigation.navigate('Question_1')
                        }}>
                            <Text style={{fontWeight: 'bold'}}>Question 1</Text>
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
    Header: {
        backgroundColor: white,
        alignItems: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        height: 70
    },
    Title:{
        fontWeight: 500,
        fontSize: 18
    },
    ButtonGroup: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10,
        paddingTop: 20
    },
    ButtonGroupText: {
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
    },
    Input: {
        height: 40,
        width: 250,
        margin: 10,
        padding: 3,
        borderWidth: 1,
        borderRadius: 8,
        textAlignVertical: 'top'
    }
})

export default DeckStats;