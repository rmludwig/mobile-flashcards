import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { red, orange, yeller, green, blue, slate, gray, white, none } from '../utils/colors';
import { setAlertNotification, clearAlertNotification } from '../utils/helpers';

class Settings extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.settings}>
                <View style={styles.header}>
                    <Text style={styles.title}>Settings</Text>
                </View>
                <View style={styles.buttonGroup}>
                    <Text style={styles.buttonGroupText}>The 'Clear All Data' button will remove all data from the state and the local storage.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        if (confirm("All you sure you want to remove all data?")) {
                            this.props.clearAllDeckData();
                            navigation.reset({routes: [{ name: 'Decks' }]});
                        }
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Clear All Data</Text>
                    </TouchableOpacity>
                    <Text style={styles.buttonGroupText}>The 'Build Test Decks' button will replace contents of state and local storage with test data.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        if (confirm("All you sure you want to replace all decks with test data?")) {
                            this.props.buildTestData();
                            navigation.reset({routes: [{ name: 'Decks' }]});
                        }
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Build Test Decks</Text>
                    </TouchableOpacity>
                    <Text style={[styles.buttonGroupText, {height: 40}]}>Test the alert notification.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        clearAlertNotification();
                        setAlertNotification(.5);
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Send Alert</Text>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 500, padding: 10}}>Color Pallet</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: none, fontWeight: 'bold', color: red}}>red</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: none, fontWeight: 'bold', color: orange}}>orange</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: none, fontWeight: 'bold', color: yeller}}>yellow</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: none, fontWeight: 'bold', color: green}}>green</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: none, fontWeight: 'bold', color: blue}}>blue</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: none, fontWeight: 'bold', color: slate}}>slate</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: none, fontWeight: 'bold', color: gray}}>gray</Text>
                    <Text style={{textAlign: 'center', width: 200, backgroundColor: none, fontWeight: 'bold', color: white}}>white</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    settings: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    header: {
        backgroundColor: orange,
        alignItems: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        height: 70,
        color: white
    },
    title:{
        fontWeight: 500,
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
        height: 70,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
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
        paddingRight: 25
    }
})

export default Settings;