import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

import { purple, white } from './utils/colors';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';
import QuestionView from './components/QuestionView';


// TODO replace these
import { getInitialDecks } from './utils/helpers'





function MobileFlashStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar backgroundColor="#61dafb" {...props} />
      {/* <StatusBar translucent backgroundColor="#61dafb" {...props} /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  )
}



export default function App() {
  const decks = getInitialDecks();
  return (
    <View style={styles.container}>
      <MobileFlashStatusBar backgroundColor={purple} barStyle="light-content" />
      <Text>We got some monkey business!!! Well then...... Open up App.js to start working on your app!</Text>
      <DeckList decks={decks} />
      <DeckView />
      <QuestionView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    borderColor: '#555',
    borderStyle: 'solid',
    borderWidth: '5px'
  },
});
