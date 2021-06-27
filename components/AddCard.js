import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { red, orange, yeller, green, blue, slate, gray, white } from '../utils/colors';

class AddQuestion extends Component {
    state = {
        question: '',
        answer: '',
    }

    render() {
        const { deck, addNewCard, navigation } = this.props;
        const {question, answer} = this.state
        return (
            <View style={styles.AddQuestion}>
                <View style={styles.ButtonGroup}>
                <Text style={styles.ButtonGroupText}>Enter the flashcard question and answer.</Text>
                    <TextInput
                        style={[styles.Input, {height: 72}]}
                        onChangeText={text => this.setState({question: text})}
                        value={question}
                        placeholder="Question"
                        keyboardType="default"
                        multiline="true"
                    />
                    <TextInput
                        style={[styles.Input, {height: 72}]}
                        onChangeText={text => this.setState({answer: text})}
                        value={answer}
                        placeholder="Answer"
                        keyboardType="default"
                        multiline="true"
                    />
                    <TouchableOpacity style={styles.Button} onPress={() => {
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
    AddQuestion: {
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
        borderColor: green,
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

export default AddQuestion;