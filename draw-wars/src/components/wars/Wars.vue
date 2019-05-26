<template>
    <component :is="gameStage"/>
</template>

<script>
import Rules from './Rules.vue'
import DrawTime from './DrawTime.vue'
import WarGuess from './WarGuess.vue'
import Scores from './Scores.vue'

export default {
    /*
        'war-rules': Rules, 
    */
    components: {'war-draw-time': DrawTime, 'war-guess': WarGuess, 'war-scores': Scores},
    props:{
        
    },
    data() {
        return {
            gameStage:'war-draw-time'
        }
    },
    created(){
        this.$root.showCounter = true;

        this.$connection.on("ShowDrawing", (res) =>{
            this.$eventBus.$emit('clear-timer');
            this.$root.drawUrl = res.drawUrl;
            this.$root.timeout = res.timeout;
            this.gameStage = 'war-guess';
        });
    }
}
</script>

<style>

</style>
