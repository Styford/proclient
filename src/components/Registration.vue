<template>
  <div id="registration">
    <div class="container align-middle col-sm-5 col-md-3 col-lg-2 col-xl-2">
      <form  @submit="login">
        <div class="form-group">
          <label for="inputEmail1">Электронная почта</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
            required
          />
          <small
            id="emailHelp"
            class="form-text text-muted"
          >Введите вашу рабочую почту @elesy.ru</small>
        </div>
        <div class="form-group">
          <label for="inputPassword1">Пароль</label>
          <input required v-model="pass1" type="password" class="form-control" id="inputPassword1" />
        </div>
        <div class="form-group">
          <label for="inputPassword2">Подтверждение</label>
          <input required v-model="pass2" type="password" class="form-control" id="inputPassword2" />
          <span style="color: red"> {{ response.message }} </span>
        </div>
        
        <button type="submit" class="btn btn-dark">Сделать мир лучше!</button>
        <hr>
        <p class="pseudo-link" v-on:click="goToLogin">У меня есть аккаунт</p>
      </form>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';

export default {
  data() {
    return {
      email: "",
      pass1: "",
      pass2: "",
      response: {},
      payload: {},
    };
  },
  methods: {
    login(evt) {      
      evt.preventDefault();
      this.response = "";
      const path = this.$store.getters.getApiUrl + '/user/registration';
      if (this.pass1 == this.pass2) {
        this.payload = {
          "email" : this.email,
          "password" : this.pass1
        },
        this.axios.post(path, this.payload)
          .then((res) => {
            this.response = res.data;
            console.log(this.response.message);
            if (this.response.status === "success") {
              localStorage.current_user = this.response.current_user;
              this.$router.push('/');
            }
          })
          .catch((error) => {
            console.error(error);
          })
      } else {
        this.response = "Пароли не совпадают";
        this.pass1 = "";
        this.pass2 = "";
      }
    },
    goToLogin(){
        this.$router.push('/user/login');
    },
  },
  created() {
        //this.login();
    },
}
</script>

<style scoped>
  #registration {
    margin-top: 5%;
  }
  .pseudo-link:hover {
    cursor: pointer;
  }
</style>