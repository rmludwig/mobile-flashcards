import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

import { red, orange, yeller, green, blue, slate, gray, white } from '../utils/colors';

class QuestionView extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.primaryView}>

                <View style={styles.ButtonGroup}>
                <Text style={styles.ButtonGroupText}>
                Question: BLAH BLAH BLAH {/* QuestionView {decks[deckName].title} */}
                </Text>

                <TouchableOpacity style={styles.Button} onPress={() => {
                    navigation.goBack()
                }}>
                    <Text style={{fontWeight: 'bold'}}>Go Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => {
                    navigation.goBack()
                }}>
                    <Text style={{fontWeight: 'bold'}}>View Answer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => {
                    navigation.goBack()
                }}>
                    <Text style={{fontWeight: 'bold'}}>Next Question</Text>
                </TouchableOpacity>
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

export default QuestionView;