<template>
    <div>
        <component :is="gameStage"/>
    </div>
</template>

<script>
import Rules from './Rules.vue'
import DrawTime from './DrawTime.vue'
import WarGuess from './WarGuess.vue'
import Scores from './Scores.vue'
import { setTimeout } from 'timers';

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
            this.$eventBus.$emit('all-correct');
            setTimeout(() => {
                this.$root.timeout = 15;
                this.$root.scores = res;
                this.gameStage = 'war-scores';
            },3000);
        });

        this.$root.connection.on("NextRound", (res) => {
            console.log("received: NextRound", res);
            this.$eventBus.$emit('clear-timer');
            this.$root.timeout = 60;
            this.gameStage = 'war-draw-time';
            setTimeout(() => {
                this.$root.showCounter = true;
            }, 500);
        });

        this.$root.connection.on("DrawThemes", (res) =>{
            console.log("received: DrawThemes", res);
            this.$root.timeout = res;
            this.$eventBus.$emit('clear-timer');
            this.gameStage = 'war-draw-time';
            setTimeout(() => {
                this.$root.showCounter = true;
            }, 500);
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
