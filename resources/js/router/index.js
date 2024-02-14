import { createRouter, createWebHistory } from "vue-router";
import MainView from '../views/main/MainView.vue';
import Output from '../views/main/Output.vue'

const router = new createRouter({
    base: "/",
    history: createWebHistory(),
    routes: [
        { path: "/", component: MainView},       
        { path: "/output", component: Output},

    ],
});

export default router;