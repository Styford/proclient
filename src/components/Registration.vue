<template>
  <div id="registration">
    <div class="container align-middle col-sm-5 col-md-3 col-lg-2 col-xl-2">
      <form  @submit="login">
        <div class="form-group">
          <label for="exampleInputEmail1">Электронная почта</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
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
          <label for="exampleInputPassword1">Пароль</label>
          <input required v-model="pass1" type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Подтверждение</label>
          <input required v-model="pass2" type="password" class="form-control" id="exampleInputPassword2" />
          <span style="color: red"> {{response}} </span>
        </div>
        
        <button type="submit" class="btn btn-dark">Сделать мир лучше!</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: "",
      pass1: "",
      pass2: "",
      response: "",
      payload: {},
    };
  },
  methods: {
    login(evt) {      
      evt.preventDefault();
      this.response = "";
      const path = 'http://localhost:5000/user/registration';
      if (this.pass1 == this.pass2) {
        this.payload = {
          "email" : this.email,
          "password" : this.pass1
        },
        console.log(this.payload)
        axios.post(path, this.payload)
          .then((res) => {
            this.response = res.data.response;

          })
          .catch((error) => {
            console.error(error);
          })
      } else {
        this.response = "Пароли не совпадают";
        this.pass1 = "";
        this.pass2 = "";
      }
    }
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
</style>