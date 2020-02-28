import { findIndex } from 'lodash'

export default {
  namespaced: true,
  state: {
    contacts: [],
    // contacts: [],
    dialog: false,
    deleteDialog: false,
    editedItem: {},
    editedIndex: -1,
    indexToBeDeleted: -1,
    searchField: '',
  },

  mutations: {
    RECOVERY_CONTACTS(state) {
      if (localStorage.getItem('contacts') === null) {
        localStorage.setItem('contacts', JSON.stringify([]))
      }
      state.contacts = JSON.parse(localStorage.getItem("contacts"))
    },
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
        const id = Date.now()
        contacts.push({ ...payload, id })
      } else {
        contacts[state.editedIndex] = { ...payload, id: contacts[state.editedIndex].id }
      }
      state.contacts = [...contacts]

      state.searchField = ''
      state.editedIndex = -1;
      state.editedItem = {};

      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    SET_ID_TO_BE_DELETED(state, id) {
      state.idToBeDeleted = id;
    },
    DELETE_ITEM(state) {
      const index = findIndex(state.contacts, { id: state.idToBeDeleted })

      state.contacts.splice(index, 1)
      state.idToBeDeleted = -1
      state.searchField = ''

      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    SEARCH_IN_CONTACTS(state, q) {
      state.searchField = q
    }
  },

  actions: {
    recoveryContacts({ commit }) {
      commit('RECOVERY_CONTACTS')
    },
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
    setIdToBeDeleted({ commit }, id) {
      commit('SET_ID_TO_BE_DELETED', id)
    },
    deleteContact({ commit }) {
      commit('DELETE_ITEM')
    },
    searchInContacts({ commit }, q) {
      commit('SEARCH_IN_CONTACTS', q)
    }
  },

  getters: {
    contacts: state => state.contacts,
    dialog: state => state.dialog,
    deleteDialog: state => state.deleteDialog,
    editedItem: state => state.editedItem,
    editedIndex: state => state.editedIndex,
    searchField: state => state.searchField,
  }
}
