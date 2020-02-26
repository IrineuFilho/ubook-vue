import Vue from 'vue'
import Vuex from 'vuex'

import contactBook from './modules/contact-book'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    contactBook: contactBook,
  }
});

export default store;
