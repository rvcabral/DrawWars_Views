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
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'

export default {
    created(){
        
        //.withUrl("http://localhost:5000/Server")
        const connection = new HubConnectionBuilder()
        .withUrl("http://52.211.139.236/DrawWars/Server")
        .configureLogging(LogLevel.Information)
        .build();
        this.$root.connection = connection;
        this.$root.connection.start();
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
