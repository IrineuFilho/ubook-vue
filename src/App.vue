<template>
  <v-app>
    <alert-snack-bar/>
    <create-or-update-dialog/>
    <delete-contact-dialog/>

    <toolbar></toolbar>

    <list/>

  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Toolbar from "@/components/contactBook/Toolbar";
import List from "@/components/contactBook/List";
import CreateOrUpdateDialog from "@/components/contactBook/CreateOrUpdateDialog";
import DeleteContactDialog from "@/components/contactBook/DeleteContactDialog";
import AlertSnackBar from "@/components/base/AlertSnackBar";

export default {
  name: 'App',
  components: {
    Toolbar,
    List,
    CreateOrUpdateDialog,
    DeleteContactDialog,
    AlertSnackBar
  },
  beforeMount() {
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

<style lang="scss">
  #app {
    background: $pale-grey-two !important;
  }
</style>
