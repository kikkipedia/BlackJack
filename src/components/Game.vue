<template>
  <div class="content">
      <p>Let's go {{this.$store.state.name}}!</p>
      
      <div class="center">
        <table class="center">
            <tr>
                <th>Computer</th>
                <th>{{this.$store.state.name}}</th>
            </tr>
            <tr>
                <td>Cards array<img class="card" v-bind:src="imgSrcComp" alt="card"><img class="card" src="https://opengameart.org/sites/default/files/styles/medium/public/card%20back%20purple.png" alt="secret"></td>
                <td>Cards array</td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <p><img class="card" v-bind:src="imgSrcPla" alt="card"></p>
                    <p>Points: {{this.$store.state.playerPoints}}</p>
                    <p><button @click="drawPlayerCard()">Draw</button></p>
                    <p><button>Stop</button></p>
                </td>
            </tr>
        </table>
      </div>
  </div>
</template>

<script>
export default {
    name: "Game",
    data() {
        return {
            apiUrl: "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
            card1: {},
            imgSrcComp: '',
            imgSrcPla: ''
        }
    },
    methods: {
        //fetch deck Id & set Id
        async fetchDeckId() {
            try {
                let response = await fetch(this.apiUrl)
                .then(response => response.json())
                this.$store.commit('setDeckId', response.deck_id)
                this.startCards()
            }
            catch(err){
                console.log("Something happened fetching deck Id: " + err)
            }  
        },
        //get computer's first two cards
        async startCards() {
            try {
                let response = await fetch("https://www.deckofcardsapi.com/api/deck/"+ this.$store.state.deckId +"/draw/?count=2")
                .then(response => response.json())
                //first computer cards
                this.card1 = response.cards[0]
                let card2 = response.cards[1]
                //put them in computerCards array
                this.$store.commit('addCompCards', this.card1)
                this.$store.commit('addCompCards', card2)
                //if to show hidden card later
                this.$store.commit('setHiddenCard', card2)
                //gets url for img
                this.imgSrcComp = this.$store.state.computerCards[0].image
            }
            catch(err){
                console.log("Something happened: " + err)
            }
        },
        //draw one card and add to playerCards
        //show image
        //TODO!!
        async drawPlayerCard(){
            try {
                let response = await fetch("https://www.deckofcardsapi.com/api/deck/"+ this.$store.state.deckId +"/draw/?count=1")
                .then(response => response.json())
                let card = response.cards[0]
                this.$store.commit('addPlayerCard', this.card)
                this.imgSrcPla = card.image
            }
            catch(err){
                console.log("Something happened: " + err)
            }
        },
        addToComputerScore(){

        },
        addToPlayerScore(){

        }
        
    },
    mounted() {
        this.fetchDeckId()
    }

}
</script>

<style>
    td {
        width: 200px;
    }

    table, th {
        text-align: center;
        border: 2px solid black;
    }

    .card {
        width: 50px;
    }
</style>