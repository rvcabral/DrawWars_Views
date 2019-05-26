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
            timer: null
        }
    },
    created(){
        this.timer = setInterval(() => {
            this.time -= 1;
            if(this.time == 0){
                clearInterval(this.timer);
                this.$root.showCounter = false;
            }
        },1000);

        this.$eventBus.$on('clear-timer', () => {
            clearInterval(this.timer);
            this.$root.showCounter = false;
        });
    }
}
</script>

<style>

</style>
