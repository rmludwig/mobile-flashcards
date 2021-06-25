import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import { white } from '../utils/colors';

class Settings extends Component {
    render() {
        return (
            <View style={styles.Settings}>
                <View style={styles.Header}>
                    <Text style={styles.Title}>Settings</Text>
                </View>
                <Text>{JSON.stringify(Object.keys(this.props))}</Text>
                <Text style={{fontSize: 20}}>
                Settings
                </Text>
                <Button title="Empty all decks" onPress={() => {
                    if (confirm("All you sure you want to remove all data?")) {
                        this.props.clearAllDeckData()
                    }
                }} />
                <Button title="Build Test Decks" onPress={() => {
                    if (confirm("All you sure you want to replace all decks with test data?")) {
                        this.props.buildTestData()
                    }
                }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Settings: {
        flex: 1,
        backgroundColor: '#aaa',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderColor: '#555',
        borderStyle: 'solid',
        borderWidth: '5px'
    },
    Header: {
        backgroundColor: '#aaa',
        alignItems: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        height: '70px',
    },
    Title:{
        fontWeight: '500',
        fontSize: '18px'
    }
})

export default Settings;