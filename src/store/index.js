import Vue from 'vue'
import Vuex from 'vuex'

import base from './modules/base'
import contactBook from './modules/contact-book'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    base,
    contactBook
  }
});

export default store;
