<template>
    <section class="join">
        <img>

        <div class="players">
            <div class="player" v-for="(player, idx) in players" :key="player + idx">
                {{player.name}}
            </div>
        </div>

        <div class="start">
            <span>Room code: {{roomCode}}</span>
            <button class="btn btn-primary" @click="$router.push({ path: 'war' })">Start Game!</button>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            players: [{name:'Briceño1'},{name:'Briceño2'},{name:'Briceño3'},{name:'Briceño4'},{name:'Briceño5'},{name:'Briceño6'},{name:'Briceño7'},{name:'Briceño8'}],
            maxPlayers: 8,
            roomCode: 'abc123'
        }
    },
    mounted(){
        /* this.$connection.on("AckSession", (res) =>{
            console.log("This is Ack Res", res);
        });
        this.$connection.on("NonExistingSession", (res) =>{
            console.log("This is NonExistingSession Res", res);
        }); */
    }
}
</script>

<style>

</style>
