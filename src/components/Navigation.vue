<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <span class="badge badge-danger float-left float-top alfa-badge">ALFA</span>
      <a class="navbar-brand" href="#">ЭлеСи-Про</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" v-on:click="goToAllProjects">Проекты</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Разработчики</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" v-on:click="goToFillBase">Справочники</a>
          </li>
        </ul>
        <span class="navbar-text pseudo-link" v-on:click="goToLogin">
          {{ getCurrentUser.sEmail }}
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
      goToFillBase(){
          this.$router.push('/fillbase');
      },
      goToAllProjects(){
          this.$router.push('/projects/all');
      },
  }
}
</script>

<style scoped>
    .pseudo-link:hover {
        cursor: pointer;
    }
</style>