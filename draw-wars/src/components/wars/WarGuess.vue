<template>
    <section class="war-guess">
        <div class="draw-container" >

        </div>
        <div class="guesses">
            <h1 class="gradient-heading">Start your Guessing!</h1>
            <div class="guess-block">
                <p></p>
            </div>
        </div>
    </section>
</template>

<script>
//:style="{'background-image': `url(${imgUrl})`}"
export default {
    data(){
        return {
            imgUrl: '~@/assets/draw-time.jpg'
        }
    }
}
</script>

<style>

</style>
