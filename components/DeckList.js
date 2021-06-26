import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

class DeckList extends Component {
    render() {
        const { navigation, decks } = this.props;
        console.log("Decks found in DeckList:", decks);

        if (! decks) {
            return (
                <View style={styles.deck}>
                    <Text>You should add some decks and questions...</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.deck}>
                    <Text>
                        {/* {this.props && JSON.stringify(Object.keys(this.props))}
                        {this.props.decks && JSON.stringify(Object.keys(decks))} */}
                    </Text>
                    {Object.keys(decks).map((deck, index) => {
                        return (
                            <View style={styles.deck} key={index}>
                                <Text style={{fontSize: 20}}>
                                    {decks[deck].title}
                                </Text>
                                <Text style={{fontSize: 12}}>
                                    { decks[deck].questions !== undefined ? decks[deck].questions.length : 0}
                                </Text>
                                <Button
                                    title="Deck View"
                                    onPress={() => navigation.navigate('DeckView')}
                                />
                                <Button title="Go back" onPress={() => navigation.goBack()} />
                                <Button title="Now update" onPress={this.mergeData2} />
                            </View>
                        )
                    })}
                </View>
            )
        }
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
    // TODO: add more styling
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

export default DeckList;