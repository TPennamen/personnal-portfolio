import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mousePointerApiUrl: process.env.VUE_APP_MP_API_URL,
        character: {},
        messages: { error: "" }
    },

    mutations: {
        setCharacter(state, character) {
            state.character = character;
            localStorage.setItem("character", character);
        },

        setErrorMessage(state, error) {
            state.messages.error = error;

            setTimeout(() => {
                state.messages.error = "";
            }, 3000);
        }
    }
});
