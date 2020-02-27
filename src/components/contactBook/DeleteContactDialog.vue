<template>
  <v-dialog
      content-class="br-4"
      v-model="deleteDialog"
      persistent
      width="434"
  >
    <v-card>
      <v-card-title
          class="v-card__title-custom font-size--16px text--dark font-weight-regular"
      >
        Excluir contato
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <p
            class="py-4"
        >
          Deseja realmente excluir o contato?
        </p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            class="text--transform-none v-btn-actions-dialog"
            color="primary"
            rounded
            text
            @click="closeDeleteDialog()"
        >
          Cancelar
        </v-btn>

        <v-btn
            class="text--transform-none v-btn-actions-dialog"
            color="primary"
            rounded
            @click="destroy()"
        >
          Excluir
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'delete-contact-dialog',
    data() {
      return {}
    },
    methods: {
      ...mapActions('contactBook', ['closeDeleteDialog', 'deleteContact']),
      destroy() {
        this.deleteContact();
        this.closeDeleteDialog();
      }
    },
    computed: {
      ...mapGetters('contactBook', ['deleteDialog']),
    }
  }
</script>

<style lang="scss">
</style>
