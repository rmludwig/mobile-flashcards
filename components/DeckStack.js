import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { purple, white } from '../utils/colors';
import DeckList from './DeckList';
import DeckView from './DeckView';
import QuestionView from './QuestionView';

const Stack = createStackNavigator();

class DeckStack extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Stack.Navigator initialRouteName="DeckList" screenOptions={{headerTitleAlign: 'center'}}>
                    <Stack.Screen name="DeckList" options={{headerStyle: {height: 70}}}>
                        {props => <DeckList {...props} decks={this.props.decks} />}
                    </Stack.Screen>
                    <Stack.Screen name="DeckView" component={DeckView} options={{headerStyle: {height: 70}}} />
                    <Stack.Screen name="QuestionView" component={QuestionView} options={{headerStyle: {height: 70}}} />
                </Stack.Navigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#aaa',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    //   borderColor: '#555',
    //   borderStyle: 'solid',
    //   borderWidth: 5,
    },
});

export default DeckStack;