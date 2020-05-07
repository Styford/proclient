<template>
    <div class="container">
        <button type="button" class="btn btn-primary">{{ msg }}</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Ping',
    data() {
        return {
            msg: '',
        };
    },
    methods: {
        getMessage() {
            const path = 'http://localhost:5000/api/projects/get/';
            axios.get(path)
                .then((res) => {
                    //this.msg = res.data;
                    console.log(res.data)
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
    created() {
        this.getMessage();
    },
};
</script>