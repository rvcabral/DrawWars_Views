<template>
    <component :is="gameStage"/>
</template>

<script>
import Rules from './Rules.vue'
import DrawTime from './DrawTime.vue'

export default {
    components: {'war-rules': Rules, 'war-draw-time': DrawTime},
    data() {
        return {
            gameStage: 'war-rules'
        }
    },
    created(){
        this.$eventBus.$on('timer-finished', () =>{
            this.gameStage = 'war-draw-time';
        })
    }
}
</script>

<style>

</style>
