import {
    RECEIVE_DECKS,
    ADD_DECK,
    ADD_CARD,
    REMOVE_DECK
} from '../actions/index';


function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.title]: {
                    title,
                    question: []
                }
            }
        case ADD_CARD:
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    questions: [...state[action.deckId].questions].concat(action.card)
                }
            };
        case REMOVE_DECK:
            delete state[action.deckId];
            return {
                ...state
            };
        default:
            return state;
    }
}
export default decks