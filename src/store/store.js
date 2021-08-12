import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//store used to share states between components and to manipulate them
export const store = new Vuex.Store({
    state: {
        name: '',
        deckId: '',
        computerCards: [],
        hiddenCard: {},
        playerCard: [],
        computerPoints: 0,
        playerPoints: 0,
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
        addPlayerCard(state, card) {
            state.playerCard.push(card)
        },
        //do i really need this?
        setHiddenCard(state, hiddenCard) {
            state.hiddenCard = hiddenCard
        },
        //the card that is shown?? not needed?
        setCard(state, card) {
            state.card = card
        }
    },
    getters: {
        name: state => state.name,
        deckId: state => state.deckId,
        computerCards: state => state.computerCards,
        playerCards: state => state.playerCards,
        hiddenCard: state => state.hiddenCard,
        card: state => state.card
    },
    actions: {
        //manipulate computer points
    }
    
})