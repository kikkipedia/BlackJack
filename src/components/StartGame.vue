<template>
    <div class="content">
        <h2>Welcome</h2>
        <p>Here you can play Black Jack against a computer</p>
        <button @click="startGame()">START GAME</button>
    </div>
</template>

<script>
export default {
    name: "StartGame",
    methods: {
        startGame() {
            let person = prompt("Enter your name")
            if (person == null || person == "") {
                console.log("no name entered")
            }
            else {
               this.$store.commit('setName', person)
               this.$router.push('/game')
            }
        }
    }
}
</script>

<style scoped>

</style>
