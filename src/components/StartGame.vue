<template>
    <div class="content">
        <h2>Welcome <span style='font-size:25px;'>&#128075;</span></h2>
        <p>Here you can play Black Jack against a computer </p>
        <button @click="startGame()">START GAME</button>
        <p><span style='font-size:70px;'>&#127183;</span></p>
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
