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
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ПГВР</th>
              <th scope="col">Путь</th>
              <th scope="col">Разработчик</th>
              <th scope="col">Особенности</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>986.57</b>
              </td>
              <td>http://10.99.0.103:8888/986.57</td>
              <td>
                <div class="media">
                  <img src="https://via.placeholder.com/24" class="mr-3" alt="..." />
                  <div class="media-body">Сызганов Степан</div>
                </div>
                <div class="media">
                  <img src="https://via.placeholder.com/24" class="mr-3" alt="..." />
                  <div class="media-body">Горячев Алексей</div>
                </div>
              </td>
              <td>
                <img src="https://via.placeholder.com/24" class="mr-3" alt="..." />
                <img src="https://via.placeholder.com/24" class="mr-3" alt="..." />
                <img src="https://via.placeholder.com/24" class="mr-3" alt="..." />
                <img src="https://via.placeholder.com/24" class="mr-3" alt="..." />
              </td>
              <td>
                <button type="button" class="btn btn-warning btn-sm">Изменить</button>
                <button type="button" class="btn btn-danger btn-sm">Удалить</button>
              </td>
            </tr>
            <tr>
              <td>
                <b>986.67</b>
              </td>
              <td>http://10.99.0.103:8888/986.57</td>
              <td>
                <div class="media">
                  <img src="https://via.placeholder.com/24" class="mr-3" alt="..." />
                  <div class="media-body">Сызганов Степан</div>
                </div>
              </td>
              <td>
                <img src="https://via.placeholder.com/24" class="mr-3" alt="..." />
                <img src="https://via.placeholder.com/24" class="mr-3" alt="..." />
                <img src="https://via.placeholder.com/24" class="mr-3" alt="..." />
              </td>
              <td>
                <button type="button" class="btn btn-warning btn-sm">Изменить</button>
                <button type="button" class="btn btn-danger btn-sm">Удалить</button>
              </td>
            </tr>
            <tr>
              <td>
                <b>986.67</b>
              </td>
              <td>http://10.99.0.103:8888/986.57</td>
              <td>
                <div class="media">
                  <img src="https://via.placeholder.com/24" class="mr-3" alt="..." />
                  <div class="media-body">Сызганов Степан</div>
                </div>
              </td>
              <td>
                <img src="https://via.placeholder.com/24" class="mr-3" alt="..." />
                <img src="https://via.placeholder.com/24" class="mr-3" alt="..." />
              </td>
              <td>
                <button type="button" class="btn btn-warning btn-sm">Изменить</button>
                <button type="button" class="btn btn-danger btn-sm">Удалить</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-modal ref="addBookModal"
            id="book-modal"
            title="Add a new book"
            hide-footer>
      <b-form @submit="onSubmit" @reset="onReset" class="w-100">
      <b-form-group id="form-title-group"
                    label="Title:"
                    label-for="form-title-input">
          <b-form-input id="form-title-input"
                        type="text"
                        v-model="addBookForm.title"
                        required
                        placeholder="Enter title">
          </b-form-input>
        </b-form-group>
        <b-form-group id="form-author-group"
                      label="Author:"
                      label-for="form-author-input">
            <b-form-input id="form-author-input"
                          type="text"
                          v-model="addBookForm.author"
                          required
                          placeholder="Enter author">
            </b-form-input>
          </b-form-group>
        <b-form-group id="form-read-group">
          <b-form-checkbox-group v-model="addBookForm.read" id="form-checks">
            <b-form-checkbox value="true">Read?</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [],
      addBookForm: {
        title: '',
        author: '',
        read: [],
      },
    };
  },
  methods: {
    getBooks() {
      const path = 'http://localhost:5000/books';
      axios.get(path)
        .then((res) => {
          this.books = res.data.books;
        })
        .catch((error) => {
          // eslint-отключение следующей строки
          console.error(error);
        });
    },
    addBook(payload) {
      const path = 'http://localhost:5000/books';
      axios.post(path, payload)
        .then(() => {
          this.getBooks();
        })
        .catch((error) => {
          // eslint-отключение следующей строки
          console.log(error);
          this.getBooks();
        });
    },
    initForm() {
      this.addBookForm.title = '';
      this.addBookForm.author = '';
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
        read, // сокращённое свойство
      };
      this.addBook(payload);
      this.initForm();
    },
    onReset(evt) {
      evt.preventDefault();
      this.$refs.addBookModal.hide();
      this.initForm();
    },
  },
  created() {
    this.getBooks();
  },
};
</script>