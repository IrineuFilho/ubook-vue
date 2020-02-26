<template>
  <v-app>
    <toolbar></toolbar>

    <list
        v-if="contacts.length > 1"
    />
    <no-items
        v-else
    />

  </v-app>
</template>

<script>
  import Toolbar from "@/components/contactBook/Toolbar";
  import List from "@/components/contactBook/List";
  import NoItems from "@/components/contactBook/NoItems";

  export default {
    name: 'App',

    components: {
      Toolbar,
      List,
      NoItems,
    },

    data: () => ({
      //
    }),
    computed: {
      contacts() {
        return this.$store.getters['contactBook/getContacts']
      }
    }
  };
</script>

<style>
  html {
    background: #f8f9fd !important;
  }
</style>
