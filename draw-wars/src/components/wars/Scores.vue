<template>
    <section class="scores">
        <h1 class="heading-primary gradient-heading">War Scores!!</h1>
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
    }
}
</script>

<style>

</style>
