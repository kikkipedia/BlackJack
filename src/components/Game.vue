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
              <td><img v-bind:src="'{{this.$store.state.computerCards[0].image}}'" alt="card"/></td>
              <td>Points:</td>
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
            card2: {}
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
        async startCards() {
            try {
                let response = await fetch("https://www.deckofcardsapi.com/api/deck/"+ this.$store.state.deckId +"/draw/?count=2")
                .then(response => response.json())
                //computer's first cards
                this.card1 = response.cards[0]
                this.card2 = response.cards[1]
                //to vuex array
                this.$store.commit('addCompCards', this.card1)
                this.$store.commit('addCompCards', this.card2)
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
</style>