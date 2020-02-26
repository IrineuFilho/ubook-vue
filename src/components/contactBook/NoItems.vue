<template>
  <div
      class="d-flex flex-column">
    <v-img
        max-width="237"
        src="@/assets/ic-book.svg">
    </v-img>


    <div>
    <span
        class="elevation-2"
    >Nenhum contato foi criado ainda.
    </span>
    </div>


    <v-btn
        class=""
    >
      adasd
    </v-btn>

  </div>


</template>
<script>

  export default {
    name: 'list',
    data() {
      return {
        desserts: [{ name: 'a', calories: '1' }]
      }
    },
    computed: {
      contacts() {
        return this.$store.getters['contactBook/getContacts']
      }
    }
  }

</script>

<style lang="scss">

</style>
