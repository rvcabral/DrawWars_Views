<template>
    <section class="join">
        <img src="../../assets/join.jpg" alt="">

        <div class="players">
            <div class="player" v-for="(player, idx) in players" :key="player + idx">
                {{player.name}}
            </div>
        </div>

        <div class="start">
            <button class="btn btn-primary" @click="$router.push({ path: 'join' })">Start Game!</button>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            players: [{name:'Briceño1'},{name:'Briceño2'},{name:'Briceño3'},{name:'Briceño4'},{name:'Briceño5'},{name:'Briceño6'},{name:'Briceño7'},{name:'Briceño8'}],
            maxPlayers: 8
        }
    }
}
</script>

<style>

</style>
