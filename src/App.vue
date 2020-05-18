<template>
  <div id="app">
    <navigation/>
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  methods: mapActions(['getCurrentUserFromServer']),
  mounted() {
      this.getCurrentUserFromServer()
  }
}
</script>

<style>
#app {
  font-size: 0.75rem;
  background-color: #ffffff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #565657;
}
</style>
