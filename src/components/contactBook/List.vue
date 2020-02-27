<template>
  <v-container fluid>
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
            <tr v-for="(item, index) in contactList" :key="index">
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
                      @click="deleteItem(index)"
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

</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { filter } from 'lodash'
import ContactAvatar from "./ContactAvatar";

export default {
  name: 'list',
  components: {ContactAvatar},
  mounted(){
    this.contactList = this.contacts;
  },
  data() {
    return {
      contactList: [],
    }
  },
  methods: {
    ...mapActions('contactBook',
      [
        'setEditedItem', 'openCreateOrUpdateDialog',
        'setIndexToBeDeleted', 'openDeleteDialog'
      ]
    ),
    editItem(editedItem, index) {
      this.setEditedItem({ editedItem, index });
      this.openCreateOrUpdateDialog();
    },
    deleteItem(index) {
      this.openDeleteDialog();
      this.setIndexToBeDeleted(index)
    }
  },

  computed: {
    ...mapGetters('contactBook', ['contacts', 'searchField']),

  },
  watch: {
    searchField(newValue){
      if(newValue !== ''){
        this.contactList = filter(this.contacts, (contact) => {
          return contact.name.indexOf(newValue) !== -1
        })
      } else {
        this.contactList = this.contacts;
      }
    },
    contacts(newValue) {
      this.contactList = newValue;
    }
  }
}

</script>

<style lang="scss">
.v-data-table {
  .v-data-table__wrapper {
    border-radius: 4px;
    border: 1px solid #e1e1e1;
  }

  thead {
    background: #fff !important;
    th{
      color: #9198af !important;
    }
  }

  tbody {
    tr:hover {
      background: #fff3f2 !important;
      cursor: pointer;
    }
  }
}
</style>
