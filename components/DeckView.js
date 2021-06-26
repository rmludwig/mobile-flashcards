import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
// import { purple, white } from '../utils/colors';

class DeckView extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.DeckView}>
                {JSON.stringify(Object.keys(this.props))}
                <Text style={{fontSize: "20"}}>
                    DeckView
                </Text>
                <Button
                  title="Question View"
                  onPress={() => navigation.navigate('QuestionView')}
                />
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    DeckView: {
        flex: 1,
        backgroundColor: '#aaa',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderColor: '#555',
        borderStyle: 'solid',
        borderWidth: 5,
    },
})

export default DeckView;