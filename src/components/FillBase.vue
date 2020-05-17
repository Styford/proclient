<template>
  <div class="container-fluid" style="margin-top : 30px">
    <h4>Справочники</h4>
    <div class="row justify-content-md-center">
      <div class="skill-desc-form col-sm">
        <h6>Навыки</h6>
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
              class="form-control-sm input-field"
              id="skill_desc_desc"
              v-model="skillDescDesc"
              required
            />
          </div>

          <div class="form-group input-field">
            <input
              placeholder="Базовое ПО"
              class="form-control-sm input-field"
              id="skill_desc_base"
              v-model="skillDescBase"
              required
            />
          </div>
          <button type="submit" class="btn btn-dark input-field">Добавить</button>
        </form>
      </div>

      <div class="skill-desc-form col-sm">
        <h6>Сертификаты, протколы, удостоверения</h6>
        <form @submit="send_cert_desc">
          <div class="form-group input-field">
            <input
              placeholder="Описание удостоверения/протокола"
              class="form-control-sm input-field"
              id="skill_cert_desc"
              v-model="skillCertDesc"
              required
            />
          </div>
          <button type="submit" class="btn btn-dark input-field ">Добавить</button>
        </form>
      </div>

      <div class="skill-desc-form col-sm">
        <h6>Группы/отделы</h6>
        <form @submit="send_group_name">
          <div class="form-group input-field">
            <input
              placeholder="Название группы/отдела"
              class="form-control-sm input-field"
              id="group_name"
              v-model="groupName"
              required
            />
          </div>
          <button type="submit" class="btn btn-dark input-field">Добавить</button>
        </form>
      </div>
    </div>
    <div class="row justify-content-md-center">
        <ul class="container list-base list-unstyled text-left col-sm">
            <input
              placeholder="Введите текст для фильтрации списка"
              class="form-control-sm input-field"
              id="group_filter"
              v-model="groupFilter"
              @input="filter_group"
            />
            <li v-for="skill in getBaseSkillDesc" :key="skill" >
                {{ skill }}                
            </li>
        </ul>
        <ul class="container list-base list-unstyled text-left col-sm">
            <li v-for="cert in getBaseCertDesc" :key="cert">
                {{ cert }}
            </li>
        </ul>
        <ul class="container list-base list-unstyled text-left col-sm">
            <li v-for="group in getBaseGroupName" :key="group">
                {{ group }}
            </li>
        </ul>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      payload: {},
      CertDescDesc: "",
      skillDescArea: "",
      skillDescDesc: "",
      skillDescBase: "",
      skillCertDesc: "",
      groupName: "",
      allCertDesc: [],
      allSkillDesc: [],
      allGroupName: [],
      groupFilter: ""

    };
  },
  methods: { 
    filter_group(value) {
      this.$store.dispatch("filter_base_groups", this.groupFilter)
    },

    send_skill_desc(evt) {
        evt.preventDefault();
        this.payload = {
            description: this.skillDescDesc,
            area: this.skillDescArea,
            baseSoftware: this.skillDescBase
        };
        this.$store.dispatch("send_skill_desc", this.payload);
        this.skillDescArea = this.skillDescDesc = this.skillDescBase = "";
    },

    send_cert_desc(evt) {
      evt.preventDefault();
      this.payload = {
        description: this.skillCertDesc
      };
      this.$store.dispatch("send_cert_desc", this.payload);
      this.skillCertDesc = "";
    },

    send_group_name(evt) {
        evt.preventDefault();
        this.payload = {
            groupname: this.groupName
        }
        this.$store.dispatch("send_group_name", this.payload);
        this.groupName = "";
    }
  },
  computed: mapGetters([
    "getApiUrl", 
    "getFillBaseReponse",
    "getBaseGroupName",
    "getBaseSkillDesc",
    "getBaseCertDesc"
    ]),
  created() {
      //this.get_base_certs(),
      //this.get_base_group(),
      //this.get_base_skill(),
      this.$store.dispatch('get_base_skill'),
      this.$store.dispatch('get_base_certs'),
      this.$store.dispatch('get_base_groups')
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
.list-base {
    min-height: 120px;
    margin: 10px;
    border: 1px;
    border-style: solid;
    border-radius: 3px;
    border-color: #aaa;
    padding: 10px;
    padding-left: 30px;
    max-width: 500px;
}

</style>
