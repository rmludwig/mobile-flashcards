import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextComponent } from 'react-native'
import Constants from 'expo-constants';

import { purple, white } from '../utils/colors';



class DeckList extends Component {
    render() {

      return (
        <View style={styles.deck}>
          {JSON.stringify(Object.keys(this.props.decks))}
          {Object.keys(this.props.decks).map((deck) => {
              return (
              <View style={styles.deck}>
                <Text style={{fontSize: 20}}>
                  {this.props.decks[deck].title}
                </Text>
                <Text style={{fontSize: 12}}>
                  {this.props.decks[deck].questions.length}
                </Text>
              </View>
              )})
          }
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    deck: {
        flex: 1,
        backgroundColor: '#aaa',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderColor: '#555',
        borderStyle: 'solid',
        borderWidth: '5px'
      },
    // item: {
    //   backgroundColor: white,
    //   borderRadius: Platform.OS === 'ios' ? 16 : 2,
    //   padding: 20,
    //   marginLeft: 10,
    //   marginRight: 10,
    //   marginTop: 17,
    //   justifyContent: 'center',
    //   shadowRadius: 3,
    //   shadowOpacity: 0.8,
    //   shadowColor: 'rgba(0, 0, 0, 0.24)',
    //   shadowOffset: {
    //     width: 0,
    //     height: 3
    //   },
    // },
    // noDataText: {
    //   fontSize: 20,
    //   paddingTop: 20,
    //   paddingBottom: 20
    // }
  })


//   function mapStateToProps (entries) {
//     return {
//       entries
//     }
//   }

//   export default connect(
//     mapStateToProps,
//   )(History)

export default DeckList;