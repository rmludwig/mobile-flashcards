import React, { Component } from 'react';
import { View, TouchableOpacity, Button, StyleSheet } from 'react-native';


import { red, orange, yeller, green, blue, slate, gray, white } from '../utils/colors';


import AllQuestions from './AllQuestions';

class DeckView extends Component {
    render() {
        const { navigation, deck, deckStack } = this.props;
        console.log("All props", this.props)
        console.log(navigation)
        console.log(deck)
        return (
            <View style={styles.primaryView}>
                <AllQuestions deck={deck} deckStack={deckStack} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    primaryView: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        // borderColor: '#555',
        // borderStyle: 'solid',
        // borderWidth: 5,
    },
})

export default DeckView;