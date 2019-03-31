<template>
    <main class="home">
        <img src="../../assets/home.jpg" alt="">
        <div class="home-container">
            <h1 class="heading-primary">Draw Wars</h1>
            <button class="btn btn-primary" @click="navigateJoin">New Room!</button>
        </div>
    </main>
</template>

<script>
export default {
    methods: {
        navigateJoin(){
            this.$router.push({ path: 'join' });
        }
    }
}
</script>

<style>

</style>
