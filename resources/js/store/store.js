import { createStore } from "vuex";
export default createStore({
    state() {
        return {
            form:{
                name: '',
                appeal: ''
            }
        }
    },
})