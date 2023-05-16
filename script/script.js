const app = Vue.createApp({
    data() {
        return {
            randomEmails: [

            ]
        }
    },
    methods: {
        
    },

    created() {
        for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(serverResponse => this.randomEmails.push(serverResponse.data.response));
            }
    }
});

app.mount('#app');
