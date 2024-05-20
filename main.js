'use strict'

const { createApp } = Vue

const config = {
    data() {
        return {
            titolo: "Hello World",
        }
    }
}

createApp(config).mount('#app')