<template>
    <aside class="timer">
        <span>{{time}}</span>
    </aside>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
export default {
    props:{
        timeCap: {
            required: true,
            type: Number
        }
    },
    data(){
        return {
            time: this.timeCap,
            gameFlow:{
                'war-rules': 'war-draw-time',
                'war-draw-time': 'war-guess'
            },
            timer: null
        }
    },
    created(){
        this.timer = setInterval(() => {
            this.time -= 1;
            if(this.time == 0){
                clearInterval(this.timer);
                this.advanceStage();
            }
        },1000);

        this.$eventBus.$on('clear-timer', () => {
            clearInterval(this.timer);
            this.advanceStage();
        });
    },
    methods: {
        advanceStage(){
            this.$root.showCounter = false;
            this.$root.gameStage = this.gameFlow[this.$root.gameStage];
        }
    }
}
</script>

<style>

</style>
