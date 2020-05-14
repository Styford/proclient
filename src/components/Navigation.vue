<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar w/ text</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        <span class="navbar-text user-name" v-on:click="goToLogin">
          {{ getCurrentUser }}
        </span>
      </div>
    </nav>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  computed: mapGetters(["getCurrentUser"]),
  methods: {
      goToLogin(){
          this.$router.push('/user/login');
      },
  }
}
</script>

<style scoped>
    .user-name:hover {
        cursor: pointer;
    }
</style>