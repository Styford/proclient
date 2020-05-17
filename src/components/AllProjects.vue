<template>
  <div class="container-fluid">
    <div class="mr-5 ml-5">
      <div class="dcol-xl-10">
        <h1>Проекты</h1>
        <hr />
        <br />
        <br />
        <button type="button" class="btn btn-success btn-sm">Новый проект</button>
        <br />
        <br />
        <table class="table table-hover table-sm">
          <thead class="sticky-top thead-dark">
            <tr>
              <th scope="col">ПГВР</th>
              <th scope="col">Hg</th>
              <th scope="col">КД</th>
              <th scope="col">ВУ</th>
              <th scope="col">СУ</th>
              <th scope="col">ЭД</th>
              <th scope="col">Базовое ПО</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 20" :key="n">
              <td>
                <b>986.57</b>
              </td>
              <td><font-awesome-icon icon="code-branch" class="fa-icon"/></td>
              <td>
                <div class="media">
                  <img
                    title="hhwwlll"
                    width="36"
                    height="36"
                    src="https://sun9-43.userapi.com/c855424/v855424708/15775d/wXpomsKnayc.jpg?ava=1"
                    class="align-self-start mr-3"
                    alt="..."
                  />
                  <div class="media-body">
                    <div class="media-username">Баранов А.</div>
                  </div>
                </div>
              </td>
              <td>
                <div class="media">
                  <img
                    title="hhwwlll"
                    width="36"
                    height="36"
                    src="https://sun9-43.userapi.com/c855424/v855424708/15775d/wXpomsKnayc.jpg?ava=1"
                    class="mr-3"
                    alt="..."
                  />
                  <div class="media-body">
                    <div class="media-username">Сызганов С.</div>
                  </div>
                </div>
                <div class="media" v-if="n==3">
                  <img
                    title="hhwwlll"
                    width="36"
                    height="36"
                    src="https://sun9-43.userapi.com/c855424/v855424708/15775d/wXpomsKnayc.jpg?ava=1"
                    class="mr-3"
                    alt="..."
                  />
                  <div class="media-body">
                    <div class="media-username">Веретёхин А.</div>
                  </div>
                </div>
              </td>
              <td>
                <div class="media">
                  <img
                    width="36"
                    height="36"
                    src="https://sun9-43.userapi.com/c855424/v855424708/15775d/wXpomsKnayc.jpg?ava=1"
                    class="mr-3"
                    alt="..."
                  />
                  <div class="media-body">
                    <div class="media-username">Горячев А.</div>
                  </div>
                </div>
              </td>
              <td>
                <div class="media">
                  <img
                    title="hhwwlll"
                    width="36"
                    height="36"
                    src="https://sun9-43.userapi.com/c855424/v855424708/15775d/wXpomsKnayc.jpg?ava=1"
                    class="mr-3"
                    alt="..."
                  />
                  <div class="media-body">
                    <div class="media-username">Городко И.</div>
                  </div>
                </div>
              </td>
              <td>
                <img
                  width="36"
                  height="36"
                  src="http://elesy.ru/media/567417/%D1%86%D0%B5%D0%BD%D1%82%D1%80.png"
                  class="mr-3"
                  title="SCADA INTEGRITY"
                  alt="..."
                />
                <img
                  width="36"
                  height="36"
                  src="http://elesy.ru/media/582873/scadainfinity-v2_150x150.jpg"
                  class="mr-3"
                  title="SCADA INFINITY"
                  alt="..."
                />
                <img
                  width="36"
                  height="36"
                  src="http://elesy.com/media/272006/infinity-etl.png"
                  title="SCADA INFINITY ETL"
                  class="mr-3"
                  alt="..."
                />
                <img
                  width="36"
                  height="36"
                  src="http://www.logo-avtomatika.ru/images/WINCC.png"
                  class="mr-3"
                  alt="..."
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
      addBookForm: {
        title: "",
        author: "",
        read: []
      }
    };
  },
  methods: {
    getBooks() {
      const path = "http://localhost:5000/books";
      axios
        .get(path)
        .then(res => {
          this.books = res.data.books;
        })
        .catch(error => {
          // eslint-отключение следующей строки
          console.error(error);
        });
    },
    addBook(payload) {
      const path = "http://localhost:5000/books";
      axios
        .post(path, payload)
        .then(() => {
          this.getBooks();
        })
        .catch(error => {
          // eslint-отключение следующей строки
          console.log(error);
          this.getBooks();
        });
    },
    initForm() {
      this.addBookForm.title = "";
      this.addBookForm.author = "";
      this.addBookForm.read = [];
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.addBookModal.hide();
      let read = false;
      if (this.addBookForm.read[0]) read = true;
      const payload = {
        title: this.addBookForm.title,
        author: this.addBookForm.author,
        read // сокращённое свойство
      };
      this.addBook(payload);
      this.initForm();
    },
    onReset(evt) {
      evt.preventDefault();
      this.$refs.addBookModal.hide();
      this.initForm();
    }
  },
  created() {
    this.getBooks();
  }
};
</script>

<style scoped>
  .media-username {
    text-align: left;
  }
  img {
    margin: 1px;
  }
  .fa-icon {
    font-size: 1.8em;
    color: rgb(56, 56, 56);
  }
</style>