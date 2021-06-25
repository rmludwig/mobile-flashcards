import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@mobile_flashcard_decks';

/**
 * Function to get deck information from async storage.
 *
 * @returns promise resolving with a JSON string value converted to an object
 */
export function getDecks () {
    return AsyncStorage.getItem(STORAGE_KEY).then(JSON.parse);
}

// TODO getDeck: take in a single id argument and return the deck associated with that id.

/**
 * Function to add a new deck to async storage.
 *
 * @returns promise with merged data converted to an object
 */
export function createDeck (title) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
    .then(JSON.parse);
}

/**
 * Function to add a question to existing deck in async storage.
 *
 * @returns promise with merged data converted to an object
 */
export function addCardToDeck (deck, new_question) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [deck.title]: {
            ...deck,
            questions: deck.questions.concat(new_question)
        }
    }))
    .then(JSON.parse);
}

/**
 * Function to remove all data from async storage.
 *
 * @returns promise
 */
export function emptyAllDecks () {
    return AsyncStorage.removeItem(STORAGE_KEY);
}

/**
 * Function to replace all data with initial test data in async storage.
 *
 * @returns promise resolves then passing the new data set as an object
 */
export function buildTestDecks () {
    return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(testData)).then(() => testData);
}

const testData = {
    TestDeck1: {
        title: 'TestDeck1',
        questions: [
            {
                question: 'Are we having fun yet?',
                answer: 'Always!'
            },
            {
                question: 'Do you enjoy testing?',
                answer: 'Mostly.'
            },
            {
                question: 'Can you see this question?',
                answer: 'Yes!'
            }
        ]
    },
    TestDeck2: {
        title: 'TestDeck2',
        questions: [
            {
                question: 'What is more fun that coding?',
                answer: 'Nothing.'
            },
            {
                question: 'What is the airspeed velocity of an unladen swallow?',
                answer: 'African or European? 20 / 24'
            }
        ]
    }
}


