<template>
    <section class="draw-time">
        <img>
        <h1 class="heading-primary gradient-heading container">Start Drawing!!!!</h1>
    </section>
</template>

<script>
export default {
    created(){
        this.$eventBus.$on('timer-finished', () => {
            this.$connection.invoke('SetTimesUp', this.$root.sessionId);
        });
    }
}
</script>

<style>

</style>
