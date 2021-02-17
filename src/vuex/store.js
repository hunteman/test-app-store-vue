import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: []
    },
    //Синхронные действия
    mutations: {
        async Set_Products_To_State(state, products) {
            state.products = await products;
            console.log('products: ', products);
        }
    },
    //Асинхронные действия
    actions: {
        Get_Products_List({commit}) {
            // return axios('http://../../products.json', {
            //     method: "GET"
            // })
            return axios.get('http://localhost:8080/products.json', { baseURL: window.location.origin })
            .then((products) => {
                /* Вызывает мутацию (как колбэк) */
                commit('Set_Products_To_State', products.data.products);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
        }
    },
    //Получение информации как есть
    getters: {
        Products(state) {
            return state.products;
        }
    }
});

export default store;