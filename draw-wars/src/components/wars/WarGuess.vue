<template>
    <section class="war-guess">
        <div class="draw-container" >
            <div class="drawing" :style="{ 'background-image': `url(${$root.drawUrl.drawUri})`}">
                
            </div>
        </div>
        <div class="guesses">
            <h1 class="gradient-heading">Start your Guessing!</h1>
            <div class="guess-block">
                <p v-for="(guess, index) in guesses" :key="guess + index">{{guess}}</p>
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
    }
}
</script>

<style>

</style>
