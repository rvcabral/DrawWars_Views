<template>
    <section class="scores">
        <h1 class="heading-primary gradient-heading">War Scores</h1>
        <ul>
            <li v-for="(score, index) in scores" :key="score.username + index">
                {{score.username}} - {{score.score}}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            scores: [{username: 'Briceno', score: '20'},{username: 'Cabral', score: '20'},{username: 'Vieira', score: '20'},]
        }
    },
    created() {
        this.$root.showCounter = true;
        this.$eventBus.$on('timer-finished', () => {
            this.$connection.invoke('ResultsShown', this.$root.sessionId);
        });
    }
}
</script>

<style>

</style>
