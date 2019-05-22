<template>
    <section class="war-guess">
        <div class="draw-container" :style="{ 'background-image': 'url('+imgUrl+')'}"/>
        <div class="guesses">
            <h1 class="gradient-heading">Start your Guessing!</h1>
            <div class="guess-block">
                <p></p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            imgUrl: ''
        }
    },
    created(){
        this.$connection.on("ShowDrawing", (res) =>{
            this.imgUrl = res;
        });
    }
}
</script>

<style>

</style>
