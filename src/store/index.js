import Vuex from 'vuex'
import cart from './modules/cart.js'
import Products from './modules/Products.js'

export default new Vuex.Store({
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        Products,
        cart
    }
})