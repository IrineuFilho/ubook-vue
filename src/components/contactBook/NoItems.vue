<template>
  <v-container
      class="mt-12"
      fluid
  >
    <v-row
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
            Nenhum contato foi criado ainda.
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

export default {
  name: 'list',
  components: { AddContactButton },
  data() {
    return {}
  },
  computed: {
    contacts() {
      return this.$store.getters['contactBook/contacts']
    }
  }
}

</script>

<style lang="scss">

</style>
