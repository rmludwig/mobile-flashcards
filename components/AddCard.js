import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { green, gray, white } from '../utils/colors';

class AddQuestion extends Component {
    state = {
        question: '',
        answer: ''
    }

    render() {
        const { deck, addNewCard, navigation } = this.props;
        const {question, answer} = this.state
        return (
            <View style={styles.addQuestion}>
                <View style={styles.buttonGroup}>
                <Text style={styles.buttonGroupText}>Enter the flashcard question and answer.</Text>
                    <TextInput
                        style={[styles.input, {height: 72}]}
                        onChangeText={text => this.setState({question: text})}
                        value={question}
                        placeholder="Question"
                        keyboardType="default"
                        multiline={true}
                    />
                    <TextInput
                        style={[styles.input, {height: 72}]}
                        onChangeText={text => this.setState({answer: text})}
                        value={answer}
                        placeholder="Answer"
                        keyboardType="default"
                        multiline={true}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => {
                       addNewCard(deck, question, answer);
                       navigation.goBack();
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Add Card</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addQuestion: {
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
        borderColor: green,
        borderWidth: 2,
        borderRadius: 8,
        margin: 10,
        marginBottom: 20,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25
    },
    input: {
        height: 40,
        width: 250,
        margin: 10,
        padding: 3,
        borderWidth: 1,
        borderRadius: 8,
        textAlignVertical: 'top'
    }
})

export default AddQuestion;