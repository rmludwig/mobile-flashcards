import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AddDeck from './components/AddDeck';
import DeckStack from './components/DeckStack';
import Settings from './components/Settings';
import { getDecks, emptyAllDecks, buildTestDecks } from './utils/helpers'

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
        getDecks().then((decks) => {alert("Removed all deck content. Decks = " + JSON.stringify(decks)) });
    }

    buildTestData = () => {
        buildTestDecks().then((decks) => {
            this.setState(() => ({
                decks
            }));
            //TODO: remove logging
            getDecks().then((decks) => {alert("Built new decks as: " + JSON.stringify(decks)) });
        });
    }





    render() {
        console.log("rendering with state = ", this.state);

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
                            {props => <DeckStack {...props} decks={this.state.decks} />}
                        </Tab.Screen>
                        <Tab.Screen name="New Deck" component={AddDeck} />
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
        justifyContent: 'center',
    },
    loadingText:{
        fontSize: '16px',
        margin: '10px'
    }
});

export default App;


// TODO: Cleanup all of this test code...
// from in component...
    // saveData(dataForNow);
    // mergeData();
    // readData();

// const dataForNow = {
//   TestDeck1: {
//       title: 'TestDeck1',
//       questions: [
//           {
//           question: 'Are we having fun yet?',
//           answer: 'Always!'
//           },
//           {
//           question: 'Can you see this question?',
//           answer: 'Yes!'
//           }
//       ]
//   },
//   TestDeck2: {
//       title: 'TestDeck2',
//       questions: [
//           {
//           question: 'What is more fun that coding?',
//           answer: 'Nothing.'
//           }
//       ]
//   }
// }

// const saveData = async (data) => {

//   const dataForNow = {
//     TestDeck1: {
//         title: 'TestDeck1',
//         questions: [
//             {
//             question: 'Are we having fun yet?',
//             answer: 'Always!'
//             },
//             {
//             question: 'Can you see this question?',
//             answer: 'Yes!'
//             }
//         ]
//     },
//     TestDeck2: {
//         title: 'TestDeck2',
//         questions: [
//             {
//             question: 'What is more fun that coding?',
//             answer: 'Nothing.'
//             }
//         ]
//     }
//   }

  // try {
  //   await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(dataForNow))
  //   alert('Data successfully saved')
  // } catch (e) {
  //   alert('Failed to save the data to the storage')
  // }
// }

// const mergeData = async () => {
//   const number = Math.floor(Math.random() * 20);
//   try {
//     await AsyncStorage.mergeItem('STORAGE_KEY', JSON.stringify({poo: 'pistole'}))
//     // alert('Data successfully merged')
//   } catch (e) {
//     alert('Failed to merge the data to the storage 2')
//   }
// }



// const readData = async () => {
//   try {
//     const value = await AsyncStorage.getItem(STORAGE_KEY)
//     if(value !== null) {
//       alert('There is data in async storage')
//       alert(JSON.stringify(value))
//       return value != null ? JSON.parse(value) : null;
//     }
//   } catch(e) {
//     alert('Failed to save the data to the storage')
//   }
// }


// // TODO replace these
// import { getInitialDecks } from './utils/helpers'

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Decks" component={DeckList} />
//       <Stack.Screen name="Deck" component={DeckView} />
//       <Stack.Screen name="Question" component={QuestionView} />
//     </Stack.Navigator>
//   );
// }

// function MobileFlashStatusBar ({backgroundColor, ...props}) {
//   return (
//     <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
//       <StatusBar backgroundColor="#61dafb" {...props} />
//       {/* <StatusBar translucent backgroundColor="#61dafb" {...props} /> */}
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   )
// }



// export default function App() {
//   const decks = getInitialDecks();
//   return (
//     <View style={styles.container}>
//       <MobileFlashStatusBar backgroundColor={purple} barStyle="light-content" />
//       <Text>We got some monkey business!!! Well then...... Open up App.js to start working on your app!</Text>
//       <NavigationContainer>
//         <MyStack />
//       </NavigationContainer>
//     </View>
//   );
// }




// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </View>
//   );
// }

// function ProfileScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to Notifications"
//         onPress={() => navigation.navigate('Notifications')}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to Settings"
//         onPress={() => navigation.navigate('Settings')}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Deck List"
//         onPress={() => navigation.navigate('DeckList')}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }


// const Stack = createStackNavigator();

// function MyStack() {
//   const dddata = readData()
//   return (
//     <View style={styles.container}>
//       <MobileFlashStatusBar backgroundColor={purple} barStyle="light-content" />
//       <Text>{ JSON.stringify(dddata) }</Text>
//       <Stack.Navigator>
//         {/* <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Notifications" component={NotificationsScreen} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//         <Stack.Screen name="Settings" component={SettingsScreen} /> */}
//         <Stack.Screen name="DeckList" component={DeckList} />
//         <Stack.Screen name="DeckView" component={DeckView} />
//         <Stack.Screen name="QuestionView" component={QuestionView} />
//       </Stack.Navigator>
//     </View>
//   );

// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyStack />
//     </NavigationContainer>
//   );
// }

