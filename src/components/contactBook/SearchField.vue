<template>
  <v-text-field
      v-model="search"
      class="pale-lilac no-box-shadow"
      append-icon="mdi-magnify"
      solo
      dense
      hide-details
      placeholder="Buscar..."
  ></v-text-field>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import ContactAvatar from "./ContactAvatar";

export default {
  name: 'search-field',
  data() {
    return {
      search: '',
      interval: null,
    }
  },
  methods: {
    ...mapActions('contactBook', ['searchInContacts']),
  },
  watch: {
    search(newValue) {
      clearTimeout(this.interval)
      this.interval = setTimeout(() => {
        this.searchInContacts(this.search)
      }, 900)

    }
  }
}
</script>

<style lang="scss">

  .pale-lilac {
    & .v-input__slot {
      background: #E5E7F3 !important;
    }
  }

  .v-input__control {
    min-height: 32px !important;
    height: 32px !important;
  }


</style>
