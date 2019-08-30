<template>
  <div id="app" class="base">
    <router-view/>
    <app-timer v-if="$root.showCounter" :timeCap="$root.timeout"></app-timer>
  </div>
</template>

<script>
export default {
  created() {
    this.$eventBus.$emit('clear-timer');
    if (performance.navigation.type >= 0) {
      this.$router.push({ path: '/'});
    }

    const ctx = this;

    window.onpopstate = function(event) {
      if (performance.navigation.type >= 0) {
        ctx.$router.push({ path: '/'});
      }
    };
  }
}
</script>


<style>
</style>
