import Vue from "vue";
import App from "./App";
import VModal from 'vue-js-modal'

new Vue({
    components: { App },
    data: {
        counter: 0,
    },
    template: "<App/>"
}).$mount("#app");
