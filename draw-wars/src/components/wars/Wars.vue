<template>
    <component :is="gameStage"/>
</template>

<script>
import Rules from './Rules.vue'
import DrawTime from './DrawTime.vue'
import WarGuess from './WarGuess.vue'
import Scores from './Scores.vue'

export default {
    components: {
        'war-draw-time': DrawTime, 
        'war-guess': WarGuess, 
        'war-scores': Scores
    },
    props:{
        
    },
    data() {
        return {
            gameStage:'war-draw-time'
        }
    },
    created(){
        this.$root.showCounter = true;

        this.$root.connection.on("ShowDrawing", (res) => {
            console.log("received: ShowDrawing");
            this.$eventBus.$emit('clear-timer');
            this.$root.drawUrl = res.drawUrl.drawUri;
            this.$root.timeout = res.timeout;
            this.gameStage = 'war-guess';
        });

        this.$root.connection.on("SeeResults", (res) => {
            console.log("received: SeeResults", res);
            this.$eventBus.$emit('clear-timer');
            this.$root.timeout = 15;
            this.$root.scores = res;
            this.gameStage = 'war-scores';
        });

        this.$root.connection.on("EndOfGame", (res) => {
            console.log("received: EndOfGame");
            this.$router.push({ name: 'home' });
        });
    }
}
</script>

<style>

</style>
