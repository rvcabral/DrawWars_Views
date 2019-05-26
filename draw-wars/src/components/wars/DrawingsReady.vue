<template>
    <section class="drawings-ready">
        <h1 class="heading-primary gradient-heading">Drawings being submitted</h1>
    </section>
</template>

<script>
export default {
    created(){
        this.$root.showCounter = true;

        this.$eventBus.$on('timer-finished', () => {
            this.$connection.invoke('DrawPhaseLogic', this.$root.sessionId);
        });
    }
}
</script>

<style>

</style>
