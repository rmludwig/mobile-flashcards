import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
// import { purple, white } from '../utils/colors';

class AddDeck extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.AddDeck}>
                {JSON.stringify(Object.keys(this.props))}
                <Text style={{fontSize: 20}}>
                AddDeck
                </Text>
                <Button title="Go back" onPress={() => navigation.goBack()} />
                <Button
                  title="Go To Deck List"
                  onPress={() => navigation.navigate('DeckList')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    AddDeck: {
        flex: 1,
        backgroundColor: '#aaa',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderColor: '#555',
        borderStyle: 'solid',
        borderWidth: '5px'
    },
})

export default AddDeck;