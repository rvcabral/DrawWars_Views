<template>
    <section class="scores">
        <h1 class="heading-primary gradient-heading">{{scoresHeading}}</h1>
        <ul v-if="scoresPhase">
            <li v-for="(score, index) in $root.scores" :key="score.username + index">
                {{score.username}} - {{score.score}}
            </li>
        </ul>
    </section>
</template>

<script>
import { setTimeout } from 'timers';

export default {
    data() {
        return {
            scores: [],
            scoresPhase: true
        }
    },
    created() {
        this.$root.showCounter = true;
        this.$eventBus.$on('timer-finished', this.timerFinished);
        this.$root.connection.on('NextRound', this.nextRound);
    },
    methods: {
        timerFinished() {
            if(this.scoresPhase){
                console.log("Invoked: ResultsShown: ");
                this.$root.connection.invoke('ResultsShown', this.$root.sessionId);
            }else {
                console.log("Invoked: RoundEndedAck: ");
                this.$root.connection.invoke('RoundEndedAck', this.$root.sessionId);
            }
        },
        nextRound(res){
            console.log("received: NextRound");
            this.$eventBus.$emit('clear-timer');
            this.$root.timeout = res;
            this.scoresPhase = false;
            setTimeout(() => {
                this.$root.showCounter = true;
            }, 500);
        }
    },
    computed:{
        scoresHeading(){
            return this.scoresPhase ? 'War Scores' : 'Get ready for next round!';
        }
    },
    beforeDestroy(){
        this.$eventBus.$off('timer-finished', this.timerFinished);
        this.$eventBus.$off('NextRound', this.timerFinished);
    }
}
</script>

<style>

</style>
