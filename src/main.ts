import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import { createPinia } from 'pinia'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
    ],
    })
createApp(App).use(router).use(createPinia()).mount('#app')
