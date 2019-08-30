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
        this.$root.connection.onclose(() => {
            this.$root.connection.start();
            console.log("connection started");
        });
        if(!this.$root.connection.receivedHandshakeResponse)
            this.$root.connection.start();

        this.$root.connection.on("AckUIClient", (res) =>{
            this.$root.sessionId = res.sessionId;
            this.$router.push({ name: 'join', params: {roomCode: res.sessionRoom} });
        });
    },
    methods: {
        newRoom(){
            this.$root.connection
            .invoke("RegisterUIClient")
            .catch((err) => console.error('new room error: ', err));
        }
    }
}
</script>

<style>

</style>
