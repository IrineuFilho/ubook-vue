<template>

  <v-container fluid class="pb-0">
    <v-row>
      <v-col
          lg="auto"
          md="auto"
          sm="auto"
      >
        <img
            src="@/assets/ic-logo.svg"
            class="mr-7"
        />
      </v-col >
      <v-col
          class="text-right"
          md="2"
          sm="4"
      >
        <add-contact-button
            v-if="contacts.length > 0"/>
      </v-col>
      <v-col>
        <search-field/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import AddContactButton from "./AddContactButton";
import SearchField from "./SearchField";
import { mapGetters } from 'vuex';

export default {
  name: 'toolbar',
  components: { AddContactButton, SearchField },
  computed: {
    ...mapGetters('contactBook', ['contacts'])
  }
}

</script>
