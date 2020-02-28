<template>
  <v-container
      class="mt-12"
      fluid
  >
    <v-row
        class="mt-5"
        justify-center>
      <v-col>
        <v-img
            class="mx-auto"
            max-width="237"
            src="@/assets/ic-book.svg">
        </v-img>
      </v-col>

    </v-row>
    <v-row>
      <v-col
          class="text-center"
      >
          <span>
            {{noContactsMessage}}
          </span>
      </v-col>
    </v-row>
    <v-row justify-center>
      <v-col
          class="text-center"
      >
        <add-contact-button/>
      </v-col>
    </v-row>

  </v-container>

</template>
<script>
import AddContactButton from "./AddContactButton";
import { mapGetters } from 'vuex';

export default {
  name: 'no-items',
  components: { AddContactButton },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('contactBook', ['contacts']),
    noContactsMessage() {
      return this.contacts.length === 0 ? 'Nenhum contato foi criado ainda.' : 'Nenhum resultado encontrado'
    },
  }
}

</script>

<style lang="scss">

</style>
