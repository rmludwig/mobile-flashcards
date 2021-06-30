import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { blue, gray, white } from '../utils/colors';
import { setAlertNotification } from '../utils/helpers';

class AddDeck extends Component {
    state = {
        deckName: ''
    }

    render() {
        const deckName = this.state.deckName;
        const { navigation } = this.props;
        return (
            <View style={styles.addDeck}>
                <View style={styles.header}>
                    <Text style={styles.title}>New Deck</Text>
                </View>
                <View style={styles.buttonGroup}>
                    <Text style={styles.buttonGroupText}>Enter the new deck name below, along with question and answer.</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => this.setState({deckName: text})}
                        value={deckName}
                        placeholder="New Deck Name"
                        keyboardType="default"
                    />
                    <View style={styles.buttonPosition}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            if (this.state.deckName) {
                                const newDeckName = this.state.deckName;
                                this.setState({deckName: ''});
                                this.props.addNewDeck(newDeckName).then(() => {
                                // TODO: Local Notifications is no longer available in current version of expo
                                // so using this alert notification as a substitute
                                setAlertNotification(30);
                                navigation.navigate(newDeckName, {screen: 'DeckStart'}) });
                            }
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
    addDeck: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    header: {
        backgroundColor: white,
        alignItems: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        height: 70
    },
    title:{
        fontWeight: "500",
        fontSize: 18
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
        height: 50,
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
    },
    buttonPosition: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 50
    },
    input: {
        height: 40,
        width: 250,
        margin: 10,
        padding: 3,
        borderWidth: 1,
        borderRadius: 8,
        textAlignVertical: 'top',
        backgroundColor: white
    }
})

export default AddDeck;