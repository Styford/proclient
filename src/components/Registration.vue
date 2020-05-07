<template>
  <div class="container align-middle col-sm-5 col-md-3 col-lg-2 col-xl-2">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Электронная почта</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >Введите вашу рабочую почту @elesy.ru</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Пароль</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword2">Подтверждение</label>
        <input type="password" class="form-control" id="exampleInputPassword2" />
      </div>
      <button type="submit" class="btn btn-dark">Войти</button>
    </form>
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
    login() {
      const path = 'http://localhost:5000/user/registration';
      axios.post(path, payload)
        .then((res) => {
          this.response = res.data.response;
        })
        .catch((error) => {
          console.error(error);
        })
    }
  }
}
</script>