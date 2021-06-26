import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { red, orange, yeller, green, blue, slate, gray, white } from '../utils/colors';

class Settings extends Component {
    render() {
        return (
            <View style={styles.Settings}>
                <View style={styles.Header}>
                    <Text style={styles.Title}>Settings</Text>
                </View>
                <View style={styles.ButtonGroup}>
                    <Text style={styles.ButtonGroupText}>The 'Clear All Data' button will remove all data from the state and the local storage.</Text>
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
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: '#fff', fontWeight: 'bold', color: red}}>red</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: '#fff', fontWeight: 'bold', color: orange}}>orange</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: '#fff', fontWeight: 'bold', color: yeller}}>yellow</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: '#fff', fontWeight: 'bold', color: green}}>green</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: '#fff', fontWeight: 'bold', color: blue}}>blue</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: '#fff', fontWeight: 'bold', color: slate}}>slate</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: '#fff', fontWeight: 'bold', color: gray}}>gray</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: '#fff', fontWeight: 'bold', color: white}}>white</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Settings: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        // borderColor: '#555',
        // borderStyle: 'solid',
        // borderWidth: '5px',
    },
    Header: {
        backgroundColor: orange,
        alignItems: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        height: 70,
        color: white,
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
        height: 70,
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
    }
})

export default Settings;