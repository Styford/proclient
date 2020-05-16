<template>
  <div class="container-fluid" style="margin-top : 30px">
    <h4>Справочники</h4>
    <div class="row justify-content-md-center">
      <div class="skill-desc-form col-sm">
        <h6>Навык</h6>
        <form @submit="send_skill_desc">
          <div class="align-middle input-field">
            <select
              id="skill_desc_area"
              class="form-control-sm input-field"
              v-model="skillDescArea"
            >
              <option value="VU" selected>Верхний уровень</option>
              <option value="SU">Средний уровень</option>
              <option value="KD">Конструкторская документаця</option>
              <option value="ED">Эксплуатационная документаця</option>
            </select>
          </div>

          <div class="form-group input-field">
            <input
              placeholder="Описание навыка"
              class="form-control-sm input-field "
              id="skill_desc_desc"
              v-model="skillDescDesc"
              required
            />
          </div>

          <div class="form-group input-field">
            <input
              placeholder="Базовое ПО"
              class="form-control-sm input-field "
              id="skill_desc_base"
              v-model="skillDescBase"
              required
            />
          </div>
          <button type="submit" class="btn btn-dark input-field">
            Добавить
          </button>
        </form>
      </div>

      <div class="skill-desc-form col-sm">
        <h6>Сертификаты, протколы, удостоверения</h6>
        <form @submit="send_cert_desc">
          <div class="form-group input-field">
            <input
              placeholder="Описание удостоверения/протокола"
              class="form-control-sm input-field "
              id="skill_cert_desc"
              v-model="skillCertDesc"
              required
            />
          </div>
          <button type="submit" class="btn btn-dark input-field">
            Добавить
          </button>
        </form>
      </div>

      <div class="skill-desc-form col-sm">
        <h6>Группы/отделы</h6>
        <form @submit="send_group_name">
          <div class="form-group input-field">
            <input
              placeholder="Название группы/отдела"
              class="form-control-sm input-field "
              id="group_name"
              v-model="groupName"
              required
            />
          </div>
          <button type="submit" class="btn btn-dark input-field">
            Добавить
          </button>
        </form>
      </div>

    </div>
    <div class="row justify-content-md-center">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payload: {},
      CertDescDesc: "",
      skillDescArea: "",
      skillDescDesc: "",
      skillDescBase: "",
      skillCertDesc: "",
      groupName: ""
    };
  },
  methods: {
    send_skill_desc(evt) {
      evt.preventDefault();
      this.response = "";
      const path = "http://10.99.0.103:5000/api/skills/addname";

      (this.payload = {
        description: this.skillDescDesc,
        area: this.skillDescArea,
        baseSoftware: this.skillDescBase
      }),
        this.axios
          .post(path, this.payload)
          .then(res => {
            this.response = res.data;
            console.log(this.response.message);
            if (this.response.status === "success") {
              console.log(res);
              this.skillDescDesc = "";
            }
          })
          .catch(error => {
            console.error(error);
          });
    },
    send_cert_desc(evt) {
      evt.preventDefault();
      this.response = "";
      const path = "http://10.99.0.103:5000/api/certs/addname";

      (this.payload = {
        description: this.skillCertDesc
      }),
        this.axios
          .post(path, this.payload)
          .then(res => {
            this.response = res.data;
            console.log(this.response.message);
            if (this.response.status === "success") {
              console.log(res);
              this.skillCertDesc = "";
            }
          })
          .catch(error => {
            console.error(error);
          });
    },
    send_group_name(evt) {
      evt.preventDefault();
      this.response = "";
      const path = "http://10.99.0.103:5000/user/addgroup";

      (this.payload = {
        groupname: this.groupName
      }),
        this.axios
          .post(path, this.payload)
          .then(res => {
            this.response = res.data;
            console.log(this.response.message);
            if (this.response.status === "success") {
              console.log(res);
              this.groupName = "";
            }
          })
          .catch(error => {
            console.error(error);
          });
    }
  }
};
</script>

<style scoped>
.skill-desc-form {
  margin: 10px;
  border: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: #aaa;
  padding: 10px;
  max-width: 500px;
}
.input-field {
  margin: 2px;
  width: 100%;
  font-size: 0.7rem;
}
</style>
