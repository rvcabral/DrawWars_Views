<template>
    <aside class="timer">
        <span>{{time}}</span>
    </aside>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
export default {
    data(){
        return {
            time: 5
        }
    },
    created(){
        const timer = setInterval(() => {
            this.time -= 1;
            if(this.time == 0){
                clearInterval(timer);
                this.$eventBus.$emit('timer-finished');
            }
        },1000);
    }
}
</script>

<style>

</style>
