<template>
  <v-container
      v-if="contactList.length > 0"
      fluid class="pt-0">
    <v-col cols="12">
      <v-row>
        <v-simple-table
            style="width: 100%"
        >
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left font-weight-regular"></th>
              <th class="text-left font-weight-regular">Contatos</th>
              <th class="text-left font-weight-regular">E-mail</th>
              <th class="text-left font-weight-regular">Telefone</th>
              <th class="text-left"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in contactList"
                :class="{'highlight': highlighted(item)}"
                :key="index">
              <td class="font-weight-regular" width="30px">
                <contact-avatar :contactName="item.name"/>
              </td>
              <td class="font-weight-regular">{{ item.name }}</td>
              <td class="font-weight-regular">{{ item.email }}</td>
              <td class="font-weight-regular">{{ item.telephone }}</td>
              <td>
                <div class="d-flex justify-end">

                  <v-img
                      @click="editItem(item, index)"
                      class="mr-6"
                      max-width="16px"
                      src="@/assets/ic-edit.svg"/>

                  <v-img
                      @click="deleteItem(item.id)"
                      max-width="16px"
                      src="@/assets/ic-delete.svg"/>
                </div>

              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-row>
    </v-col>
  </v-container>
  <no-items
      v-else
  />

</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { filter, find, findIndex, differenceWith, first } from 'lodash'
import ContactAvatar from "./ContactAvatar";
import NoItems from "@/components/contactBook/NoItems";

export default {
  name: 'list',
  components: { ContactAvatar, NoItems },
  mounted() {
    this.contactList = Object.assign([], this.contacts)
  },
  data() {
    return {
      contactList: []
    }
  },
  methods: {
    ...mapActions('contactBook',
      [
        'setEditedItem', 'openCreateOrUpdateDialog',
        'setIdToBeDeleted', 'openDeleteDialog',
        'searchInContacts'
      ]
    ),
    editItem(editedItem, index) {
      this.setEditedItem({ editedItem, index });
      this.openCreateOrUpdateDialog();
    },
    deleteItem(id) {
      this.openDeleteDialog();
      this.setIdToBeDeleted(id)
    },
    removeHighlight(id) {
      const vm = this;
      setTimeout(() => {
        const item = find(vm.contactList, { id })
        const index = findIndex(vm.contactList, { id })
        vm.$set(vm.contactList, index, { ...item, highlight: false }) //usado para fazer a mudança ser reativa
      }, 10000)
    },
    highlighted(item) {
      if (!item)
        return false

      return item.hasOwnProperty('highlight') ? item.highlight : false;
    },
  },

  computed: {
    ...mapGetters('contactBook', ['contacts', 'searchField']),
  },
  watch: {
    searchField(searchTerm) {
      if (searchTerm !== '') {
        this.contactList = filter(this.contacts, (contact) => {
          return new RegExp(`${ searchTerm }`, 'i').exec(contact.name) !== null
        })
      } else {
        this.contactList = Object.assign([], this.contacts);
      }
    },
    contacts(newContacts) {
      if (newContacts.length <= this.contactList.length) {
        this.contactList = Object.assign([], newContacts)
      } else {
        const updatedItem = first(differenceWith(newContacts, this.contactList, (firstArray, secondArray) => firstArray.id === secondArray.id));
        this.contactList.push({ ...updatedItem, highlight: true })
        this.removeHighlight(updatedItem.id);
      }
    }
  }
}

</script>

<style lang="scss">
.v-data-table {
  .v-data-table__wrapper {
    border-radius: 4px;
    border: 1px solid $white;
  }

  thead {
    background: #fff !important;
    th{
      color: $bluey-grey !important;
    }
  }

  tbody {
    tr {
      &.highlight{
        background: $very-light-pink !important;
      }
    }
    tr:hover {
      background: $very-light-pink !important;
      cursor: pointer;
    }
  }
}
</style>
