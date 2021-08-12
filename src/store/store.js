import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//store used to share states between components and to manipulate them
export const store = new Vuex.Store({
    state: {
        name: '',
        deckId: '',
        computerCards: [],
        playerCard: [],
        card: {}
    },
    mutations: {
        setName(state, name) {
            state.name = name
        },
        setDeckId(state, deckId) {
            state.deckId = deckId
        },
        addCompCards(state, card) {
            state.computerCards.push(card)
        },
        setCard(state, card) {
            state.card = card
        }
    },
    getters: {
        name: state => state.name,
        deckId: state => state.deckId,
        computerCards: state => state.computerCards,
        card: state => state.card
    }
    
})