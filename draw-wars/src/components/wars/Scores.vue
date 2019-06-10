<template>
    <section class="scores">
        <h1 class="heading-primary gradient-heading">War Scores</h1>
        <ul>
            <li v-for="(score, index) in $root.scores" :key="score.username + index">
                {{score.username}} - {{score.score}}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            scores: []
        }
    },
    created() {
        this.$root.showCounter = true;
        this.$eventBus.$on('timer-finished', this.timerFinished);
    },
    methods: {
        timerFinished() {
            console.log("Invoked: ResultsShown: ");
            this.$root.connection.invoke('ResultsShown', this.$root.sessionId);
        }
    },
    beforeDestroy(){
        this.$eventBus.$off('timer-finished', this.timerFinished);
    }
}
</script>

<style>

</style>
