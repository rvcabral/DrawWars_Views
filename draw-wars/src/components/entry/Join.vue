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
    props:{
        roomCode: {
            required: true,
            type: String
        }
    },
    data(){
        return{
            players: [{name:'Briceño1'},{name:'Briceño2'},{name:'Briceño3'},{name:'Briceño4'},{name:'Briceño5'},{name:'Briceño6'},{name:'Briceño7'},{name:'Briceño8'}],
            maxPlayers: 8
        }
    },
    created(){
        this.$connection.on("NewPlayer", (res) =>{
            console.log("This is NewPlayer Res", res);
        });
    }
}
</script>

<style>

</style>
