<template>
  <div id="app" class="base">
    <router-view/>
    <app-timer v-if="$root.showCounter" :timeCap="$root.countdownTime"></app-timer>
  </div>
</template>

<style>
</style>
