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
import { mapActions, mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters('contactBook', ['searchField'])
  },
  watch: {
    search() {
      clearTimeout(this.interval)
      this.interval = setTimeout(() => {
        this.searchInContacts(this.search)
      }, 400)
    },
    searchField(newValue) {
      if (newValue === '')
        this.search = ''
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
