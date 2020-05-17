import axios from 'axios'

//axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
var config = {
    headers: {
        'Content-Type': 'application/json'
}
};

export default {
    actions: {
        login(ctx, payload) {      
            let response = {};
            const path = this.getters.getApiUrl + '/user/login';
            axios.post(path, payload, config)
              .then((res) => {
                response = res.data;
                if (response.status === "success") {
                  ctx.commit('updateCurentUser', response.current_user)
                  this.$router.push('/');
                }
              })
              .catch((error) => {
                console.error(error);
              })
            },
        getCurrentUserFromServer (ctx) {
            let response = {};
            const path = this.getters.getApiUrl + '/user/getcurrentuser';
            axios.get(path, )
                .then((res) => {
                    response = res.data;
                    if (response.status === "success") {
                      ctx.commit('updateCurentUser', response.current_user)
                    }
                })
                .catch((error) => {
                    console.error(error);
                })
        },
    },
    mutations: {
        updateCurentUser(state, current_user) {
            state.current_user = current_user;
        }
    },
    state: {
        current_user : {}
    },
    getters: {
        getCurrentUser(state) {
            return state.current_user
        }
    }
}