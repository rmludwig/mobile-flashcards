import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { red, orange, yeller, green, blue, slate, gray, white } from '../utils/colors';

class AddQuestion extends Component {
    render() {
        return (
            <View style={styles.AddQuestion}>
                <View style={styles.Header}>
                    <Text style={styles.Title}>Settings</Text>
                </View>
                <View style={styles.ButtonGroup}>
                <Text style={styles.ButtonGroupText}>Enter the new deck name below, along with question and answer.</Text>
                    <TextInput
                        style={styles.Input}
                        //onChangeText={onChangeNumber}
                        //value='test'//{number}
                        placeholder="New Deck Name"
                        keyboardType="default"
                    />
                    <TextInput
                        style={[styles.Input, {height: 72}]}
                        //onChangeText={onChangeNumber}
                        //value='test'//{number}
                        placeholder="Question"
                        keyboardType="default"
                        multiline="true"
                    />
                    <TextInput
                        style={[styles.Input, {height: 72}]}
                        //onChangeText={onChangeNumber}
                        //value='test'//{number}
                        placeholder="Answer"
                        keyboardType="default"
                        multiline="true"
                    />
                    <TouchableOpacity style={styles.Button} onPress={() => {
                        if (confirm("All you sure you want to remove all data?")) {
                            this.props.clearAllDeckData()
                        }
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Clear All Data</Text>
                    </TouchableOpacity>
                    <Text style={styles.ButtonGroupText}>The 'Build Test Decks' button will replace contents of state and local storage with test data.</Text>
                    <TouchableOpacity style={styles.Button} onPress={() => {
                        if (confirm("All you sure you want to replace all decks with test data?")) {
                            this.props.buildTestData()
                        }
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Build Test Decks</Text>
                    </TouchableOpacity>
                    <Text style={{fontWeight: "500", padding: "10px"}}>Color Pallet</Text>
                    <Text style={{textAlign: 'center', width: "200px", backgroundColor: '#fff', fontWeight: 'bold', color: red}}>red</Text>
                    <Text style={{textAlign: 'center', width: "200px", backgroundColor: '#fff', fontWeight: 'bold', color: orange}}>orange</Text>
                    <Text style={{textAlign: 'center', width: "200px", backgroundColor: '#fff', fontWeight: 'bold', color: yeller}}>yeller</Text>
                    <Text style={{textAlign: 'center', width: "200px", backgroundColor: '#fff', fontWeight: 'bold', color: green}}>green</Text>
                    <Text style={{textAlign: 'center', width: "200px", backgroundColor: '#fff', fontWeight: 'bold', color: blue}}>blue</Text>
                    <Text style={{textAlign: 'center', width: "200px", backgroundColor: '#fff', fontWeight: 'bold', color: slate}}>slate</Text>
                    <Text style={{textAlign: 'center', width: "200px", backgroundColor: '#fff', fontWeight: 'bold', color: gray}}>gray</Text>
                    <Text style={{textAlign: 'center', width: "200px", backgroundColor: '#fff', fontWeight: 'bold', color: white}}>white</Text>
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

export default AddQuestion;