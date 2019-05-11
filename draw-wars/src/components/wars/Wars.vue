<template>
    <component :is="$root.gameStage"/>
</template>

<script>
import Rules from './Rules.vue'
import DrawTime from './DrawTime.vue'
import WarGuess from './WarGuess.vue'

export default {
    components: {'war-rules': Rules, 'war-draw-time': DrawTime, 'war-guess': WarGuess},
    data() {
        return {
        }
    },
    created(){
        this.$root.gameStage = 'war-rules';
    }
}
</script>

<style>

</style>
