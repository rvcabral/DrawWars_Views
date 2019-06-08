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
            players: [],
            maxPlayers: 8
        }
    },
    created(){
        this.$connection.on("NewPlayer", (res) =>{
            console.log("newPlayer!!: ", res);
            this.players.push({name: res});
        });

        this.$connection.on("DrawThemes", (res) =>{
            this.$root.timeout = res;
            this.$router.push({ path: 'war'});
        });
    }
}
</script>

<style>

</style>
