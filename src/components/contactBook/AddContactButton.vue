<template>
  <v-btn
      color="secondary"
      class="text-none primary--text custom-buttom-height"
      rounded
      @click="openModal()"
  >
    <v-icon>mdi-plus</v-icon>
    Criar contato
  </v-btn>
</template>
<script>

import { mapActions } from 'vuex';
export default {
  name: 'add-contact-button',
  methods: {
    ...mapActions('contactBook', ['openCreateOrUpdateDialog', 'setEditedItem']),
    openModal(){
      this.setEditedItem({}, -1)
      this.openCreateOrUpdateDialog()
    }
  }
}

</script>

<style lang="scss" scoped>
  .custom-buttom-height{
    height: 32px !important;
  }

</style>
