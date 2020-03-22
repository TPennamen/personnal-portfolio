import Vue from "vue";
import Router from "vue-router";

import Game from "@/views/game";
import Wizard from "@/views/wizard";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "game",
            component: Game
        },
        {
            path: "/wizard",
            name: "wizard",
            component: Wizard
        }
    ]
});
