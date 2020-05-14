<template>
  <div id="login">
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
          >Введите вашу рабочую почту example@elesy.ru</small>
        </div>
        <div class="form-group">
          <label for="inputPassword1">Пароль</label>
          <input required v-model="pass1" type="password" class="form-control" id="inputPassword1" />
          <span style="color: red"> {{ response.message }} </span>
        </div>
        
        <button type="submit" class="btn btn-dark">Сделать мир лучше!</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      pass1: "",
      response: {},
      payload: {},
    };
  },
  methods: {
    login(evt) {
      evt.preventDefault();
      this.payload = {
              "email" : this.email,
              "password" : this.pass1
            },
      this.$store.dispatch('login', this.payload)
    }
  },
  created() {
        //this.login();
    },
}
</script>

<style scoped>
  #login {
    margin-top: 5%;
  }
</style>