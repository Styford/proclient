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
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
      </div>
      <button type="submit" class="btn btn-dark">Войти</button>
    </form>
  </div>
</template>