<template>
    <section class="draw-time">
        <img>
        <h1 class="heading-primary gradient-heading container">{{drawText}}</h1>
    </section>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            drawTime: true
        }
    },
    created(){
        this.$eventBus.$on('timer-finished', this.timerFinished);
        this.$connection.on("ReadyToShowDraws", this.readyToShowDraws);
    },
    methods: {
        timerFinished() {
            console.log("timer-finished - DrawTime: ", this.drawTime);

            if(this.drawTime){
                console.log("Invoked: SetTimesUp: ");
                this.$connection.invoke('SetTimesUp', this.$root.sessionId);
            }
            else{
                console.log("Invoked: DrawPhaseLogic: ");
                this.$connection.invoke('DrawPhaseLogic', this.$root.sessionId);
            }
        },
        readyToShowDraws(res){
            console.log("received: ReadyToShowDraws");
            this.$eventBus.$emit('clear-timer');
            this.$root.timeout = res;
            this.drawTime = false;
            setTimeout(() => {
                this.$root.showCounter = true;
            }, 500);
        }
    },
    computed:{
        drawText(){
            return this.drawTime ? 'Start Drawing!!!!' : 'Submitting drawings';
        }
    },
    beforeDestroy(){
        this.$eventBus.$off('timer-finished', this.timerFinished);
        this.$eventBus.$off('timer-ReadyToShowDraws', this.readyToShowDraws);
    }

}
</script>

<style>

</style>
