'use strict'

const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Hello Vue!',
            picsum: `https://picsum.photos/200/300`
        }
    },
    
    methods: {

    },

    mounted(){
    }

}).mount('#app')