<template>
    <div>
    <div class="container align-middle col-sm-6 col-md-4 col-lg-4 col-xl-4">
      <form  @submit="send_skill_name">
        <div class="form-group">
          <label for="skill_name_desc">Описание навыка</label>
          <input
            class="form-control"
            id="skill_name_desc"
            v-model="skillNameDesc"
            required
          />
        </div>
        <div class="container-fluid">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control" v-model="skillNameArea">
                <option selected>Верхний уровень</option>
                <option>Средний уровень</option>
                <option>Конструкторская документаця</option>
                <option>Эксплуатационная документаця</option>
            </select>
        </div>
        <div class="form-group">
          <label for="skill_name_base">Базовое ПО</label>
          <input
            class="form-control"
            id="skill_name_base"
            v-model="skillNameBase"
            required
          />
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
            payload : {},
            skillNameDesc : "",
            skillNameArea : "",
            skillNameBase : ""
        }
    },
    methods: {
    send_skill_name(evt) {      
        evt.preventDefault();
        this.response = "";
        const path = 'http://localhost:5000/api/skills/addname';
      
        this.payload = {
            "description" : this.skillNameDesc,
            "area" : this.skillNameArea,
            "baseSoftware" : this.skillNameBase
        },
        this.axios.post(path, this.payload)
          .then((res) => {
            this.response = res.data;
            console.log(this.response.message);
            if (this.response.status === "success") {
              console.log(res);
              this.skillNameDesc = "",
              this.skillNameArea = "",
              this.skillNameBase = ""
            }
          })
          .catch((error) => {
            console.error(error);
          })
    }
  },
}
</script>