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
        
        //.withUrl("http://52.211.139.236/DrawWars/Server")

        this.$root.connection.onclose(() => {
            this.$root.connection.start();
            console.log("connection started");
        });
        if(!this.$root.connection.receivedHandshakeResponse)
            this.$root.connection.start();
        /* let startedPromise = null
        let ctx = this;
        function start () {
            startedPromise = ctx.$root.connection.start().catch(err => {
                console.error('Failed to connect with hub', err)
                return new Promise((resolve, reject) => 
                setTimeout(() => start().then(resolve).catch(reject), 5000))
            })
            return startedPromise
        }
        this.$root.connection.onclose(() => start()) 
        start()*/
        this.$root.connection.on("AckUIClient", (res) =>{
            //TODO:
            //maybe guard the session in local storage to prevent accidents like refreshing page or going back!
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
