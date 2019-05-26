<template>
  <div id="app" class="base">
    <router-view/>
    <app-timer v-if="$root.showCounter" :timeCap="$root.timeoutInSeconds"></app-timer>
  </div>
</template>

<style>
</style>
