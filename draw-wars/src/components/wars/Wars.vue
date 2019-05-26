<template>
    <component :is="gameStage"/>
</template>

<script>
import Rules from './Rules.vue'
import DrawTime from './DrawTime.vue'
import WarGuess from './WarGuess.vue'
import Scores from './Scores.vue'
import DrawingsReady from './DrawingsReady.vue'

export default {
    /*
        'war-rules': Rules, 
    */
    components: {'war-draw-time': DrawTime, 'war-guess': WarGuess, 'war-scores': Scores, 'war-drawings-ready': DrawingsReady},
    props:{
        
    },
    data() {
        return {
            gameStage:'war-draw-time'
        }
    },
    created(){
        this.$root.showCounter = true;

        this.$connection.on("ReadyToShowDraws", (res) => {
            this.$eventBus.$emit('clear-timer');
            this.$root.timeout = res;
            this.gameStage = 'war-drawings-ready';
        });

        this.$connection.on("ShowDrawing", (res) => {
            this.$eventBus.$emit('clear-timer');
            this.$root.drawUrl = res.drawUrl;
            this.$root.timeout = res.timeout;
            this.gameStage = 'war-guess';
        });

        this.$connection.on("SeeResults", (res) => {
            this.$eventBus.$emit('clear-timer');
            this.$root.timeout = res;
            this.gameStage = 'war-scores';
        });

        this.$connection.on("EndOfGame", (res) => {
            this.$router.push({ name: 'home' });
        });
    }
}
</script>

<style>

</style>
