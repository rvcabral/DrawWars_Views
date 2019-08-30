<template>
    <section class="war-guess">
        <div class="draw-container" >
            <div class="drawing" :style="{ 'background-image': `url(${$root.drawUrl})`}">
                
            </div>
        </div>
        <div class="guesses">
            <h1 class="gradient-heading">Begin Guessing!</h1>
            <div class="guess-block" v-chat-scroll="{always: true, smooth: true}">
                <span v-for="(guess, index) in guesses" :key="guess + index">
                    <p> {{guess.player}}: </p>
                    <p> {{guess.guess}} </p>
                </span>
                <h3 class="gradient-heading">{{allGuessedMessage}}</h3>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            guesses: [],
            allGuessedMessage: ''
        }
    },
    created(){
        this.$root.showCounter = true;

        this.$root.connection.on("PlayerGuess", this.playerGuess);

        this.$eventBus.$on('timer-finished', this.timerFinished);
        this.$eventBus.$on('all-correct', this.allGuessed);
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
            this.$root.connection.invoke('NextGamePhase', this.$root.sessionId);
        },
        allGuessed(){
            this.allGuessedMessage = 'Submission time is over!'
        }
    },
    beforeDestroy() {
        this.$eventBus.$off('PlayerGuess', this.playerGuess);
        this.$eventBus.$off('timer-finished', this.timerFinished);
        this.$eventBus.$off('all-correct', this.allGuessed);
    }
}
</script>

<style>

</style>
