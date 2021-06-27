import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { red, orange, yeller, green, blue, slate, gray, white } from '../utils/colors';

class DeckStats extends Component {
    render() {
        const { navigation, deck } = this.props;
        console.log(navigation)
        console.log(deck)
        return (
            <View style={styles.primaryView}>
                <Text style={{fontSize: "20"}}>
                    DeckSTATS TBD
                </Text>
                <Text style={{fontSize: "20"}}>
                    Question answered
                </Text>
                <Text style={{fontSize: "20"}}>
                    Score
                </Text>
                <Text style={{fontSize: "20"}}>
                    Answer first question
                </Text>

                <Button
                  title="Question 1"
                  onPress={() => navigation.navigate('Question_1')}
                />

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
    Header: {
        backgroundColor: white,
        alignItems: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        height: 70,
    },
    Title:{
        fontWeight: 500,
        fontSize: 18,
    },
    ButtonGroup: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10,
        paddingTop: 20,
    },
    ButtonGroupText: {
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
        borderColor: red,
        borderWidth: 2,
        borderRadius: 8,
        margin: 10,
        marginBottom: 20,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    Input: {
        height: 40,
        width: 250,
        margin: 10,
        padding: 3,
        borderWidth: 1,
        borderRadius: 8,
        textAlignVertical: 'top',
    },
})

export default DeckStats;