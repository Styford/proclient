import axios from 'axios'

var config = {
    headers: {
        'Content-Type': 'application/json'
}
};

export default {
    actions: {
        send_skill_desc(ctx, payload) {
            const path = this.getters.getApiUrl + "/api/skills/addname";
            axios.post(path, payload)
                .then(res => {
                    this.dispatch('get_base_skill');
                })
                .catch(error => {
                  console.error(error);
                });
        },

        send_cert_desc(ctx, payload) {
            const path = this.getters.getApiUrl + "/api/certs/addname";
            axios.post(path, payload)
                .then(res => {
                    this.dispatch('get_base_certs');
                })
                .catch(error => {
                  console.error(error);
                });
        },

        send_group_name(ctx, payload) {
            const path = this.getters.getApiUrl + "/user/addgroup";
            axios.post(path, payload)
                .then(res => {
                    this.dispatch('get_base_groups');
                })
                .catch(error => {
                  console.error(error);
                });
        },
        
        get_base_skill(ctx) {
            const path = this.getters.getApiUrl + "/api/skills/getalldesc";
            axios.get(path)
                .then(res => {
                    ctx.commit('updateBaseSkillDesc', res.data.skills)
                })
                .catch(error => {
                    console.error(error);
                  });
        },

        get_base_certs(ctx) {
            const path = this.getters.getApiUrl + "/api/user/getallcerts";
            axios.get(path)
                .then(res => {
                    ctx.commit('updateBaseCertDesc', res.data.certs)
                })
                .catch(error => {
                    console.error(error);
                  });
        },

        get_base_groups(ctx) {
            const path = this.getters.getApiUrl + "/api/user/getallgroups";
            axios.get(path)
                .then(res => {
                    ctx.commit('updateBaseGroupName', res.data.groups)
                })
                .catch(error => {
                    console.error(error);
                  });
        },
        filter_base_groups(ctx, filter) {
            let filtred = this.getters.getBaseGroupName.filter(function(gName) {
                return gName.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
            });
            ctx.commit('updateBaseGroupName', filtred);
        }

    },
    mutations: {
        updateResponse(state, response) {
            state.fillBaseResponse = response;
        },
        updateBaseGroupName(state, baseGroupName) {
            state.baseGroupName = baseGroupName;
        },
        updateBaseSkillDesc(state, baseSkillDesc) {
            state.baseSkillDesc = baseSkillDesc;
        },
        updateBaseCertDesc(state, baseCertDesc) {
            state.baseCertDesc = baseCertDesc;
        }
    },
    state: {
        fillBaseResponse : "",
        baseGroupName : {},
        baseSkillDesc : {},
        baseCertDesc : {},
        
    },
    getters: {
        getFillBaseReponse(state) {
            return state.fillBaseResponse
        },
        getBaseGroupName(state) {
            return state.baseGroupName
        },
        getBaseCertDesc(state) {
            return state.baseCertDesc
        },
        getBaseSkillDesc(state) {
            return state.baseSkillDesc
        },
    }
}