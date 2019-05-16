<template>
    <main class="home">
        <img>
        <div class="home-container">
            <h1 class="heading-primary">Draw Wars</h1>
            <button class="btn btn-primary" @click="newRoom">New Room!</button>
        </div>
    </main>
</template>

<script>
export default {
    created(){
        this.$connection.start();
        this.$connection.on("AckUIClient", (res) =>{
            //TODO:
            //maybe guard the session in local storage to prevent accidents like refreshing page or going back!
            this.$router.push({ name: 'join', params: {roomCode: res} });
        });
    },
    methods: {
        newRoom(){
            this.$connection
            .invoke("RegisterUIClient")
            .catch((err) => console.error('new room error: ', err));
        }
    }
}
</script>

<style>

</style>
