import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { decks } from './_DATA';

export const FLASHCARD_STORAGE_KEY = 'FlashCards:decks'

// getDecks: return all of the decks along with their titles, questions, and answers.
export async function getDecks() {
    try {
        const results = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
        if (results) {
            const data = JSON.parse(results);
            return data;
        } else {
            AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks));
            return decks;
        }
    } catch (err) {
        console.log("Error: getDecks", err);
    }
}

// getDeck: take in a single id argument and return the deck associated with that id.
export async function getDeck(id) {
    try {
        const results = JSON.parse(await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY));

        return results[id];
    } catch (err) {
        console.log("Error: getDeck", err);
    }
}

// saveDeckTitle: take in a single title argument and add it to the decks.
export async function saveDeckTitle(title) {
    try {
        await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
            [title]: {
                title: title,
                questions: []
            }
        }))

    } catch (err) {
        console.log("Error: saveDeckTitle", err);
    }
}


// addCardToDeck: take in two args, title and card, and will add the card to the list of questions for the deck with the associated title.
export async function addCardToDeck(title, card) {
    try {
        const results = JSON.parse(await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY))
        //Target the right deck
        const deck = results[title]

        //Merge the card to deck
        asyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
            [title]: {
                questions: [...deck.questions].concat(card)
            }
        }))

    } catch (err) {
        console.log("Error: addCardToDeck", err);
    }
}

//Delete deck
export async function removeDeck(id) {
    try {
        const results = JSON.parse(await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY))
        delete results[id]
        await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(results))

    } catch (err) {
        console.log("Error: removeDeck", err);
    }
}