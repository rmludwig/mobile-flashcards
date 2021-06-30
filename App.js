import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AddDeck from './components/AddDeck';
import NavDecks from './components/NavDecks';
import Settings from './components/Settings';
import { getDecks, emptyAllDecks, buildTestDecks, createDeck, addCardToDeck } from './utils/helpers';

const Tab = createBottomTabNavigator();

class App extends React.Component {
    state = {
        decks: {},
        hasLoaded: false
    }

    componentDidMount() {
        getDecks().then((decks) => {
            this.setState(() => ({
                decks
            }));
            this.setState({hasLoaded: true});
        });
    }

    clearAllDeckData = () => {
        emptyAllDecks().then(
            this.setState({decks: {}})
        )
        //TODO: remove logging
        //getDecks().then((decks) => {alert("Removed all deck content. Decks = " + JSON.stringify(decks)) });
    }

    buildTestData = () => {
        buildTestDecks().then((decks) => {
            this.setState(() => ({
                decks
            }));
            //TODO: remove logging
            //getDecks().then((decks) => {alert("Built new decks as: " + JSON.stringify(decks)) });
        });
    }

    addNewDeck = (newDeckName) => {
        const currentDecks = this.state.decks;
        return createDeck(newDeckName).then(() => {
            this.setState(() => ({
                decks: {
                    ...currentDecks,
                    [newDeckName]: {
                        title: newDeckName,
                        questions: []
                    }
                }
            }));
            //TODO: remove logging
            //getDecks().then((decks) => {alert("Full deck list from storage is: " + JSON.stringify(decks)) });
        });
    }

    addNewCard = (deck, question, answer) => {
        const currentDecks = this.state.decks;
        addCardToDeck(deck, question, answer).then(() => {
            this.setState(() => ({
                decks: {
                    ...currentDecks,
                    [deck.title]: {
                        ...deck,
                        questions: [
                            ...deck.questions,
                            {
                                question: question,
                                answer: answer
                            }
                        ]
                    }
                }
            }));
            //TODO: remove logging
            //getDecks().then((decks) => {alert("Deck list with new question from storage is: " + JSON.stringify(decks)) });
        });
    }

    render() {
        // TODO: remove logging
        // console.log("App rendering with state = ", this.state);

        if (! this.state.hasLoaded) {
            return (
                <View style={styles.loading}>
                    <Text style={styles.loadingText}>Loading Stored Data</Text>
                    <ActivityIndicator color={"#888"} />
                </View>
            );
        }
        else {
            return (
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                if (route.name === 'Decks') {
                                    iconName = focused
                                    ? 'albums-outline'
                                    : 'albums-sharp';
                                }
                                else if (route.name === 'New Deck') {
                                    iconName = focused
                                    ? 'add-circle-outline'
                                    : 'add-circle-sharp';
                                }
                                else if (route.name === 'Settings') {
                                    iconName = focused
                                    ? 'build-outline'
                                    : 'build-sharp';
                                }
                                return <Ionicons name={iconName} size={size} color={color}     />;
                            },
                        })}
                        tabBarOptions={{
                            activeTintColor: 'tomato',
                            inactiveTintColor: 'gray',
                        }}
                    >
                        {/* TODO: using AppContext could be more efficient than using callback to pass props */}
                        <Tab.Screen name="Decks">
                            {props => <NavDecks {...props} decks={this.state.decks} addNewCard={this.addNewCard} addNewDeck={this.addNewDeck} />}
                        </Tab.Screen>
                        {/* <Tab.Screen name="New Deck">
                            {props => <AddDeck {...props} addNewDeck={this.addNewDeck} />}
                        </Tab.Screen> */}
                        <Tab.Screen name="Settings">
                            {props => <Settings {...props} clearAllDeckData={this.clearAllDeckData} buildTestData={this.buildTestData} />}
                        </Tab.Screen>
                    </Tab.Navigator>
                </NavigationContainer>
            );
        }
    }
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        backgroundColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText:{
        fontSize: 16,
        margin: 10
    }
});

export default App;