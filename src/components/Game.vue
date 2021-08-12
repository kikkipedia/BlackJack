<template>
  <div class="content">
      <p>Let's go {{this.$store.state.name}}!</p>
      <p><button>Draw</button></p>
      <p><button>Stop</button></p>
      <table>
          <tr>
              <th>Computer</th>
              <th>{{this.$store.state.name}}</th>
          </tr>
          <tr>
              <td>Computer cards</td>
              <td>Player cards</td>
          </tr>
          <tr>
              <td><img class="card" v-bind:src="imgSrc" alt="card"/><img class="card" src="https://opengameart.org/sites/default/files/styles/medium/public/card%20back%20purple.png" alt="secret"></td>
              <td>Points: {{this.$store.state.playerPoints}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    name: "Game",
    data() {
        return {
            apiUrl: "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
            card1: {},
            card2: {},
            imgSrc: ''
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
                //first cards
                this.card1 = response.cards[0]
                this.card2 = response.cards[1]
                //put them in computerCards array
                this.$store.commit('addCompCards', this.card1)
                this.$store.commit('addCompCards', this.card2)
                //gets url for img
                this.imgSrc = this.$store.state.computerCards[0].image
                // working!! console.log(this.$store.state.computerCards[0].image)
            }
            catch(err){
                console.log("Something happened: " + err)
            }
        }
        //draw one/first cards - adds to array
        
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