<template>
    <section class="war-guess">
        <div class="draw-container" >
            <div class="drawing" :style="{ 'background-image': `url(${$root.drawUrl})`}">
                
            </div>
        </div>
        <div class="guesses">
            <h1 class="gradient-heading">Start your Guessing!</h1>
            <div class="guess-block">
                <p v-for="(guess, index) in guesses" :key="guess + index">
                    {{guess.player}} - {{guess.guess}}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            guesses: []
        }
    },
    created(){
        this.$root.showCounter = true;

        this.$connection.on("PlayerGuess", this.playerGuess);

        this.$eventBus.$on('timer-finished', this.timerFinished);
    },
    methods: {
        playerGuess(res){
            if(res.isCorrect)
                res.guess = "Correct!"
            if(this.guesses.length > 19)
                this.guesses[19] = res;
            else
                this.guesses.push(res);
        },
        timerFinished() {
            console.log("Invoked: NextGamePhase: ");
            this.$connection.invoke('NextGamePhase', this.$root.sessionId);
        }
    },
    beforeDestroy() {
        this.$eventBus.$off('PlayerGuess', this.playerGuess);
        this.$eventBus.$off('timer-finished', this.timerFinished);
    }
}
</script>

<style>

</style>
