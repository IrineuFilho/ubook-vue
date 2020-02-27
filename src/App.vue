<template>
  <v-app>
    <create-or-update-dialog/>
    <delete-contact-dialog/>

    <toolbar></toolbar>

    <no-items
        v-if="contacts.length <= 0"
    />
    <list
        v-else
    />


  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Toolbar from "@/components/contactBook/Toolbar";
import List from "@/components/contactBook/List";
import NoItems from "@/components/contactBook/NoItems";
import CreateOrUpdateDialog from "@/components/contactBook/CreateOrUpdateDialog";
import DeleteContactDialog from "@/components/contactBook/DeleteContactDialog";

export default {
  name: 'App',
  components: {
    Toolbar,
    List,
    NoItems,
    CreateOrUpdateDialog,
    DeleteContactDialog
  },
  mounted(){
    this.recoveryContacts()
  },
  methods: {
    ...mapActions('contactBook', ['recoveryContacts'])
  },
  computed: {
    ...mapGetters('contactBook', ['contacts'])
  }
};
</script>

<style>
  #app {
    background: #f8f9fd !important;
  }
</style>
