<template>
    <main class="home">
        <img src="../../assets/home.jpg" alt="">
        <div class="home-container">
            <h1 class="heading-primary">Draw Wars</h1>
            <button class="btn btn-primary" @click="$router.push({ path: 'join' })">New Room!</button>
        </div>
    </main>
</template>

<script>
export default {
    methods: {
        
    }
}
</script>

<style>

</style>
