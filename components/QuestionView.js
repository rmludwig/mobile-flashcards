import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
// import { purple, white } from '../utils/colors';

class QuestionView extends Component {
    render() {
        return (
            <View style={styles.QuestionView}>
                {JSON.stringify(Object.keys(this.props))}
                <Text style={{fontSize: 20}}>
                QuestionView
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    QuestionView: {
        flex: 1,
        backgroundColor: '#aaa',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderColor: '#555',
        borderStyle: 'solid',
        borderWidth: '5px'
    },
})

export default QuestionView;