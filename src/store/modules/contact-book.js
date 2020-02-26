export default {
  namespaced: true,
  state: {
    contacts: [{name: 'Irineu', email: 'irineutenorio@gmail.com', telephone: '82123123123'}]
  },
  mutations: {

  },

  actions: {},

  getters: {
    getContacts(state) {
      return state.contacts;
    }
  }
}
