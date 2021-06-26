import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { red, orange, yeller, green, blue, slate, gray, white } from '../utils/colors';

class AddDeck extends Component {
    state = {
        deckName: ''
    }

    render() {
        const deckName = this.state.deckName;
        return (
            <View style={styles.AddDeck}>
                <View style={styles.Header}>
                    <Text style={styles.Title}>New Deck</Text>
                </View>
                <View style={styles.ButtonGroup}>
                    <Text style={styles.ButtonGroupText}>Enter the new deck name below, along with question and answer.</Text>
                    <TextInput
                        style={styles.Input}
                        onChangeText={text => this.setState({deckName: text})}
                        value={deckName}
                        placeholder="New Deck Name"
                        keyboardType="default"
                    />
                    <View style={styles.ButtonPosition}>
                        <TouchableOpacity style={styles.Button} onPress={() => {
                            this.props.addNewDeck(this.state.deckName);
                            this.setState({deckName: ''});
                        }}>
                            <Text style={{fontWeight: 'bold'}}>Add Deck</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    AddDeck: {
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
        height: 50,
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
    },
    ButtonPosition: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 50,
    },
    Input: {
        height: 40,
        width: 250,
        margin: 10,
        padding: 3,
        borderWidth: 1,
        borderRadius: 8,
        textAlignVertical: 'top',
        backgroundColor: white,
    },
})

export default AddDeck;