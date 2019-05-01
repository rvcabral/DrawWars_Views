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
            time: this.timeCap
        }
    },
    created(){
        const timer = setInterval(() => {
            this.time -= 1;
            if(this.time == 0){
                clearInterval(timer);
                this.$eventBus.$emit('timer-finished');
                this.$root.showCounter = false;
            }
        },1000);
    }
}
</script>

<style>

</style>
