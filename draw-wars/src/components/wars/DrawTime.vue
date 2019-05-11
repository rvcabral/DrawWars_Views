<template>
    <section class="draw-time">
        <img>
        <h1 class="heading-primary gradient-heading container">Start Drawing!!!!</h1>
    </section>
</template>

<script>
export default {
    created(){
        this.$root.countdownTime = 5;
        this.$root.showCounter = true;
    }
}
</script>

<style>

</style>
