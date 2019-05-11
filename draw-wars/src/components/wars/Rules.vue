<template>
    <section class="rules">
        <div class="page-wrapper">
            <h1>Game Rules</h1>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            </ul>
        </div>
        <button class="btn btn-primary" @click="skip">Skip</button>
    </section>
</template>

<script>
export default {
    methods: {
        skip(){
            this.$eventBus.$emit('clear-timer');
        }
    },
    created(){
        this.$root.countdownTime = 30;
        this.$root.showCounter = true;
    }
}
</script>

<style>

</style>
