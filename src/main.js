import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import DetailSurah from "@/views/DetailSurah.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/surah:id",
        name: "surah",
        component: DetailSurah
    },
    {
        path: "/about",
        name: "about",
        component: AboutView
    },

];

const router= createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkExactActiveClass: "active",
    routes
});


export default router;

createApp(App).use(router).mount('#app')
