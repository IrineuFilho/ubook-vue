import { filter } from 'lodash'

export default {
  namespaced: true,
  state: {
    contacts: [
      { name: 'Irineu', email: 'a', telephone: '82123123123' },
      { name: 'Irineu 1', email: 'b', telephone: '82123123123' },
      { name: 'Irineu 2', email: 'c', telephone: '82123123123' },
      { name: 'Irineu 3', email: 'd', telephone: '82123123123' },
      { name: 'Irineu 4', email: 'f', telephone: '82123123123' },
      { name: 'Irineu 5', email: 'g', telephone: '82123123123' },
      { name: 'Irineu 6', email: 'h', telephone: '82123123123' },
      { name: 'Irineu 7', email: 'j', telephone: '82123123123' },

      ],
    // contacts: [],
    dialog: false,
    deleteDialog: false,
    editedItem: {},
    editedIndex: -1,
    indexToBeDeleted: -1
  },

  mutations: {
    OPEN_CREATE_OR_UPDATE_DIALOG(state) {
      state.dialog = true;
    },
    CLOSE_CREATE_OR_UPDATE_DIALOG(state) {
      state.dialog = false;
    },
    OPEN_DELETE_DIALOG(state) {
      state.deleteDialog = true;
    },
    CLOSE_DELETE_DIALOG(state) {
      state.deleteDialog = false;
    },
    SET_EDITED_ITEM(state, { editedItem, index }) {
      state.editedItem = editedItem;
      state.editedIndex = index;
    },
    SAVE_EDITED_ITEM(state, payload) {
      const contacts = Object.assign([], state.contacts)
      if (state.editedIndex === -1) {
        contacts.push(payload)
      } else {
        contacts[state.editedIndex] = payload
      }
      state.contacts = [...contacts]

      state.editedIndex = -1;
      state.editedItem = {};
    },
    SET_INDEX_TO_BE_DELETED(state, index) {
      state.indexToBeDeleted = index;
    },
    DELETE_ITEM(state) {
      state.contacts.splice(state.indexToBeDeleted, 1)
      state.indexToBeDeleted = -1;
    },
    SEARCH_IN_CONTACTS(state, q) {
      state.contacts = filter(state.contacts, (contact) => {
        return contact.name.indexOf(q) !== -1
      })

    }
  },

  actions: {
    openCreateOrUpdateDialog({ commit }) {
      commit('OPEN_CREATE_OR_UPDATE_DIALOG')
    },
    closeCreateOrUpdateDialog({ commit }) {
      commit('CLOSE_CREATE_OR_UPDATE_DIALOG')
    },
    openDeleteDialog({ commit }) {
      commit('OPEN_DELETE_DIALOG')
    },
    closeDeleteDialog({ commit }) {
      commit('CLOSE_DELETE_DIALOG')
    },
    setEditedItem({ commit }, { editedItem = {}, index = -1 }) {
      commit('SET_EDITED_ITEM', { editedItem, index })
    },
    saveEditedItem({ commit }, payload) {
      commit('SAVE_EDITED_ITEM', payload)
    },
    setIndexToBeDeleted({ commit }, index) {
      commit('SET_INDEX_TO_BE_DELETED', index)
    },
    deleteContact({ commit }) {
      commit('DELETE_ITEM')
    },
    searchInContacts({ commit }, q) {
      commit('SEARCH_IN_CONTACTS', q)
    }
  },

  getters: {
    contacts(state) {
      return state.contacts;
    },
    dialog(state) {
      return state.dialog;
    },
    deleteDialog(state) {
      return state.deleteDialog;
    },
    editedItem(state) {
      return state.editedItem;
    },
    editedIndex(state) {
      return state.editedIndex;
    }
  }
}
