
export default {
    actions: {
    },
    mutations: {
        
    },
    state: {
        api_url : "http://localhost:5000"
    },
    getters: {
        getApiUrl(state) {
            return state.api_url
        }
    }
}