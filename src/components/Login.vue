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
          >Введите вашу рабочую почту @elesy.ru</small>
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
      this.response = {};
      const path = 'http://10.99.0.103:5000/user/login';
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